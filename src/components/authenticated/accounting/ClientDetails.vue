<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Client Details</h1>

            <div v-if="loading" class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>

            <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">{{ error }}</span>
            </div>

            <div v-else-if="client" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Client Information Card -->
                <Card class="md:col-span-1">
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-2">
                            <p><strong>Name:</strong> {{ client.name }}</p>
                            <p><strong>Email:</strong> {{ client.email }}</p>
                            <p><strong>Phone:</strong> {{ client.phone }}</p>
                            <p><strong>Address:</strong> {{ client.address }}</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button @click="editClient">Edit Client</Button>
                    </CardFooter>
                </Card>

                <!-- Financial Summary Card -->
                <Card class="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Financial Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <h3 class="text-lg font-semibold">Total Invoiced</h3>
                                <p class="text-2xl font-bold text-green-600">{{
                formatCurrency(financialSummary.totalInvoiced) }}</p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold">Outstanding Balance</h3>
                                <p class="text-2xl font-bold text-red-600">{{
                formatCurrency(financialSummary.outstandingBalance) }}</p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold">Paid Invoices</h3>
                                <p class="text-2xl font-bold">{{ financialSummary.paidInvoices }}</p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold">Pending Invoices</h3>
                                <p class="text-2xl font-bold">{{ financialSummary.pendingInvoices }}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <!-- Transactions Table -->
            <Card v-if="client && transactions.length > 0" class="mt-6">
                <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="transaction in transactions" :key="transaction.id">
                                <TableCell>{{ formatDate(transaction.date) }}</TableCell>
                                <TableCell>{{ transaction.description }}</TableCell>
                                <TableCell>
                                    <Badge :variant="transaction.type === 'income' ? 'success' : 'destructive'">
                                        {{ transaction.type }}
                                    </Badge>
                                </TableCell>
                                <TableCell>{{ formatCurrency(transaction.amount) }}</TableCell>
                                <TableCell>
                                    <Badge :variant="getStatusVariant(transaction.status)">
                                        {{ transaction.status }}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button @click="viewTransaction(transaction)" variant="outline"
                                        size="sm">View</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div v-else-if="!loading && !error && !client"
                class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">No data!</strong>
                <span class="block sm:inline">No client data available.</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, firestore } from '@/firebase';
import router from '@/router';
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'vue-sonner';

const route = useRoute();
const client = ref(null);
const transactions = ref([]);
const financialSummary = ref({
    totalInvoiced: 0,
    outstandingBalance: 0,
    paidInvoices: 0,
    pendingInvoices: 0
});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    const clientId = route.params.id;
    try {
        await fetchClientData(clientId);
        await fetchClientTransactions(clientId);
        calculateFinancialSummary();
    } catch (err) {
        error.value = "Failed to load client data. Please try again later.";
        console.error('Error fetching client data:', err);
    } finally {
        loading.value = false;
    }
});

const fetchClientData = async (clientId) => {
    const userId = auth.currentUser.uid;
    const docRef = doc(firestore, `users/${userId}/accounting/settings/contacts/${clientId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        client.value = { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error('Client not found');
    }
};

const fetchClientTransactions = async (clientId) => {
    const userId = auth.currentUser.uid;
    const types = ['invoices', 'quotes', 'receipts'];
    let allTransactions = [];

    for (const type of types) {
        const q = query(
            collection(firestore, `users/${userId}/accounting/settings/${type}`),
            where('clientID', '==', clientId)
        );
        const querySnapshot = await getDocs(q);
        allTransactions = [...allTransactions, ...querySnapshot.docs.map(doc => ({
            id: doc.id,
            type: type.slice(0, -1), // Remove 's' from the end
            ...doc.data()
        }))];
    }

    transactions.value = allTransactions.sort((a, b) =>
        new Date(b.issueDate || b.receiptDate) - new Date(a.issueDate || a.receiptDate)
    );
};

const calculateFinancialSummary = () => {
    financialSummary.value = transactions.value.reduce((summary, transaction) => {
        if (transaction.type === 'income') {
            summary.totalInvoiced += transaction.amount;
            if (transaction.status === 'pending') {
                summary.outstandingBalance += transaction.amount;
                summary.pendingInvoices++;
            } else if (transaction.status === 'paid' || transaction.status === 'completed') {
                summary.paidInvoices++;
            }
        }
        return summary;
    }, {
        totalInvoiced: 0,
        outstandingBalance: 0,
        paidInvoices: 0,
        pendingInvoices: 0
    });
};

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));
};

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
};

const getStatusVariant = (status) => {
    switch (status) {
        case 'paid':
        case 'completed':
            return 'success';
        case 'pending':
            return 'warning';
        case 'overdue':
            return 'destructive';
        default:
            return 'default';
    }
};

const editClient = () => {
    // Implement edit client functionality
    toast.info('Edit client functionality not implemented yet');
};

const viewTransaction = (transaction) => {
    router.push(`/auth/accounting/transactions/${transaction.id}`);
};
</script>