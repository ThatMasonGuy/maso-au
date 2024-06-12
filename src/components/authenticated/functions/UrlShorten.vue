<!-- @/components/authenticated/functions/UrlShorten.vue -->
<template>
    <div v-if="!open" class="h-60 w-72 bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6 relative">
        <h1 class="text-3xl font-bold mb-6">URL Shortener</h1>
        <Button class="absolute bottom-6 left-6 text-md" @click="$emit('open', componentId)">Open</Button>
    </div>
    <div v-else class="h-full w-[95vw] sm:w-[97vw] md:w-[36rem] lg:w-[54rem] bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-6">URL Shortener</h1>
        <p class="mb-6">Enter a URL to shorten it</p>
        <div class="mb-6">
            <div class="flex items-center">
                <Input v-model="url" class="bg-gray-700 flex-grow rounded-l-md" type="text"
                    placeholder="Enter URL" />
                <Button class="ml-2 text-md rounded-r-md" @click="shortenUrl">Shorten</Button>
            </div>
        </div>
        <div class="bg-gray-700 p-2 rounded-md border-gray-100 border-[1px]">
            <p class="break-all text-sm select-all">{{ newUrl || 'Shortened Url...' }}</p>
        </div>
        <Button class="mt-6" @click="$emit('close')">Close</Button>
    </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
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
        console.error('Error shortening URL:', error);
        toast.error('Failed to shorten URL');
    }
};

const props = defineProps({
    componentId: {
        type: Number,
        required: true,
    },
    open: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['open', 'close']);
</script>