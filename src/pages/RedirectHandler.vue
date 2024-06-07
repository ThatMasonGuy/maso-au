<template>
    <div class="redirecting">Redirecting...</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue-sonner';
import { getOriginalUrl } from '@/utils/urlService';

const route = useRoute();
const router = useRouter();

onMounted(async () => {
    const { id } = route.params;
    try {
        const originalUrl = await getOriginalUrl(id);
        if (originalUrl) {
            window.location.href = originalUrl;
        } else {
            toast.error('Invalid URL');
            router.push({ name: 'Home' });
        }
    } catch (error) {
        toast.error('An error occurred');
        router.push({ name: 'Home' });
    }
});
</script>

<style scoped>
.redirecting {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 50px;
}
</style>