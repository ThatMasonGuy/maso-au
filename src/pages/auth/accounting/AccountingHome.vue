<template>
    <div v-if="loading" class="flex justify-center items-center h-screen">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
    <AccountingSetupWalkthrough v-else-if="needsSetup" />
    <div v-else class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-4 sm:p-8">
            <h1 class="text-3xl font-bold mb-8">Accounting Dashboard</h1>

            <!-- Forms Dropdown -->
            <div class="mb-8">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Create New Form
                            <ChevronDownIcon class="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem @click="$router.push('/auth/accounting/quotes')">
                            Create Quote
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="$router.push('/auth/accounting/invoices')">
                            Create Invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="$router.push('/auth/accounting/receipts')">
                            Create Receipt
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card v-for="metric in calculatedMetrics" :key="metric.title" class="bg-background shadow-md">
                    <CardHeader>
                        <CardTitle>{{ metric.title }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p :class="['text-3xl font-bold', metric.colorClass]">{{ metric.value }}</p>
                    </CardContent>
                </Card>
            </div>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card class="bg-white shadow-md">
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul class="space-y-2">
                            <li v-for="transaction in formattedTransactions" :key="transaction.id"
                                class="flex justify-between items-center">
                                <span>{{ transaction.description }}</span>
                                <span :class="transaction.amount > 0 ? 'text-green-600' : 'text-red-600'">
                                    {{ transaction.amount > 0 ? '+' : '-' }}{{ transaction.formattedAmount }}
                                </span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                <Card class="bg-white shadow-md">
                    <CardHeader>
                        <CardTitle>Upcoming Invoices</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul class="space-y-2">
                            <li v-for="invoice in formattedInvoices" :key="invoice.id"
                                class="flex justify-between items-center">
                                <span>{{ invoice.client }}</span>
                                <span>{{ invoice.formattedAmount }}</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { auth, firestore } from '@/firebase';
import { getDoc, doc } from 'firebase/firestore';
import AccountingSetupWalkthrough from './AccountingSetupWalkthrough.vue';
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

const totalIncome = 15230.45;
const totalExpenses = 7850.20;
const loading = ref(true);
const needsSetup = ref(false);

const calculatedMetrics = computed(() => {
    const netProfit = totalIncome - totalExpenses;
    return [
        { title: 'Total Income', value: formatCurrency(totalIncome), colorClass: 'text-green-600' },
        { title: 'Total Expenses', value: formatCurrency(totalExpenses), colorClass: 'text-red-600' },
        {
            title: 'Net Profit',
            value: formatCurrency(netProfit),
            colorClass: netProfit >= 0 ? 'text-blue-600' : 'text-red-600'
        },
    ];
});

const recentTransactions = ref([
    { id: 1, description: 'Client Payment', amount: 1500 },
    { id: 2, description: 'Office Supplies', amount: -200 },
    { id: 3, description: 'Freelance Work', amount: 800 },
    { id: 4, description: 'Utility Bill', amount: -150 },
]);

const formattedTransactions = computed(() => {
    return recentTransactions.value.map(transaction => ({
        ...transaction,
        formattedAmount: formatCurrency(Math.abs(transaction.amount))
    }));
});

const upcomingInvoices = ref([
    { id: 1, client: 'ABC Corp', amount: 2500 },
    { id: 2, client: 'XYZ Ltd', amount: 1800 },
    { id: 3, client: '123 Industries', amount: 3200 },
]);

const formattedInvoices = computed(() => {
    return upcomingInvoices.value.map(invoice => ({
        ...invoice,
        formattedAmount: formatCurrency(invoice.amount)
    }));
});

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'AUD' }).format(value);
}

onMounted(async () => {
  try {
    const userId = auth.currentUser.uid;
    const accountingRef = doc(firestore, `users/${userId}/accounting/details`);
    const accountingDoc = await getDoc(accountingRef);
    
    if (!accountingDoc.exists()) {
      needsSetup.value = true;
    }
  } catch (error) {
    console.error('Error checking accounting settings:', error);
  } finally {
    loading.value = false;
  }
});
</script>