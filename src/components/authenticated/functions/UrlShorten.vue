<template>
    <div class="h-full w-96 bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-6">URL Shortener</h1>
        <div class="mb-6">
            <div class="flex items-center">
                <Input v-model="url" class="bg-gray-700 flex-grow rounded-l-md" type="text" placeholder="Enter URL" />
                <Button class="ml-2 text-sm rounded-r-md" @click="shortenUrl">Shorten</Button>
            </div>
        </div>
        <div v-if="newUrl" class="bg-gray-700 p-4 rounded-md">
            <p class="break-all text-lg">{{ newUrl }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { getDoc, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useStore } from 'vuex';
import { firestore } from '@/firebase';

const store = useStore();
const url = ref('');
const newUrl = ref('');

const user = computed(() => store.getters.user);

const generateUniqueId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};

const checkDuplicateAndGenerateId = async () => {
    let id;
    let docSnap;

    do {
        id = generateUniqueId();
        const docRef = doc(firestore, 'shortenedUrls', id);
        docSnap = await getDoc(docRef);
    } while (docSnap.exists());

    return id;
};

const shortenUrl = async () => {
    if (!user.value) {
        toast.error('You need to be logged in to shorten URLs');
        return;
    }

    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?(\?[^\s]*)?$/;

    const urlParts = urlRegex.exec(url.value);

    if (!urlParts) {
        console.log('URL validation failed for:', url.value);
        console.log('Validation failed because the URL does not match the expected format.');
        toast.error('Please enter a valid URL');
        return;
    }

    const id = await checkDuplicateAndGenerateId();
    const shortenedUrl = `https://maso.au/r/${id}`;

    try {
        await setDoc(doc(firestore, 'shortenedUrls', id), {
            originalUrl: url.value,
            writtenBy: user.value.uid,
            writtenByUsername: user.value.userName,
            timestamp: serverTimestamp(),
        });
        newUrl.value = shortenedUrl;
        toast.success('URL successfully shortened');
    } catch (error) {
        toast.error('Failed to shorten URL');
    }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>