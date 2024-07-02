<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-4 sm:p-8">
            <h1 class="text-3xl font-bold mb-4 sm:mb-8">Transaction History</h1>

            <!-- Unified Filter Controls -->
            <div class="flex justify-between items-center mb-6 space-x-4">
                <div class="flex-grow">
                    <Input v-model="searchQuery" placeholder="Search transactions..." />
                </div>
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button>
                            <FunnelIcon class="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div class="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>Filters</DrawerTitle>
                                <DrawerDescription>Adjust your transaction filters.</DrawerDescription>
                            </DrawerHeader>
                            <div class="p-4 space-y-4">
                                <div>
                                    <Label>Type</Label>
                                    <Select v-model="filterType">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Filter by type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Types</SelectItem>
                                            <SelectItem value="invoice">Invoice</SelectItem>
                                            <SelectItem value="quote">Quote</SelectItem>
                                            <SelectItem value="receipt">Receipt</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Date Range</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" class="w-full justify-start text-left font-normal">
                                                <CalendarIcon class="mr-2 h-4 w-4" />
                                                {{ dateRange.from ? (dateRange.to ? `${formatDate(dateRange.from)} - ${formatDate(dateRange.to)}` : formatDate(dateRange.from)) : 'Pick a date range' }}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent class="w-auto p-0" align="start">
                                            <Calendar v-model="dateRange" mode="range" class="rounded-md border" />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <DrawerFooter>
                                <Button @click="applyFilters">Apply Filters</Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>

            <!-- Transactions Table -->
            <div v-if="loading" class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
            <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">{{ error }}</span>
            </div>
            <div v-else class="bg-white shadow-md rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead class="hidden md:table-cell">Description</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead class="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="transaction in filteredTransactions" :key="transaction.id"
                            @click="handleTransactionClick(transaction)" class="cursor-pointer hover:bg-gray-100">
                            <TableCell>{{ formatDate(transaction.date) }}</TableCell>
                            <TableCell class="hidden md:table-cell">{{ transaction.description }}</TableCell>
                            <TableCell>
                                <Badge :variant="getTypeVariant(transaction.type)">
                                    {{ transaction.type }}
                                </Badge>
                            </TableCell>
                            <TableCell class="text-right"
                                :class="transaction.type === 'invoice' ? 'text-green-600' : 'text-red-600'">
                                {{ formatCurrency(transaction.total) }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { auth, firestore } from '@/firebase';
import { collection, query, getDocs, where } from 'firebase/firestore';
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { CalendarIcon, FunnelIcon } from '@heroicons/vue/24/outline';

const route = useRoute();

// State
const transactions = ref([]);
const searchQuery = ref('');
const filterType = ref('all');
const dateRange = ref({ from: null, to: null });
const loading = ref(true);
const error = ref(null);

// Fetch transactions
onMounted(async () => {
    try {
        await fetchTransactions();
    } catch (err) {
        error.value = "Failed to load transactions. Please try again later.";
        console.error('Error fetching transactions:', err);
    } finally {
        loading.value = false;
    }
});

const fetchTransactions = async () => {
    const userId = auth.currentUser.uid;
    const types = ['invoices', 'quotes', 'receipts'];
    let allTransactions = [];

    for (const type of types) {
        const q = query(collection(firestore, `users/${userId}/accounting/settings/${type}`));
        const querySnapshot = await getDocs(q);
        allTransactions = [...allTransactions, ...querySnapshot.docs.map(doc => ({
            id: doc.id,
            type: type.slice(0, -1), // Remove 's' from the end
            date: doc.data().issueDate || doc.data().receiptDate,
            description: doc.data().description || `${type.slice(0, -1)} #${doc.data().invoiceNumber || doc.data().quoteNumber || ''}`,
            total: doc.data().total,
            ...doc.data()
        }))];
    }

    transactions.value = allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Computed property for filtered transactions
const filteredTransactions = computed(() => {
    return transactions.value.filter(transaction => {
        const matchesSearch = transaction.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesType = filterType.value === 'all' || transaction.type === filterType.value;
        const matchesDateRange = (!dateRange.value.from || new Date(transaction.date) >= dateRange.value.from) &&
                                 (!dateRange.value.to || new Date(transaction.date) <= dateRange.value.to);
        return matchesSearch && matchesType && matchesDateRange;
    });
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
};

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
};

const getTypeVariant = (type) => {
    switch (type) {
        case 'invoice': return 'success';
        case 'quote': return 'warning';
        case 'receipt': return 'default';
        default: return 'default';
    }
};

const handleTransactionClick = (transaction) => {
    router.push(`/auth/accounting/${transaction.type}s/${transaction.id}`);
};

const applyFilters = () => {
    // The computed filteredTransactions will automatically update based on the new filter values
};
</script>