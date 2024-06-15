<!-- @/pages/RedirectHandler.vue -->
<template>
    <div class="h-screen flex flex-col justify-center items-center w-screen bg-gray-600">
        <Progress class="w-full absolute top-0 left-0 rounded-none" v-model="progress" />
        <div class="text-center text-xl mt-12 font-bold text-gray-200">Redirecting...</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue-sonner';
import { getOriginalUrl } from '@/utils/urlService';
import { Progress } from '@/components/ui/progress';

const route = useRoute();
const router = useRouter();
const progress = ref(5)

onMounted(async () => {
    const { id } = route.params;
    if (id === 'view') {
        return;
    }
    try {
        const originalUrl = await getOriginalUrl(id);
        progress.value = 30
        if (originalUrl) {
            progress.value = 60
            window.location.href = originalUrl;
            progress.value = 100
        } else {
            progress.value = 100
            toast.error('Invalid URL');
            router.push({ name: 'Home' });
        }
    } catch (error) {
        progress.value = 100
        toast.error('An error occurred');
        router.push({ name: 'Home' });
    }
});
</script>