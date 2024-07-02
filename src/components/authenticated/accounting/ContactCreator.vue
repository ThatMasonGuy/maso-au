<template>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 class="text-2xl font-semibold mb-4">{{ isEditing ? 'Edit Contact' : 'Add New Contact' }}</h2>
        <form @submit.prevent="saveContact" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label class="ml-1" for="name">Full name</Label>
                    <Input placeholder="John Appleseed" id="name" v-model="contact.name" required />
                </div>
                <div>
                    <Label class="ml-1" for="email">Email address</Label>
                    <Input placeholder="JohnAppleseed@email.com" id="email" type="email" v-model="contact.email" required />
                </div>
                <div>
                    <Label class="ml-1" for="phone">Phone number</Label>
                    <Input v-maska data-maska="#### ### ###" type="tel" placeholder="0412 345 678" id="phone" v-model="contact.phone" />
                </div>
                <div>
                    <Label class="ml-1" for="type">Type</Label>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Select v-model="contact.type">
                                <SelectTrigger id="type">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="client">Client</SelectItem>
                                    <SelectItem value="vendor">Vendor</SelectItem>
                                </SelectContent>
                            </Select>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Client: A person or business you provide services to.</p>
                            <p>Vendor: A person or business that provides services to you.</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div class="md:col-span-2">
                    <Label class="ml-1" for="address">Address</Label>
                    <Input placeholder="123 Main St, Sydney" id="address" v-model="contact.address" />
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <Checkbox id="billable" v-model="contact.bankDetails.billable" :checked="contact.bankDetails.billable"
                    @update:checked="contact.bankDetails.billable = !contact.bankDetails.billable" />
                <Label for="billable">Billable (Show Bank Details)</Label>
            </div>
            <Transition name="slide-fade">
                <div v-if="contact.bankDetails.billable" class="space-y-4">
                    <Label>Bank Details</Label>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input v-model="contact.bankDetails.accountName" placeholder="Account Name" />
                        <Input v-maska data-maska="##########" type="number" v-model="contact.bankDetails.accountNumber" placeholder="Account Number" />
                        <Input v-maska data-maska="###-###" v-model="contact.bankDetails.bsbNumber" placeholder="BSB Number" />
                    </div>
                </div>
            </Transition>
            <div class="flex justify-end space-x-2">
                <Button type="button" variant="outline" @click="cancelEdit">Cancel</Button>
                <Button type="submit">{{ isEditing ? 'Update' : 'Add' }} Contact</Button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watchEffect } from 'vue';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const props = defineProps({
    editingContact: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(['save', 'cancel']);

const contact = ref({
    name: '',
    email: '',
    phone: '',
    type: 'client',
    address: '',
    bankDetails: {
        billable: false,
        accountName: '',
        accountNumber: '',
        bsbNumber: ''
    }
});

const isEditing = ref(false);

watchEffect(() => {
    if (props.editingContact) {
        contact.value = {
            ...props.editingContact,
            bankDetails: {
                billable: props.editingContact.bankDetails?.billable || false,
                accountName: props.editingContact.bankDetails?.accountName || '',
                accountNumber: props.editingContact.bankDetails?.accountNumber || '',
                bsbNumber: props.editingContact.bankDetails?.bsbNumber || ''
            }
        };
        isEditing.value = true;
    } else {
        contact.value = {
            name: '',
            email: '',
            phone: '',
            type: 'client',
            address: '',
            bankDetails: {
                billable: false,
                accountName: '',
                accountNumber: '',
                bsbNumber: ''
            }
        };
        isEditing.value = false;
    }
});

const saveContact = () => {
    emit('save', contact.value);
};

const cancelEdit = () => {
    emit('cancel');
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>