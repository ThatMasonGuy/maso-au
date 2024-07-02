<template>
    <div class="bg-gray-100 min-h-screen p-8">
        <div class="max-w-3xl mx-auto h-full my-auto bg-white shadow-lg rounded-lg p-8">
            <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Welcome to Your Accounting Setup!</h1>
            <div class="mb-6">
                <Progress :value="progressPercentage" class="w-full" />
                <p class="text-center mt-2 text-sm text-gray-600">Step {{ currentStep }} of 3</p>
            </div>

            <div v-if="currentStep === 1">
                <h2 class="text-2xl font-semibold mb-6 text-blue-800">Step 1: General Information</h2>
                <form @submit.prevent="nextStep" class="space-y-6">
                    <div>
                        <Label for="currency">Currency</Label>
                        <Select v-model="generalSettings.currency">
                            <SelectTrigger id="currency">
                                <SelectValue placeholder="Choose your preferred currency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                                <SelectItem value="NZD">NZD - New Zealand Dollar</SelectItem>
                                <SelectItem value="USD">USD - United States Dollar</SelectItem>
                            </SelectContent>
                        </Select>
                        <p class="text-sm text-gray-600 mt-1">Choose your preferred currency to keep your accounts
                            consistent.</p>
                    </div>

                    <div>
                        <Label for="invoicePrefix">Invoice Prefix</Label>
                        <Input id="invoicePrefix" v-model="generalSettings.invoicePrefix" placeholder="e.g., INV-" />
                        <p class="text-sm text-gray-600 mt-1">Enter a prefix for your invoices to help with organization
                            and tracking.</p>
                    </div>

                    <div>
                        <Label for="startingNumber">Invoice Starting Number</Label>
                        <Input id="startingNumber" v-model="generalSettings.startingNumber" type="number" min="1" />
                        <p class="text-sm text-gray-600 mt-1">Start with a unique number for easy tracking.</p>
                    </div>

                    <div>
                        <Label for="taxRate">Tax Rate (%)</Label>
                        <Input id="taxRate" v-model="generalSettings.taxRate" type="number" min="0" max="100"
                            step="0.1" />
                        <p class="text-sm text-gray-600 mt-1">Enter the tax rate for your region.</p>
                    </div>

                    <div class="flex items-center space-x-2">
                        <Checkbox id="gstRegistered" v-model="generalSettings.gstRegistered" />
                        <Label for="gstRegistered">GST Registered</Label>
                    </div>

                    <div class="flex items-center space-x-2">
                        <Checkbox id="receiveNotifications" v-model="generalSettings.receiveNotifications" />
                        <Label for="receiveNotifications">Receive Notifications</Label>
                    </div>

                    <Button type="submit" class="w-full">Next</Button>
                </form>
            </div>

            <div v-if="currentStep === 2">
                <h2 class="text-2xl font-semibold mb-6 text-blue-800">Step 2: Account Details</h2>
                <form @submit.prevent="nextStep" class="space-y-6">
                    <div>
                        <Label for="businessName">Business Name</Label>
                        <Input id="businessName" v-model="accountSettings.businessName" required
                            placeholder="Your Business Name" />
                        <p class="text-sm text-gray-600 mt-1">Let's get your business identity set up!</p>
                    </div>

                    <div>
                        <Label for="businessLogo">Business Logo</Label>
                        <div class="flex items-center space-x-4">
                            <Input id="businessLogo" type="file" @change="handleLogoUpload" accept="image/*" />
                            <img v-if="logoPreview" :src="logoPreview" alt="Logo Preview"
                                class="h-16 w-16 object-contain" />
                        </div>
                        <p class="text-sm text-gray-600 mt-1">Your logo helps make your brand recognizable.</p>
                    </div>

                    <div>
                        <Label for="businessAddress">Business Address</Label>
                        <Textarea id="businessAddress" v-model="accountSettings.businessAddress" required
                            placeholder="123 Business St, City, State, Postal Code" />
                    </div>

                    <div>
                        <Label for="businessPhone">Business Phone</Label>
                        <Input id="businessPhone" v-model="accountSettings.businessPhone" type="tel" required
                            placeholder="e.g., (123) 456-7890" />
                        <p class="text-sm text-gray-600 mt-1">So customers can reach you easily.</p>
                    </div>

                    <div>
                        <Label for="businessNumber">Business Number (ABN)</Label>
                        <Input id="businessNumber" v-model="accountSettings.businessNumber" required
                            placeholder="e.g., 12 345 678 901" />
                        <p class="text-sm text-gray-600 mt-1">Your Australian Business Number for official records.</p>
                    </div>

                    <Button type="submit" class="w-full">Next</Button>
                </form>
            </div>

            <div v-if="currentStep === 3">
                <h2 class="text-2xl font-semibold mb-6 text-blue-800">Step 3: Bank Details</h2>
                <form @submit.prevent="finishSetup" class="space-y-6">
                    <div>
                        <Label for="accountName">Account Name</Label>
                        <Input id="accountName" v-model="accountSettings.bankDetails.accountName" required
                            placeholder="Account Name" />
                        <p class="text-sm text-gray-600 mt-1">We'll keep your banking details secure.</p>
                    </div>

                    <div>
                        <Label for="accountNumber">Account Number</Label>
                        <Input id="accountNumber" v-model="accountSettings.bankDetails.accountNumber" required
                            placeholder="Account Number" />
                        <p class="text-sm text-gray-600 mt-1">Your account number remains confidential.</p>
                    </div>

                    <div>
                        <Label for="bankingInstitute">Banking Institute</Label>
                        <Input id="bankingInstitute" v-model="accountSettings.bankDetails.bankingInstitute" required
                            placeholder="Bank Name" />
                        <p class="text-sm text-gray-600 mt-1">Who handles your finances?</p>
                    </div>

                    <div>
                        <Label for="bsbNumber">BSB Number</Label>
                        <Input id="bsbNumber" v-model="accountSettings.bankDetails.bsbNumber" required
                            placeholder="BSB Number" />
                        <p class="text-sm text-gray-600 mt-1">The BSB identifies your bank.</p>
                    </div>

                    <Button type="submit" class="w-full">Complete Setup</Button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'vue-sonner';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const db = getFirestore();
