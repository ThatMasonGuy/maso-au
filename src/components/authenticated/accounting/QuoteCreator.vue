<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Create Quote</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Quote Section -->
                <Card>
                    <CardHeader>
                        <CardTitle>Quote</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form @submit.prevent="saveQuote">
                            <div class="space-y-4">
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label for="client">Client</Label>
                                        <SelectContactsButton @clientSelected="handleClientSelection" />
                                    </div>
                                    <div>
                                        <Label for="quoteNumber">Quote Number</Label>
                                        <Input id="quoteNumber" v-model="quote.quoteNumber" readonly />
                                    </div>
                                </div>

                                <div>
                                    <Label>Items</Label>
                                    <div v-for="(item, index) in quote.items" :key="index" class="flex space-x-2 mb-2">
                                        <Input v-model="item.description" placeholder="Item description"
                                            class="flex-grow" />
                                        <Input v-model.number="item.quantity" placeholder="Qty"
                                            class="w-12" />
                                        <Input v-model.number="item.price" placeholder="Cost"
                                            class="w-12" />
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Button type="button" variant="destructive"
                                                        @click="removeItem(index)" :disabled="quote.items.length === 1">
                                                        X
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent v-if="quote.items.length === 1">
                                                    There must be at least one item
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <Button type="button" @click="addItem" class="mt-2">Add Item</Button>
                                </div>

                                <div>
                                    <Label for="notes">Notes</Label>
                                    <Textarea id="notes" v-model="quote.notes" rows="3" />
                                </div>

                                <div class="text-right">
                                    <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
                                    <p>Tax ({{ taxRate }}%): ${{ tax.toFixed(2) }}</p>
                                    <p class="font-bold">Total: ${{ total.toFixed(2) }}</p>
                                </div>

                                <Button type="submit">Save Quote</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <!-- Client Section -->
                <Card>
                    <CardHeader>
                        <CardTitle class="flex justify-between items-center">
                            <span>Client</span>
                            <Button @click="editClient" variant="outline" size="sm">Edit</Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-2">
                            <div>
                                <Label>Full name</Label>
                                <Input v-model="selectedClient.name" readonly />
                            </div>
                            <div>
                                <Label>Phone number</Label>
                                <Input v-model="selectedClient.phone" readonly />
                            </div>
                            <div>
                                <Label>Email address</Label>
                                <Input v-model="selectedClient.email" readonly />
                            </div>
                            <Button @click="showMoreClientInfo" variant="outline" size="sm">Show more</Button>
                        </div>

                        <div class="mt-8">
                            <h3 class="text-lg font-semibold mb-4">Recent Transactions</h3>
                            <div v-if="recentTransactions.length === 0" class="text-gray-500">
                                No recent transactions
                            </div>
                            <div v-else class="space-y-2 max-h-60 overflow-y-auto">
                                <div v-for="transaction in recentTransactions" :key="transaction.id"
                                    class="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                                    @click="openTransaction(transaction)">
                                    <div class="flex justify-between">
                                        <span>{{ transaction.type }} - {{ formatDate(transaction.date) }}</span>
                                        <span>${{ transaction.total.toFixed(2) }}</span>
                                    </div>
                                    <div class="text-sm text-gray-600 truncate">{{ transaction.description }}</div>
                                </div>
                            </div>
                            <Button v-if="hasMoreTransactions" @click="loadMoreTransactions" variant="link"
                                class="mt-2">
                                Show more
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        <!-- Edit Client Dialog -->
        <Dialog :open="isEditClientModalOpen" @update:open="isEditClientModalOpen = $event">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Client</DialogTitle>
                </DialogHeader>
                <form @submit.prevent="updateClient">
                    <!-- Add form fields for editing client info -->
                    <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>

        <!-- Transaction Warning Dialog -->
        <Dialog :open="isTransactionWarningOpen" @update:open="isTransactionWarningOpen = $event">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Warning</DialogTitle>
                </DialogHeader>
                <p>Opening this transaction will cause you to lose any unsaved changes. Are you sure you want to
                    continue?</p>
                <DialogFooter>
                    <Button @click="confirmOpenTransaction">Continue</Button>
                    <Button @click="isTransactionWarningOpen = false" variant="outline">Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';
import { firestore } from '@/firebase';
import { collection, query, orderBy, limit, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import SelectContactsButton from '@/components/authenticated/accounting/SelectContactsButton.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const user = computed(() => store.getters.user);

const quote = ref({
    clientId: null,
    quoteNumber: 'Q-' + Date.now(),
    items: [{ description: '', quantity: 1, price: 0 }],
    notes: '',
});

const selectedClient = ref({});
const recentTransactions = ref([]);
const hasMoreTransactions = ref(false);
const isEditClientModalOpen = ref(false);
const isTransactionWarningOpen = ref(false);
const pendingTransaction = ref(null);

const taxRate = 10; // 10% tax rate

const subtotal = computed(() => {
    return quote.value.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
});

const tax = computed(() => {
    return subtotal.value * (taxRate / 100);
});

const total = computed(() => {
    return subtotal.value + tax.value;
});

onMounted(async () => {
    await fetchRecentTransactions();
});

const handleClientSelection = (client) => {
    quote.value.clientId = client.id;
    selectedClient.value = client;
};

const addItem = () => {
    quote.value.items.push({ description: '', quantity: 1, price: 0 });
};

const removeItem = (index) => {
    if (quote.value.items.length > 1) {
        quote.value.items.splice(index, 1);
    }
};

const saveQuote = async () => {
    try {
        const quoteRef = doc(collection(firestore, `users/${user.value.uid}/accounting/details/quotes`));
        await setDoc(quoteRef, {
            ...quote.value,
            createdAt: new Date(),
            total: total.value,
        });
        toast.success('Quote saved successfully');
        router.push('/auth/accounting/quotes');
    } catch (error) {
        console.error('Error saving quote:', error);
        toast.error('Failed to save quote');
    }
};

const fetchRecentTransactions = async () => {
    if (!quote.value.clientId) return;

    const transactionsRef = collection(firestore, `users/${user.value.uid}/accounting/details/transactions`);
    const q = query(transactionsRef,
        orderBy('createdAt', 'desc'),
        limit(6)); // Fetch 6 to check if there are more
    const snapshot = await getDocs(q);

    recentTransactions.value = snapshot.docs.slice(0, 5).map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));

    hasMoreTransactions.value = snapshot.docs.length > 5;
};

const loadMoreTransactions = async () => {
    // Implement logic to load more transactions
    // This might involve updating the query to use startAfter() with the last document
};

const editClient = () => {
    isEditClientModalOpen.value = true;
};

const updateClient = async () => {
    try {
        const clientRef = doc(firestore, `users/${user.value.uid}/accounting/details/contacts/${selectedClient.value.id}`);
        await updateDoc(clientRef, {
            // Update with the edited client information
        });
        toast.success('Client information updated');
        isEditClientModalOpen.value = false;
    } catch (error) {
        console.error('Error updating client:', error);
        toast.error('Failed to update client information');
    }
};

const showMoreClientInfo = () => {
    // Implement logic to show more client information
    // This might open a modal or expand a section with additional details
};

const openTransaction = (transaction) => {
    pendingTransaction.value = transaction;
    isTransactionWarningOpen.value = true;
};

const confirmOpenTransaction = () => {
    isTransactionWarningOpen.value = false;
    // Navigate to the transaction details page
    router.push(`/auth/accounting/${pendingTransaction.value.type}s/${pendingTransaction.value.id}`);
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};
</script>