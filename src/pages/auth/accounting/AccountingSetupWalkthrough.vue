<template>
    <div class="bg-gray-100 min-h-screen p-8">
        <div class="max-w-3xl mx-auto h-full my-auto bg-white shadow-lg rounded-lg p-8">
            <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Welcome to Your Accounting Setup!</h1>
            <div class="mb-6">
                <Progress v-model="progressPercentage" class="w-full" />
                <p class="text-center mt-2 text-sm text-gray-600">Step {{ currentStep }} of 3</p>
            </div>

            <div v-if="currentStep === 1">
                <h2 class="text-2xl font-semibold mb-6 text-blue-800">Step 1: General Information</h2>
                <form @submit.prevent="nextStep" class="space-y-6">
                    <div>
                        <Label for="currency">Currency</Label>
                        <Select v-model="accountingSettings.general.currency">
                            <SelectTrigger id="currency">
                                <SelectValue placeholder="Choose your preferred currency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                                <SelectItem value="NZD">NZD - New Zealand Dollar</SelectItem>
                                <SelectItem value="USD">USD - United States Dollar</SelectItem>
                                <SelectItem value="EUR">EUR - Euro</SelectItem>
                                <SelectItem value="GBP">GBP - British Pound</SelectItem>
                                <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                            </SelectContent>
                        </Select>
                        <p class="text-sm text-gray-600 mt-1">Choose your preferred currency to keep your accounts
                            consistent.</p>
                    </div>
                    <div>
                        <Label for="invoicePrefix">Invoice Prefix</Label>
                        <Input id="invoicePrefix" v-model="accountingSettings.general.invoicePrefix"
                            placeholder="e.g., INV-" />
                        <p class="text-sm text-gray-600 mt-1">Enter a prefix for your invoices to help with organization
                            and tracking.</p>
                    </div>
                    <div>
                        <Label for="startingNumber">Invoice Starting Number</Label>
                        <Input id="startingNumber" v-model="accountingSettings.general.startingNumber" type="number"
                            min="1" />
                        <p class="text-sm text-gray-600 mt-1">Start with a unique number for easy tracking.</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Checkbox id="gstRegistered" v-model="accountingSettings.general.gstRegistered"
                        @update="accountingSettings.general.gstRegistered = !accountingSettings.general.gstRegistered" />
                        <Label for="gstRegistered">GST Registered</Label>
                    </div>
                    <div :disabled="accountingSettings.general.gstRegistered" class="-mt-2">
                        <Label for="taxRate">Tax Rate (%)</Label>
                        <Input id="taxRate"
                            v-model="accountingSettings.general.taxRate" type="number" min="0" max="100" step="0.1" />
                        <p class="text-sm text-gray-600 mt-1">Enter the tax rate for your region.</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Tooltip>
                            <TooltipTrigger as-child>
                                <Checkbox id="receiveNotifications" :disabled="true"
                                    v-model="accountingSettings.general.receiveNotifications"
                                    :checked="accountingSettings.general.receiveNotifications"
                                    @update:checked="accountingSettings.general.receiveNotifications = !accountingSettings.general.receiveNotifications" />
                                <Label for="receiveNotifications" :disabled="true">Receive Notifications</Label>
                            </TooltipTrigger>
                            <TooltipContent>
                                Notification functionality coming soon!
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <Button type="submit" class="w-full">Next</Button>
                </form>
            </div>

            <div v-if="currentStep === 2">
                <h2 class="text-2xl font-semibold mb-6 text-blue-800">Step 2: Account Details</h2>
                <form @submit.prevent="nextStep" class="space-y-6">
                    <div>
                        <Label for="businessName">Business Name</Label>
                        <Input id="businessName" v-model="accountingSettings.account.businessName" required
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
                        <Textarea id="businessAddress" v-model="accountingSettings.account.businessAddress" required
                            placeholder="123 Business St, City, State, Postal Code" />
                    </div>
                    <div>
                        <Label for="businessPhone">Business Phone</Label>
                        <Input v-maska data-maska="#### ### ###" id="businessPhone"
                            v-model="accountingSettings.account.businessPhone" type="tel" required
                            placeholder="e.g., (123) 456-7890" />
                        <p class="text-sm text-gray-600 mt-1">So customers can reach you easily.</p>
                    </div>
                    <div>
                        <Label for="businessNumber">Business Number (ABN)</Label>
                        <Input id="businessNumber" v-model="accountingSettings.account.businessNumber" required
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
                        <Label for="bankingInstitute">Banking Institute</Label>
                        <Input id="bankingInstitute" v-model="accountingSettings.account.bankDetails.bankingInstitute"
                            required placeholder="Bank Name" />
                        <p class="text-sm text-gray-600 mt-1">What bank do you use?</p>
                    </div>
                    <div>
                        <Label for="accountName">Account Name</Label>
                        <Input id="accountName" v-model="accountingSettings.account.bankDetails.accountName" required
                            placeholder="Account Name" />
                        <p class="text-sm text-gray-600 mt-1">We'll keep your banking details secure.</p>
                    </div>
                    <div>
                        <Label for="bsbNumber">BSB Number</Label>
                        <Input v-maska data-maska="###-###" id="bsbNumber"
                            v-model="accountingSettings.account.bankDetails.bsbNumber" required
                            placeholder="BSB Number" />
                        <p class="text-sm text-gray-600 mt-1">The BSB identifies your bank.</p>
                    </div>
                    <div>
                        <Label for="accountNumber">Account Number</Label>
                        <Input v-maska data-maska="##########" id="accountNumber"
                            v-model="accountingSettings.account.bankDetails.accountNumber" required
                            placeholder="Account Number" />
                        <p class="text-sm text-gray-600 mt-1">Your account number remains confidential.</p>
                    </div>
                    <Button type="submit" class="w-full">Complete Setup</Button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { setDoc } from 'firebase/firestore';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'vue-sonner';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const currentStep = ref(1);
