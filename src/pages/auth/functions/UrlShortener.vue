<!-- @/pages/auth/functions/UrlShortener.vue -->
<template>
    <div
        class="flex flex-col items-center p-6 bg-gray-900 pt-[--header-height] min-h-[--adjusted-height] text-white relative overflow-hidden">
        <!-- Moving Blobs Background
        <div class="absolute inset-0 w-screen h-screen object-cover">
            <img class="blob animate-blob-1"
                src="https://blobcdn.com/blob.svg?seed=5&extraPoints=5&fill=d414f7" />
            <img class="blob animate-blob-2"
                src="https://blobcdn.com/blob.svg?seed=7&extraPoints=7&fill=4fcc0a" />
            <img class="blob animate-blob-3"
                src="https://blobcdn.com/blob.svg?seed=3&extraPoints=4&fill=5fdce0" />
        </div> -->
        <h1 class="text-4xl font-bold text-blue-400 mt-4 mb-6 animate-fade-in relative z-10">URL Shortener</h1>
        <div
            class="flex flex-col lg:flex-row items-start w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6 animate-slide-in relative z-10">
            <div class="bg-gray-400/30 backdrop-blur-md shadow-lg rounded-lg p-8 w-full lg:w-2/3">
                <h2 class="text-2xl font-bold mb-4">Paste the URL to be shortened</h2>
                <div class="flex space-x-4 mb-4">
                    <Input v-model="url" type="text" placeholder="Enter URL..."
                        class="flex-grow p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none" />
                    <Button @click="shortenUrl"
                        class="px-4 py-2 bg-blue-600 text-white text-md rounded-lg hover:bg-blue-700">
                        Shorten URL
                        <PaperAirplaneIcon v-if="!isLoading" class="h-4 w-4 ml-2" />
                        <ArrowPathIcon v-if="isLoading" class="h-4 w-4 ml-2 animate-spin" />
                    </Button>
                </div>
                <p class="text-gray-400">URL Shortener is a free tool to shorten URLs and generate short links, making
                    it easy to share.</p>
                <div v-if="newUrl" class="my-4 flex space-x-4">
                    <Input v-model="newUrl" type="text" readonly
                        class="flex-grow p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none select-all" />
                    <Button @click="copyToClipboard(newUrl)"
                        class="px-4 py-2 bg-blue-600 text-white text-md rounded-lg hover:bg-blue-700">
                        Copy
                        <ClipboardDocumentIcon class="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </div>
            <div
                class="bg-gray-400/30 backdrop-blur-md shadow-lg rounded-lg p-8 w-full lg:w-1/3 flex flex-col items-center animate-slide-in">
                <h2 class="text-2xl font-bold mb-4">QR Code</h2>
                <div
                    class="h-48 w-48 bg-gray-600 border border-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <canvas ref="qrCanvas" class="h-full w-full rounded-lg"></canvas>
                </div>
                <div class="flex space-x-2">
                    <Button :disabled="!newUrl" @click="downloadQRCode"
                        class="px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                        Save
                        <ArrowPathIcon v-if="isSaving" class="h-4 w-4 ml-2 animate-spin" />
                        <CloudArrowDownIcon v-if="!isSaving" class="h-4 w-4 ml-2" />
                    </Button>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger class="cursor-not-allowed">
                                <Button :disabled="true"
                                    class="px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 cursor-not-allowed">Edit</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <div class="text-sm">Coming Soon!</div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
        <div class="w-full max-w-5xl mt-6 animate-fade-in relative z-10">
            <h2 class="text-2xl font-bold mb-4">Effortless URL Management</h2>
            <p class="text-gray-400 mb-4">
                Transform lengthy URLs into concise, shareable links with our user-friendly URL Shortener. Whether it's
                for social media, emails, or text messages, make your links more manageable.
            </p>
            <h2 class="text-2xl font-bold mb-4">Track Your Links</h2>
            <p class="text-gray-400 mb-4">
                Monitor the performance of your links with our advanced analytics. See how many clicks your shortened
                URLs receive and gain insights into your audience's engagement.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div
                    class="bg-gray-400/30 backdrop-blur-md rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
                    <span class="text-3xl mb-2">🚀</span>
                    <h3 class="text-lg font-bold mb-2">Fast & Easy</h3>
                    <p class="text-gray-400">Shorten your URLs quickly and effortlessly. No signup required.</p>
                </div>
                <div
                    class="bg-gray-400/30 backdrop-blur-md rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
                    <span class="text-3xl mb-2">🔗</span>
                    <h3 class="text-lg font-bold mb-2">Versatile</h3>
                    <p class="text-gray-400">Works with any URL, regardless of length or complexity.</p>
                </div>
                <div
                    class="bg-gray-400/30 backdrop-blur-md rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
                    <span class="text-3xl mb-2">📊</span>
                    <h3 class="text-lg font-bold mb-2">In-depth Analytics</h3>
                    <p class="text-gray-400">Gain insights with our detailed click tracking and analytics.</p>
                </div>
                <div
                    class="bg-gray-400/30 backdrop-blur-md rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
                    <span class="text-3xl mb-2">🔍</span>
                    <h3 class="text-lg font-bold mb-2">Reliable</h3>
                    <p class="text-gray-400">Our service ensures your links are always accessible and reliable.</p>
                </div>
                <div
                    class="bg-gray-400/30 backdrop-blur-md rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
                    <span class="text-3xl mb-2">⚙️</span>
                    <h3 class="text-lg font-bold mb-2">Customizable</h3>
                    <p class="text-gray-400">Customize your links for better branding and recognition.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { getDoc, setDoc, doc, Timestamp } from 'firebase/firestore';
