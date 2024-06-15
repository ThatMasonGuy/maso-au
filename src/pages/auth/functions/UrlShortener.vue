<!-- @/pages/auth/functions/UrlShortener.vue -->
<template>
    <div class="flex flex-col items-center p-6 bg-gray-900 pt-[--header-height] min-h-[--adjusted-height] text-white">
        <h1 class="text-4xl font-bold text-blue-400 mt-4 mb-6">Short URL</h1>
        <div class="flex flex-col lg:flex-row items-start w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6">
            <div class="bg-gray-800 shadow-lg rounded-lg p-8 w-full lg:w-2/3">
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
                <p class="text-gray-400">ShortURL is a free tool to shorten URLs and generate short links. URL shortener
                    allows to create a shortened link making it easy to share.</p>

                <div v-if="newUrl" class="mt-4 bg-gray-700 p-4 rounded-lg flex items-center">
                    <span class="flex-grow">{{ newUrl }}</span>
                    <Button @click="copyToClipboard(newUrl)"
                        class="ml-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Copy</Button>
                </div>
            </div>

            <div class="bg-gray-800 shadow-lg rounded-lg p-8 w-full lg:w-1/3 flex flex-col items-center">
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
                    <Dialog>
                        <DialogTrigger :disabled="!newUrl">
                            <Button :disabled="!newUrl"
                                class="px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Edit</Button>
                        </DialogTrigger>
                        <DialogContent class="bg-gray-800 rounded-lg border-gray-300">
                            <DialogHeader>
                                <DialogTitle class="text-gray-200">Edit QR Code</DialogTitle>
                                <DialogDescription class="text-gray-200">
                                    Customize the QR code below. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <div
                                        class="h-64 w-64 bg-gray-600 border border-gray-300 rounded-lg mb-4 flex items-center justify-center">
                                        <canvas ref="editQrCanvas" class="h-full w-full rounded-lg"></canvas>
                                    </div>
                                    <p class="text-yellow-500 text-sm"
                                        v-if="foregroundColor !== '#000000' || backgroundColor !== '#FFFFFF'">
                                        Warning: Changing colors may make the QR code harder to scan.
                                    </p>
                                </div>
                                <div class="flex-1">
                                    <div class="flex flex-col space-y-4">
                                        <div>
                                            <label class="block text-gray-200">Background Color</label>
                                            <div class="flex items-center space-x-2">
                                                <input type="color" v-model="backgroundColor"
                                                    class="mt-1 block w-1/2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none" />
                                                <span class="text-gray-200">{{ backgroundColor }}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-gray-200">Foreground Color</label>
                                            <div class="flex items-center space-x-2">
                                                <input type="color" v-model="foregroundColor"
                                                    class="mt-1 block w-1/2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none" />
                                                <span class="text-gray-200">{{ foregroundColor }}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-gray-200">QR Code Style</label>
                                            <select v-model="qrCodeStyle"
                                                class="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-gray-200 focus:outline-none">
                                                <option value="square">Square</option>
                                                <option value="rounded">Rounded</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block text-gray-200">Scan Me Box</label>
                                            <select v-model="scanMeBox"
                                                class="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-gray-200 focus:outline-none">
                                                <option value="none">None</option>
                                                <option value="below">Below QR Code</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button @click="styleQRCode"
                                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save
                                    changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>

        <div class="w-full max-w-5xl mt-6">
            <h2 class="text-2xl font-bold mb-4">Simple and fast URL shortener!</h2>
            <p class="text-gray-400 mb-4">
                ShortURL allows to shorten long links from
                <a href="#" class="text-blue-400">Instagram</a>,
                <a href="#" class="text-blue-400">Facebook</a>,
                <a href="#" class="text-blue-400">YouTube</a>,
                <a href="#" class="text-blue-400">Twitter</a>,
                <a href="#" class="text-blue-400">LinkedIn</a>,
                <a href="#" class="text-blue-400">WhatsApp</a>,
                <a href="#" class="text-blue-400">TikTok</a>, blogs and sites. Just paste the long URL and click the
                Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails.
                After shortening the URL, check
                <a href="#" class="text-blue-400">how many clicks it received</a>.
            </p>

            <h2 class="text-2xl font-bold mb-4">Shorten, share and track</h2>
            <p class="text-gray-400 mb-4">
                Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant
                messages, and other locations. Track statistics for your business and projects by monitoring the number
                of hits from your URL with our click counter.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="flex flex-col items-center bg-gray-800 shadow-lg rounded-lg p-6">
                    <span class="text-2xl mb-2">👍</span>
                    <h3 class="text-lg font-bold mb-2">Easy</h3>
                    <p class="text-gray-400 text-center">ShortURL is easy and fast, enter the long link to get your
                        shortened link.</p>
                </div>
                <div class="flex flex-col items-center bg-gray-800 shadow-lg rounded-lg p-6">
                    <span class="text-2xl mb-2">🔗</span>
                    <h3 class="text-lg font-bold mb-2">Shortened</h3>
                    <p class="text-gray-400 text-center">Use any link, no matter what size, ShortURL always shortens.
                    </p>
                </div>
                <div class="flex flex-col items-center bg-gray-800 shadow-lg rounded-lg p-6">
                    <span class="text-2xl mb-2">🔒</span>
                    <h3 class="text-lg font-bold mb-2">Secure</h3>
                    <p class="text-gray-400 text-center">It is fast and secure, our service has HTTPS protocol and data
                        encryption.</p>
                </div>
                <div class="flex flex-col items-center bg-gray-800 shadow-lg rounded-lg p-6">
                    <span class="text-2xl mb-2">📊</span>
                    <h3 class="text-lg font-bold mb-2">Statistics</h3>
                    <p class="text-gray-400 text-center">Check the number of clicks that your shortened URL received.
                    </p>
                </div>
                <div class="flex flex-col items-center bg-gray-800 shadow-lg rounded-lg p-6">
                    <span class="text-2xl mb-2">🔍</span>
                    <h3 class="text-lg font-bold mb-2">Reliable</h3>
                    <p class="text-gray-400 text-center">All links that try to disseminate spam, viruses and malware are
                        deleted.</p>
                </div>
                <div class="flex flex-col items-center bg-gray-800 shadow-lg rounded-lg p-6">
                    <span class="text-2xl mb-2">📱</span>
                    <h3 class="text-lg font-bold mb-2">Devices</h3>
                    <p class="text-gray-400 text-center">Compatible with smartphones, tablets and desktop.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { getDoc, setDoc, doc, Timestamp } from 'firebase/firestore';
