<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Transaction Details</h1>

            <div v-if="loading" class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>

            <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
                <strong class="font-bold">Error! </strong>
                <span class="block sm:inline">{{ error }}</span>
            </div>

            <div v-else-if="transaction">
                <div class="bg-white shadow-md rounded-lg p-6 mb-6">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="text-2xl font-semibold">{{ transaction.type }} #{{ transaction.number }}</h2>
                            <p class="text-gray-600">Date: {{ formatDate(transaction.date) }}</p>
                            <p v-if="transaction.dueDate" class="text-gray-600">Due Date: {{ formatDate(transaction.dueDate) }}</p>
                        </div>
                        <div class="space-y-2">
                            <Badge :variant="getStatusVariant(transaction.status)">
                                {{ transaction.status }}
                            </Badge>
                            <Button @click="downloadTransaction" class="w-full">Download</Button>
                            <Button v-if="transaction.type === 'Invoice' && transaction.status === 'paid'"
                                @click="generateReceipt" class="w-full">Generate Receipt</Button>
                        </div>
                    </div>

                    <div class="mb-6">
                        <h3 class="text-xl font-semibold mb-2">Related Party Information</h3>
                        <p>{{ transaction.relatedParty.name }}</p>
                        <p>{{ transaction.relatedParty.email }}</p>
                        <p>{{ transaction.relatedParty.phone }}</p>
                        <Button @click="viewRelatedPartyDetails" class="mt-2">View Details</Button>
                    </div>

                    <div class="mb-6">
                        <h3 class="text-xl font-semibold mb-2">Transaction Items</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="item in transaction.items" :key="item.id">
                                    <TableCell>{{ item.description }}</TableCell>
                                    <TableCell>{{ item.quantity }}</TableCell>
                                    <TableCell>{{ formatCurrency(item.price) }}</TableCell>
                                    <TableCell>{{ formatCurrency(item.quantity * item.price) }}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div class="text-right">
                        <p class="text-lg">Subtotal: {{ formatCurrency(transaction.subtotal) }}</p>
                        <p class="text-lg">Tax: {{ formatCurrency(transaction.tax) }}</p>
                        <p class="text-xl font-bold">Total: {{ formatCurrency(transaction.total) }}</p>
                    </div>
                </div>

                <div v-if="recentTransactions.length > 0" class="bg-white shadow-md rounded-lg p-6">
                    <h3 class="text-xl font-semibold mb-4">Recent Transactions for This Party</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Type</TableHead>
                                <TableHead>Number</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="t in recentTransactions" :key="t.id">
                                <TableCell>{{ t.type }}</TableCell>
                                <TableCell>{{ t.number }}</TableCell>
                                <TableCell>{{ formatDate(t.date) }}</TableCell>
                                <TableCell>{{ formatCurrency(t.total) }}</TableCell>
                                <TableCell>
                                    <Badge :variant="getStatusVariant(t.status)">
                                        {{ t.status }}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button @click="viewTransaction(t.id)" variant="outline" size="sm">View</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <div v-else class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
                role="alert">
                <strong class="font-bold">No data! </strong><br>
                <span class="block sm:inline">No transaction data available.</span>
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
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'vue-sonner';

const route = useRoute();
const transaction = ref(null);
const recentTransactions = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  const transactionId = route.params.id;
  const transactionType = route.params.type;
  try {
    await fetchTransactionData(transactionId, transactionType);
    await fetchRecentTransactions(transaction.value.clientID);
  } catch (err) {
    error.value = "Failed to load transaction data. Please try again later.";
    console.error('Error fetching transaction data:', err);
  } finally {
    loading.value = false;
  }
});

const fetchTransactionData = async (id, type) => {
  const userId = auth.currentUser.uid;
  const docRef = doc(firestore, `users/${userId}/accounting/settings/${type}s/${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    transaction.value = { id: docSnap.id, ...docSnap.data() };
    // Fetch related contact information
    const contactRef = doc(firestore, `users/${userId}/accounting/settings/contacts/${transaction.value.clientID}`);
    const contactSnap = await getDoc(contactRef);
    if (contactSnap.exists()) {
      transaction.value.relatedParty = contactSnap.data();
    }
  } else {
    throw new Error('Transaction not found');
  }
};

const fetchRecentTransactions = async (clientId) => {
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

  // Sort by date and take the 5 most recent
  recentTransactions.value = allTransactions
    .sort((a, b) => new Date(b.issueDate || b.receiptDate) - new Date(a.issueDate || a.receiptDate))
    .slice(0, 5);
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
};

const getStatusVariant = (status) => {
  switch (status) {
    case 'paid': return 'success';
    case 'pending': return 'warning';
    case 'overdue': return 'destructive';
    default: return 'default';
  }
};

const downloadTransaction = () => {
  // Implement transaction download logic
  toast.success('Transaction download started');
};

const generateReceipt = () => {
  // Implement receipt generation logic
  toast.success('Receipt generated successfully');
};

const viewRelatedPartyDetails = () => {
  if (transaction.value && transaction.value.relatedParty) {
    router.push(`/auth/accounting/clients/${transaction.value.relatedParty.id}`);
  }
};

const viewTransaction = (transactionId) => {
  router.push(`/auth/accounting/transactions/${transactionId}`);
};
</script>