const storage = getStorage();
const currentStep = ref(1);
const logoPreview = ref(null);
const logoFile = ref(null);

const generalSettings = ref({
    currency: 'AUD',
    invoicePrefix: 'INV-',
    startingNumber: '00001',
    taxRate: 10,
    gstRegistered: true,
    receiveNotifications: false,
});

const accountSettings = ref({
    businessName: '',
    businessLogo: '',
    businessAddress: '',
    businessPhone: '',
    businessNumber: '',
    bankDetails: {
        accountName: '',
        accountNumber: '',
        bankingInstitute: '',
        bsbNumber: '',
    },
});

const nextStep = () => {
    currentStep.value++;
};

const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        logoFile.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            logoPreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const uploadLogo = async () => {
    if (logoFile.value) {
        const userId = auth.currentUser.uid;
        const storagePath = `users/user/${userId}/accounting/myLogo/`;
        const logoRef = storageRef(storage, storagePath);
        
        const list = await listAll(logoRef);
        const fileNames = list.items.map(item => item.name);
        
        let newFileName = 'logo1';
        let index = 1;
        while (fileNames.includes(newFileName)) {
            index += 1;
            newFileName = `logo${index}`;
        }

        const newLogoRef = storageRef(storage, `${storagePath}${newFileName}`);
        const snapshot = await uploadBytes(newLogoRef, logoFile.value);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    }
    return null;
};

const finishSetup = async () => {
    try {
        const userId = auth.currentUser.uid;
        const logoUrl = await uploadLogo();
        if (logoUrl) {
            accountSettings.value.businessLogo = logoUrl;
        }
        const accountingRef = doc(db, `users/${userId}/accounting/settings`);
        await setDoc(accountingRef, {
            general: generalSettings.value,
            account: accountSettings.value,
        });
        toast.success('Setup completed successfully!');
        router.push('/auth/accounting/dashboard');
    } catch (error) {
        console.error('Error saving settings:', error);
        toast.error('Failed to complete setup. Please try again.');
    }
};

const progressPercentage = computed(() => (currentStep.value / 3) * 100);

// Fetch initial data
if (auth.currentUser) {
    store.dispatch('fetchAccountingSettings');
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>