import { useStore } from 'vuex';
import { firestore } from '@/firebase';
import { ArrowPathIcon, CloudArrowDownIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import QRious from 'qrious';

const store = useStore();
const url = ref('');
const newUrl = ref('');
const shortenedUrls = ref([]);
const isSaving = ref(false);
const isLoading = ref(false);
const qrCanvas = ref(null);
const editQrCanvas = ref(null);
// const frames = ref(['frame1.png', 'frame2.png', 'frame3.png']);
// const selectedFrame = ref(0);
const shapes = ref(['0%', '10%', '50%']);
const selectedShape = ref(0);
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

const checkDuplicateAndGenerateId = async (firestore) => {
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
    if (!user.value) {
        toast.error('You need to be logged in to shorten URLs');
        isLoading.value = false;
        return;
    }

    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?(\?[^\s]*)?$/;

    if (!urlRegex.test(url.value)) {
        console.log('URL validation failed for:', url.value);
        console.log('Validation failed because the URL does not match the expected format.');
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
                viewTimestamps: [Timestamp.now()],
            }),
            timeout(5000)
        ]);

        newUrl.value = shortenedUrl;
        shortenedUrls.value.push({ original: url.value, shortened: shortenedUrl });
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

const styleQRCode = () => {
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

  editQrCanvas.value.width = sizeWithBorder; 
  editQrCanvas.value.height = sizeWithBorder;

  const editContext = editQrCanvas.value.getContext('2d');
  editContext.fillStyle = backgroundColor.value;
  editContext.fillRect(0, 0, sizeWithBorder, sizeWithBorder);
  editContext.drawImage(qr.canvas, padding.value, padding.value);
};

watch(
  [newUrl, backgroundColor, foregroundColor], 
  () => {
    if (qrCanvas.value && editQrCanvas.value) {
      styleQRCode();
    }
  }
);
</script>
