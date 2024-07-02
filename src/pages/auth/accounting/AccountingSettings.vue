<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Accounting Settings</h1>
            <div v-if="loading" class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
            <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">{{ error }}</span>
            </div>
            <div v-else>
                <Tabs defaultValue="general" class="w-full">
                    <TabsList>
                        <TabsTrigger value="general">General Settings</TabsTrigger>
                        <TabsTrigger value="account">Account Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="general">
                        <Card class="bg-white shadow-md">
                            <CardHeader>
                                <CardTitle>General Settings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form @submit.prevent="saveGeneralSettings" class="space-y-4">
                                    <div>
                                        <Label for="currency">Default Currency</Label>
                                        <Select v-model="generalSettings.currency">
                                            <SelectTrigger id="currency">
                                                <SelectValue placeholder="Select currency" />
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
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <Checkbox id="gstRegistered" v-model="generalSettings.gstRegistered" />
                                        <Label for="gstRegistered">Are you set up for GST?</Label>
                                    </div>
                                    <div>
                                        <Label for="taxRate">Default GST Rate (%)</Label>
                                        <Input :disabled="!generalSettings.gstRegistered" type="number" id="taxRate" v-model="generalSettings.taxRate"
                                            min="0" max="100" step="0.1" />
                                    </div>
                                    <div class="grid grid-cols-3 w-full items-center gap-2">
                                        <div>
                                            <Label class="ml-1" for="invoicePrefix">Invoice Prefix</Label>
                                            <Input type="text" id="invoicePrefix" v-model="generalSettings.invoicePrefix" />
                                        </div>
                                        <div class="col-span-2">
                                            <div class="flex justify-between w-full">
                                                <Label class="ml-1" for="startingNumber">Starting Number</Label>
                                                <Label class="ml-1 font-normal text-gray-600 text-sm" for="startingNumber">Most recent invoice: {{ generalSettings.startingNumber }}</Label>
                                            </div>
                                            <Input type="number" id="startingNumber" v-model="generalSettings.startingNumber" />
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <Checkbox id="receiveNotifications" v-model="generalSettings.receiveNotifications" />
                                        <Label for="receiveNotifications">Receive Notifications</Label>
                                    </div>
                                    <div class="pt-4">
                                        <Button type="submit">Save General Settings</Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="account">
                        <Card class="bg-white shadow-md">
                            <CardHeader>
                                <CardTitle>Account Settings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form @submit.prevent="saveAccountSettings" class="space-y-4">
                                    <div>
                                        <Label for="businessName">Business Name</Label>
                                        <Input id="businessName" v-model="accountSettings.businessName" required />
                                    </div>
                                    <div>
                                        <Label for="businessLogo">Business Logo</Label>
                                        <div class="flex items-center space-x-4">
                                            <Input id="businessLogo" type="file" @change="handleLogoUpload" accept="image/*" />
                                            <img v-if="accountSettings.businessLogo" :src="accountSettings.businessLogo" alt="Business Logo" class="h-16 w-16 object-contain" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label for="businessAddress">Business Address</Label>
                                        <Textarea id="businessAddress" v-model="accountSettings.businessAddress" />
                                    </div>
                                    <div>
                                        <Label for="businessPhone">Business Phone Number</Label>
                                        <Input id="businessPhone" v-model="accountSettings.businessPhone" type="tel" />
                                    </div>
                                    <div>
                                        <Label for="businessNumber">ABN/Business Number</Label>
                                        <Input id="businessNumber" v-model="accountSettings.businessNumber" />
                                    </div>
                                    <div>
                                        <Label>Business Bank Details</Label>
                                        <div class="space-y-2">
                                            <Input v-model="accountSettings.bankDetails.accountName" placeholder="Account Name" />
                                            <Input v-model="accountSettings.bankDetails.accountNumber" placeholder="Account Number" />
                                            <Input v-model="accountSettings.bankDetails.bsbNumber" placeholder="BSB Number" />
                                        </div>
                                    </div>
                                    <Button @click.prevent="console.log('accountingSettings: ', accountingSettings)">Log store details</Button>
                                    <div class="pt-4">
                                        <Button type="submit">Save Account Settings</Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { toast } from 'vue-sonner';
import { useStore } from 'vuex';
import { auth, firestore } from '@/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const loading = ref(true);
const error = ref(null);
const store = useStore();
const accountingSettings = computed(() => store.state.accountingSettings)

const generalSettings = ref({
    currency: 'AUD',
    gstRegistered: false,
    taxRate: 10,
    invoicePrefix: 'INV-',
    startingNumber: '00001',
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
        bsbNumber: '',
    },
});

onMounted(async () => {
    try {
        await fetchSettings();
    } catch (err) {
        error.value = "Failed to load settings. Please try again later.";
        console.error('Error fetching settings:', err);
    } finally {
        loading.value = false;
    }
});

const fetchSettings = async () => {
    const userId = auth.currentUser.uid;
    const settingsRef = doc(firestore, `users/${userId}/accounting/settings`);
    const settingsSnap = await getDoc(settingsRef);

    if (settingsSnap.exists()) {
        const data = settingsSnap.data();
        if (data.general) {
            generalSettings.value = { ...generalSettings.value, ...data.general };
        }
        if (data.account) {
            accountSettings.value = { ...accountSettings.value, ...data.account };
        }
    }
};

const saveGeneralSettings = async () => {
    try {
        const userId = auth.currentUser.uid;
        const settingsRef = doc(firestore, `users/${userId}/accounting/settings`);
        await updateDoc(settingsRef, {
            general: generalSettings.value
        });
        toast.success('General settings saved successfully');
    } catch (error) {
        console.error('Error saving general settings:', error);
        toast.error('Failed to save general settings');
    }
};

const saveAccountSettings = async () => {
    try {
        const userId = auth.currentUser.uid;
        const settingsRef = doc(firestore, `users/${userId}/accounting/settings`);
        await updateDoc(settingsRef, {
            account: accountSettings.value
        });
        toast.success('Account settings saved successfully');
    } catch (error) {
        console.error('Error saving account settings:', error);
        toast.error('Failed to save account settings');
    }
};

const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            accountSettings.value.businessLogo = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};
</script>