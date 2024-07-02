<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Create Quote</h1>
            <form @submit.prevent="saveQuote" class="space-y-6 bg-white shadow-md rounded-lg p-6">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <Label for="client">Client</Label>
                        <Select v-model="quote.clientId">
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
                        <Label for="quoteNumber">Quote Number</Label>
                        <Input id="quoteNumber" v-model="quote.quoteNumber" readonly />
                    </div>
                </div>
                <div>
                    <Label>Items</Label>
                    <div v-for="(item, index) in quote.items" :key="index" class="flex space-x-2 mb-2">
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
                        <Textarea id="notes" v-model="quote.notes" rows="3" class="w-full" />
                    </div>
                    <div class="text-right">
                        <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
                        <p>Tax ({{ taxRate }}%): ${{ tax.toFixed(2) }}</p>
                        <p class="font-bold">Total: ${{ total.toFixed(2) }}</p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <Button type="submit">Save Quote</Button>
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

const quote = ref({
    clientId: null,
    quoteNumber: 'Q-' + Date.now(),
    items: [{ description: '', quantity: 1, price: 0 }],
    notes: '',
});

const addItem = () => {
    quote.value.items.push({ description: '', quantity: 1, price: 0 });
};

const removeItem = (index) => {
    quote.value.items.splice(index, 1);
};

const subtotal = computed(() => {
    return quote.value.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
});

const tax = computed(() => {
    return subtotal.value * (taxRate / 100);
});

const total = computed(() => {
    return subtotal.value + tax.value;
});

const saveQuote = () => {
    // Here you would typically save the quote to your backend
    console.log('Saving quote:', quote.value);
    toast.success('Quote saved successfully');
};
</script>