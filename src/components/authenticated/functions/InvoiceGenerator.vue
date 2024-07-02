<!-- @/components/authenticated/functions/InvoiceGenerator.vue -->
<template>
    <div class="h-60 w-72 bg-gray-800 text-gray-200 rounded-lg shadow-lg p-5 relative">
        <h1 class="text-3xl font-bold mb-6">{{ details.title }}</h1>
        <Button @click="$router.push('/auth/functions/invoice-generator')" class="">Open</Button>
    </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';

const details = {
    title: 'Invoice Generator',
    description: 'A simple invoice generator',
    hashCode: 'invoice-generator',
};
</script>