import { useStore } from 'vuex';
import { firestore } from '@/firebase';
import { ArrowPathIcon, CloudArrowDownIcon, PaperAirplaneIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/outline';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import QRious from 'qrious';

const store = useStore();
const url = ref('');
const newUrl = ref('');
const shortenedUrls = ref([]);
const isSaving = ref(false);
const isLoading = ref(false);
const qrCanvas = ref(null);
const backgroundColor = ref('#FFFFFF');
const foregroundColor = ref('#000000');
const user = computed(() => store.getters.user);
const padding = ref(10);

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

const timeout = (ms) => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms));
};

const shortenUrl = async () => {
    isLoading.value = true;
    console.log('Shorten URL button clicked');
    if (!user.value) {
        toast.error('You need to be logged in to shorten URLs');
        isLoading.value = false;
        return;
    }

    const urlRegex = /^[^\s]+\.[^\s]+$/;

    if (!urlRegex.test(url.value)) {
        console.log('URL validation failed for:', url.value);
        toast.error('Please enter a valid URL');
        isLoading.value = false;
        return;
    }

    const id = await checkDuplicateAndGenerateId(firestore);
    const shortenedUrl = `https://maso.au/r/${id}`;

    try {
        await Promise.race([
            setDoc(doc(firestore, 'shortenedUrls', id), {
                originalUrl: url.value,
                writtenBy: user.value.uid,
                writtenByUsername: user.value.userName,
                created: Timestamp.now(),
                updated: Timestamp.now(),
                viewCount: 0,
                viewTimestamps: [],
            }),
            timeout(5000)
        ]);

        newUrl.value = shortenedUrl;
        shortenedUrls.value.push({ original: url.value, shortened: shortenedUrl });
        console.log('URL successfully shortened:', shortenedUrl);
        url.value = '';

        nextTick(() => {
            const qr = new QRious({
                value: newUrl.value,
                size: 240,
                background: backgroundColor.value,
                foreground: foregroundColor.value,
                level: 'H',
            });

            const sizeWithBorder = qr.size + padding.value * 2;
            qrCanvas.value.width = sizeWithBorder;
            qrCanvas.value.height = sizeWithBorder;

            const context = qrCanvas.value.getContext('2d');
            context.fillStyle = backgroundColor.value;
            context.fillRect(0, 0, sizeWithBorder, sizeWithBorder);
            context.drawImage(qr.canvas, padding.value, padding.value);
        });

        toast.success('URL successfully shortened');
    } catch (error) {
        console.error('Error shortening URL:', error);
        toast.error('Failed to shorten URL');
    } finally {
        isLoading.value = false;
    }
};

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        toast.success('URL copied to clipboard');
    }, () => {
        toast.error('Failed to copy URL');
    });
};

const downloadQRCode = () => {
    isSaving.value = true;
    const link = document.createElement('a');
    link.href = qrCanvas.value.toDataURL();
    link.download = 'qr-code.png';
    link.click();
    isSaving.value = false;
};
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-in-out;
}

.animate-slide-in {
    animation: slide-in 1s ease-in-out;
}

.blob {
    opacity: 0.3;
    mix-blend-mode: multiply;
    filter: blur(50px);
}

@keyframes blob1 {

    0%,
    100% {
        transform: translate3d(-20%, -20%, 0);
    }

    50% {
        transform: translate3d(20%, 20%, 0);
    }
}

@keyframes blob2 {

    0%,
    100% {
        transform: translate3d(20%, -20%, 0);
    }

    50% {
        transform: translate3d(-20%, 20%, 0);
    }
}

@keyframes blob3 {

    0%,
    100% {
        transform: translate3d(-20%, 20%, 0);
    }

    50% {
        transform: translate3d(20%, -20%, 0);
    }
}

.animate-blob-1 {
    animation: blob1 25s infinite;
}

.animate-blob-2 {
    animation: blob2 20s infinite;
}

.animate-blob-3 {
    animation: blob3 30s infinite;
}
</style>