const logoPreview = ref(null);
const logoFile = ref(null);
const progressPercentage = computed(() => (currentStep.value * 33) + 1);

const accountingSettings = computed({
    get: () => {
        const settings = store.state.accountingSettings || {};
        return {
            general: {
                currency: settings.general?.currency || 'AUD',
                invoicePrefix: settings.general?.invoicePrefix || 'INV-',
                startingNumber: settings.general?.startingNumber || '00001',
                taxRate: settings.general?.taxRate || '10',
                gstRegistered: settings.general?.gstRegistered || true,
                receiveNotifications: settings.general?.receiveNotifications || true,
            },
            account: {
                businessName: settings.account?.businessName || '',
                businessLogo: settings.account?.businessLogo || '',
                businessAddress: settings.account?.businessAddress || '',
                businessPhone: settings.account?.businessPhone || '',
                businessNumber: settings.account?.businessNumber || '',
                bankDetails: {
                    bankingInstitute: settings.account?.bankDetails?.bankingInstitute || '',
                    accountName: settings.account?.bankDetails?.accountName || '',
                    bsbNumber: settings.account?.bankDetails?.bsbNumber || '',
                    accountNumber: settings.account?.bankDetails?.accountNumber || '',
                },
            },
        };
    },
    set: (newValue) => {
        store.commit('SET_ACCOUNTING_SETTINGS', newValue);
    }
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

const finishSetup = async () => {
    try {
        if (logoFile.value) {
            const logoUrl = await store.dispatch('uploadLogo', logoFile.value);
            accountingSettings.value.account.businessLogo = logoUrl;
        }

        await store.dispatch('createOrUpdateAccountingSettings', accountingSettings.value);

        toast.success('Setup completed successfully!');
        router.push('/auth/accounting/dashboard');
    } catch (error) {
        console.error('Error saving settings:', error);
        toast.error('Failed to complete setup. Please try again.');
    }
};

// Fetch accounting settings when the component is created
store.dispatch('fetchAccountingSettings');
</script>