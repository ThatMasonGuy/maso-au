<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Create Receipt</h1>
            <form @submit.prevent="saveReceipt" class="space-y-6 bg-white shadow-md rounded-lg p-6">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <Label for="receiptNumber">Receipt Number</Label>
                        <Input id="receiptNumber" v-model="receipt.receiptNumber" readonly />
                    </div>
                    <div>
                        <Label for="date">Date</Label>
                        <Input id="date" type="date" v-model="receipt.date" />
                    </div>
                </div>
                <div>
                    <Label for="payer">Payer</Label>
                    <Input id="payer" v-model="receipt.payer" placeholder="Enter payer name or company" />
                </div>
                <div>
                    <Label for="description">Description</Label>
                    <Input id="description" v-model="receipt.description" placeholder="Enter payment description" />
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <Label for="amount">Amount</Label>
                        <Input id="amount" type="number" v-model.number="receipt.amount" step="0.01" />
                    </div>
                    <div>
                        <Label for="paymentMethod">Payment Method</Label>
                        <Select v-model="receipt.paymentMethod">
                            <SelectTrigger id="paymentMethod">
                                <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cash">Cash</SelectItem>
                                <SelectItem value="creditCard">Credit Card</SelectItem>
                                <SelectItem value="bankTransfer">Bank Transfer</SelectItem>
                                <SelectItem value="check">Check</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div>
                    <Label for="notes">Additional Notes</Label>
                    <Textarea id="notes" v-model="receipt.notes" rows="3" />
                </div>
                <div class="flex justify-end">
                    <Button type="submit">Save Receipt</Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { toast } from 'vue-sonner'
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const receipt = ref({
    receiptNumber: 'R-' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    payer: '',
    description: '',
    amount: 0,
    paymentMethod: '',
    notes: '',
});

const saveReceipt = () => {
    // Here you would typically save the receipt to your backend
    console.log('Saving receipt:', receipt.value);
    toast.success('Receipt saved successfully');
    // Reset form or redirect to receipt list
};
</script>