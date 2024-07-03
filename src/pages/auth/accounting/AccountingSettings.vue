<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Accounting Settings</h1>
            <div v-if="loading" class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
            <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
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
                                        <Select v-model="accountingSettings.general.currency">
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
                                        <Checkbox id="gstRegistered" v-model="accountingSettings.general.gstRegistered"
                                            :checked="accountingSettings.general.gstRegistered"
                                            @update:checked="accountingSettings.general.gstRegistered = !accountingSettings.general.gstRegistered" />
                                        <Label for="gstRegistered">Are you set up for GST?</Label>
                                    </div>
                                    <div>
                                        <Label for="taxRate">Default GST Rate (%)</Label>
                                        <Input :disabled="!accountingSettings.general.gstRegistered" type="number"
                                            id="taxRate" v-model="accountingSettings.general.taxRate" min="0" max="100"
                                            step="0.1" />
                                    </div>
                                    <div class="grid grid-cols-3 w-full items-center gap-2">
                                        <div>
                                            <Label class="ml-1" for="invoicePrefix">Invoice Prefix</Label>
                                            <Input type="text" id="invoicePrefix"
                                                v-model="accountingSettings.general.invoicePrefix" />
                                        </div>
                                        <div class="col-span-2">
                                            <div class="flex justify-between w-full">
                                                <Label class="ml-1" for="startingNumber">Starting Number</Label>
                                                <Label class="ml-1 font-normal text-gray-600 text-sm"
                                                    for="startingNumber">Most recent invoice: {{
                accountingSettings.general.startingNumber }}</Label>
                                            </div>
                                            <Input type="number" id="startingNumber"
                                                v-model="accountingSettings.general.startingNumber" />
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <Tooltip>
                                            <TooltipTrigger as-child>
                                                <Checkbox id="receiveNotifications" disabled
                                                    v-model="accountingSettings.general.receiveNotifications"
                                                    :checked="accountingSettings.general.receiveNotifications"
                                                    @update:checked="accountingSettings.general.receiveNotifications = !accountingSettings.general.receiveNotifications" />
                                                <Label for="receiveNotifications">Receive Notifications</Label>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Notification functionality coming soon!
                                            </TooltipContent>
                                        </Tooltip>
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
                                        <Input id="businessName" v-model="accountingSettings.account.businessName"
                                            required />
                                    </div>
                                    <div>
                                        <Label for="businessLogo">Business Logo</Label>
                                        <div class="flex items-center space-x-4">
                                            <Input id="businessLogo" type="file" @change="handleLogoUpload"
                                                accept="image/*" />
                                            <img v-if="accountingSettings.account.businessLogo"
                                                :src="accountingSettings.account.businessLogo" alt="Business Logo"
                                                class="h-16 w-16 object-contain" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label for="businessAddress">Business Address</Label>
                                        <Textarea id="businessAddress"
                                            v-model="accountingSettings.account.businessAddress" />
                                    </div>
                                    <div>
                                        <Label for="businessPhone">Business Phone Number</Label>
                                        <Input v-maska data-maska="#### ### ###" id="businessPhone" v-model="accountingSettings.account.businessPhone"
                                            type="tel" />
                                    </div>
                                    <div>
                                        <Label for="businessNumber">ABN/Business Number</Label>
                                        <Input id="businessNumber"
                                            v-model="accountingSettings.account.businessNumber" />
                                    </div>
                                    <div>
                                        <Label>Business Bank Details</Label>
                                        <div class="space-y-2">
                                            <Input v-model="accountingSettings.account.bankDetails.accountName"
                                                placeholder="Account Name" />
                                            <Input v-maska data-maska="##########" id="accountNumber" v-model="accountingSettings.account.bankDetails.accountNumber"
                                                placeholder="Account Number" />
                                            <Input v-maska data-maska="###-###" id="bsbNumber" v-model="accountingSettings.account.bankDetails.bsbNumber"
                                                placeholder="BSB Number" />
                                        </div>
                                    </div>
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
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const loading = ref(true);
const error = ref(null);
const store = useStore();

const accountingSettings = computed({
  get: () => store.state.accountingSettings,
  set: (val) => store.commit('SET_ACCOUNTING_SETTINGS', val)
});

onMounted(async () => {
  try {
    await store.dispatch('fetchAccountingSettings');
    loading.value = false;
  } catch (err) {
    error.value = "Failed to load settings. Please try again later.";
    console.error('Error fetching settings:', err);
    loading.value = false;
  }
});

const saveGeneralSettings = async () => {
  try {
    await store.dispatch('updateAccountingSettings', {
      general: accountingSettings.value.general
    });
    toast.success('General settings saved successfully');
  } catch (error) {
    console.error('Error saving general settings:', error);
    toast.error('Failed to save general settings');
  }
};

const saveAccountSettings = async () => {
  try {
    await store.dispatch('updateAccountingSettings', {
      account: accountingSettings.value.account
    });
    toast.success('Account settings saved successfully');
  } catch (error) {
    console.error('Error saving account settings:', error);
    toast.error('Failed to save account settings');
  }
};

const handleLogoUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      const logoUrl = await store.dispatch('uploadLogo', file);
      accountingSettings.value.account.businessLogo = logoUrl;
    } catch (error) {
      console.error('Error uploading logo:', error);
      toast.error('Failed to upload logo');
    }
  }
};
</script>