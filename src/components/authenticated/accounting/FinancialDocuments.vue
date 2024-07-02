<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Financial Documents</h1>
            <Tabs defaultValue="quotes" class="w-full">
                <TabsList>
                    <TabsTrigger value="quotes">Quotes</TabsTrigger>
                    <TabsTrigger value="invoices">Invoices</TabsTrigger>
                    <TabsTrigger value="receipts">Receipts</TabsTrigger>
                </TabsList>
                <TabsContent value="quotes">
                    <DocumentTable :documents="quotes" documentType="quote" @edit="editDocument"
                        @delete="deleteDocument" />
                </TabsContent>
                <TabsContent value="invoices">
                    <DocumentTable :documents="invoices" documentType="invoice" @edit="editDocument"
                        @delete="deleteDocument" />
                </TabsContent>
                <TabsContent value="receipts">
                    <DocumentTable :documents="receipts" documentType="receipt" @edit="editDocument"
                        @delete="deleteDocument" />
                </TabsContent>
            </Tabs>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { toast } from 'vue-sonner'
import router from '@/router';
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import DocumentTable from '@/components/authenticated/accounting/DocumentTable.vue';

const quotes = ref([
    { id: 1, number: 'Q-001', client: 'John Doe', date: '2023-05-01', amount: 1000 },
    { id: 2, number: 'Q-002', client: 'Jane Smith', date: '2023-05-15', amount: 1500 },
]);

const invoices = ref([
    { id: 1, number: 'INV-001', client: 'John Doe', date: '2023-05-05', amount: 1000, status: 'Paid' },
    { id: 2, number: 'INV-002', client: 'Jane Smith', date: '2023-05-20', amount: 1500, status: 'Unpaid' },
]);

const receipts = ref([
    { id: 1, number: 'R-001', payer: 'John Doe', date: '2023-05-10', amount: 1000 },
    { id: 2, number: 'R-002', payer: 'Jane Smith', date: '2023-05-25', amount: 1500 },
]);

const editDocument = (documentType, id) => {
    router.push(`/auth/accounting/${documentType}s/edit/${id}`);
};

const deleteDocument = (documentType, id) => {
    // Here you would typically delete the document from your backend
    const documentRef = documentType === 'quote' ? quotes :
        documentType === 'invoice' ? invoices : receipts;
    const index = documentRef.value.findIndex(doc => doc.id === id);
    if (index !== -1) {
        documentRef.value.splice(index, 1);
        toast.success(`${documentType.charAt(0).toUpperCase() + documentType.slice(1)} deleted successfully`);
    }
};
</script>