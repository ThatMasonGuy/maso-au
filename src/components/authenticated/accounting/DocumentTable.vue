<template>
    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Number</TableHead>
                    <TableHead>{{ documentType === 'receipt' ? 'Payer' : 'Client' }}</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead v-if="documentType === 'invoice'">Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="doc in documents" :key="doc.id">
                    <TableCell>{{ doc.number }}</TableCell>
                    <TableCell>{{ doc.client || doc.payer }}</TableCell>
                    <TableCell>{{ formatDate(doc.date) }}</TableCell>
                    <TableCell>${{ doc.amount.toFixed(2) }}</TableCell>
                    <TableCell v-if="documentType === 'invoice'">{{ doc.status }}</TableCell>
                    <TableCell>
                        <Button variant="outline" size="sm" @click="$emit('edit', documentType, doc.id)">Edit</Button>
                        <Button variant="destructive" size="sm" @click="$emit('delete', documentType, doc.id)" class="ml-2">Delete</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>

<script setup>
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const props = defineProps({
    documents: {
        type: Array,
        required: true
    },
    documentType: {
        type: String,
        required: true
    }
});

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

defineEmits(['edit', 'delete']);
</script>