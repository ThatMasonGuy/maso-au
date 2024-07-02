<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Create Invoice</h1>
            <form @submit.prevent="saveInvoice" class="space-y-6 bg-white shadow-md rounded-lg p-6">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <Label for="client">Client</Label>
                        <Select v-model="invoice.clientId">
                            <SelectTrigger id="client">
                                <SelectValue placeholder="Select client" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem v-for="client in clients" :key="client.id" :value="client.id">
                                    {{ client.name }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label for="invoiceNumber">Invoice Number</Label>
                        <Input id="invoiceNumber" v-model="invoice.invoiceNumber" readonly />
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <Label for="issueDate">Issue Date</Label>
                        <Input id="issueDate" type="date" v-model="invoice.issueDate" />
                    </div>
                    <div>
                        <Label for="dueDate">Due Date</Label>
                        <Input id="dueDate" type="date" v-model="invoice.dueDate" />
                    </div>
                </div>
                <div>
                    <Label>Items</Label>
                    <div v-for="(item, index) in invoice.items" :key="index" class="flex space-x-2 mb-2">
                        <Input v-model="item.description" placeholder="Description" class="flex-grow" />
                        <Input v-model.number="item.quantity" type="number" placeholder="Qty" class="w-20" />
                        <Input v-model.number="item.price" type="number" placeholder="Price" class="w-32" />
                        <Button type="button" variant="destructive" @click="removeItem(index)">Remove</Button>
                    </div>
                    <Button type="button" @click="addItem" class="mt-2">Add Item</Button>
                </div>
                <div class="flex justify-between">
                    <div>
                        <Label for="notes">Notes</Label>
                        <Textarea id="notes" v-model="invoice.notes" rows="3" class="w-full" />
                    </div>
                    <div class="text-right">
                        <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
                        <p>Tax ({{ taxRate }}%): ${{ tax.toFixed(2) }}</p>
                        <p class="font-bold">Total: ${{ total.toFixed(2) }}</p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <Button type="submit">Save Invoice</Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { toast } from 'vue-sonner'
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const clients = ref([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
]);

const taxRate = 10; // 10% tax rate

const invoice = ref({
    clientId: null,
    invoiceNumber: 'INV-' + Date.now(),
    issueDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Due in 30 days
    items: [{ description: '', quantity: 1, price: 0 }],
    notes: '',
});

const addItem = () => {
    invoice.value.items.push({ description: '', quantity: 1, price: 0 });
};

const removeItem = (index) => {
    invoice.value.items.splice(index, 1);
};

const subtotal = computed(() => {
    return invoice.value.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
});

const tax = computed(() => {
    return subtotal.value * (taxRate / 100);
});

const total = computed(() => {
    return subtotal.value + tax.value;
});

const saveInvoice = () => {
    // Here you would typically save the invoice to your backend
    console.log('Saving invoice:', invoice.value);
    toast.success('Invoice saved successfully');
};
</script>