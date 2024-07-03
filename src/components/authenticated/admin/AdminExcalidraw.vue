<template>
    <div class="relative">
        <Card v-if="!isFullscreen" class="w-full">
            <CardHeader>
                <div class="flex justify-between items-center">
                    <CardTitle class="text-xl">Excalidraw</CardTitle>
                    <Button class="px-2" @click="toggleFullscreen">
                        <ArrowsPointingOutIcon class="w-5 h-5" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div class="border border-gray-300 rounded-lg w-full h-[600px]">
                    <component :is="excalidrawComponent" :initialData="initialData" @change="handleChange" />
                </div>
            </CardContent>
        </Card>

        <div v-if="isFullscreen" class="fixed inset-0 z-50 bg-white">
            <div class="flex flex-col h-full">
                <CardHeader class="border-b border-gray-300">
                    <div class="flex justify-between items-center">
                        <CardTitle class="text-xl">Excalidraw</CardTitle>
                        <Button class="px-2" @click="toggleFullscreen">
                            <ArrowsPointingInIcon class="w-5 h-5" />
                        </Button>
                    </div>
                </CardHeader>
                <div class="flex-grow relative">
                    <div class="absolute inset-0 m-4 border border-gray-300 rounded-lg overflow-hidden shadow-2xl">
                        <component :is="excalidrawComponent" :initialData="initialData" @change="handleChange" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/vue/24/solid';
import { firestore, auth } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const excalidrawComponent = ref(null);
const isFullscreen = ref(false);
const initialData = ref(null);

onMounted(async () => {
    await initializeExcalidraw();
});

const initializeExcalidraw = async () => {
    try {
        const { Excalidraw } = await import('@excalidraw/excalidraw');
        excalidrawComponent.value = Excalidraw;
        initialData.value = await loadExcalidrawData();
    } catch (error) {
        console.error('Error initializing Excalidraw:', error);
    }
};

const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value;
};

const handleChange = (elements, state) => {
    saveExcalidrawData({ elements, state });
};

const saveExcalidrawData = async (data) => {
    const user = auth.currentUser;
    if (user) {
        try {
            await setDoc(doc(firestore, 'excalidrawData', user.uid), {
                elements: data.elements,
                appState: data.state,
            });
        } catch (error) {
            console.error('Error saving Excalidraw data:', error);
        }
    }
};

const loadExcalidrawData = async () => {
    const user = auth.currentUser;
    if (user) {
        try {
            const docRef = doc(firestore, 'excalidrawData', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                return {
                    elements: data.elements,
                    appState: data.appState,
                };
            }
        } catch (error) {
            console.error('Error loading Excalidraw data:', error);
        }
    }
    return null;
};

watch(isFullscreen, async (newValue) => {
    if (excalidrawComponent.value) {
        await nextTick();
        excalidrawComponent.value.refresh();
    } else {
        await initializeExcalidraw();
    }
});
</script>
