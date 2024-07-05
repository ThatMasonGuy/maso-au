<template>
    <div class="relative">
        <Card v-if="!isFullscreen" class="w-full">
            <CardHeader>
                <div class="flex justify-between items-center">
                    <CardTitle class="text-xl">Excalidraw</CardTitle>
                    <div class="flex items-center space-x-2">
                        <DropdownButton buttonText="Save" :dropdownOptions="dropdownOptions"
                            @optionSelected="handleDropdownAction" @buttonClick="saveToFirestore" />
                        <Button class="px-2" @click="toggleFullscreen">
                            <ArrowsPointingOutIcon class="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div ref="excalidrawContainer" class="excalidraw-container"></div>
            </CardContent>
        </Card>

        <div v-if="isFullscreen" class="fixed inset-0 z-50 bg-white dark:bg-gray-900">
            <div class="flex flex-col h-full">
                <CardHeader class="border-b border-gray-300 dark:border-gray-700">
                    <div class="flex justify-between items-center">
                        <CardTitle class="text-xl">Excalidraw (Fullscreen)</CardTitle>
                        <div class="flex items-center space-x-2">
                            <DropdownButton buttonText="Save" :dropdownOptions="dropdownOptions"
                                @optionSelected="handleDropdownAction" @buttonClick="saveToFirestore" />
                            <Button class="px-2" @click="toggleFullscreen">
                                <ArrowsPointingInIcon class="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <div class="flex-grow relative">
                    <div ref="excalidrawFullscreenContainer" class="excalidraw-container-fullscreen h-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/vue/24/solid';
import { Excalidraw, serializeAsJSON } from '@excalidraw/excalidraw';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { firestore } from '@/firebase';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { useStore } from 'vuex';
import { toast } from 'vue-sonner';
import debounce from 'lodash/debounce';
import DropdownButton from '@/components/common/buttons/DropdownButton.vue';

const store = useStore();
const user = computed(() => store.getters.user);

const excalidrawContainer = ref(null);
const excalidrawFullscreenContainer = ref(null);
const isFullscreen = ref(false);
const isCollaborating = ref(false);
let root = null;
let fullscreenRoot = null;
let excalidrawAPI = null;

const initialData = ref(null);

const saveToLocalStorage = (elements, appState, files) => {
    console.log('Saving to localStorage:', { elements, appState, files });
    const serializedData = serializeAsJSON(elements, appState, files, 'local');
    localStorage.setItem('excalidrawData', serializedData);
};

const dropdownOptions = [
    { label: 'Save to Firestore', value: 'save' },
    { label: 'Clear Excalidraw', value: 'clear' },
];

const handleDropdownAction = (option) => {
    if (option.value === 'save') {
        saveToFirestore();
    } else if (option.value === 'clear') {
        clearExcalidraw();
    }
};

const clearExcalidraw = async () => {
    try {
        // Clear local storage
        localStorage.removeItem('excalidrawData');

        // Clear Firestore
        const userId = user.value.uid;
        await deleteDoc(doc(firestore, `users/${userId}/excalidraw/excalidraw`));

        // Reset Excalidraw
        if (excalidrawAPI) {
            excalidrawAPI.resetScene();
        }

        toast.success("Excalidraw cleared successfully");
        console.log('Excalidraw cleared');

        // Remount Excalidraw to reflect the changes
        mountExcalidraw(isFullscreen.value ? excalidrawFullscreenContainer.value : excalidrawContainer.value, isFullscreen.value);
    } catch (error) {
        console.error("Error clearing Excalidraw:", error);
        toast.error("Failed to clear Excalidraw");
    }
};

const debouncedSaveToLocalStorage = debounce(saveToLocalStorage, 5000);

const loadFromLocalStorage = () => {
    console.log('Loading from localStorage');
    const savedData = localStorage.getItem('excalidrawData');
    if (savedData) {
        console.log('Data found in localStorage');
        return JSON.parse(savedData);
    }
    console.log('No data found in localStorage');
    return null;
};

const saveToFirestore = async () => {
    if (!excalidrawAPI) {
        console.log('excalidrawAPI is null, cannot save');
        return;
    }
    const elements = excalidrawAPI.getSceneElements();
    const appState = excalidrawAPI.getAppState();
    const files = excalidrawAPI.getFiles();

    console.log('Saving to Firestore:', { elements, appState, files });

    const serializedData = serializeAsJSON(elements, appState, files, 'database');

    try {
        await setDoc(doc(firestore, `users/${user.value.uid}/excalidraw/excalidraw`), {
            data: serializedData
        });
        console.log("Drawing saved to Firestore");
        toast.success("Drawing saved successfully to Firestore");
    } catch (error) {
        console.error("Error saving drawing:", error);
        toast.error("Failed to save drawing to Firestore");
    }
};

const loadFromFirestore = async () => {
    console.log('Loading from Firestore');
    try {
        const docRef = doc(firestore, `users/${user.value.uid}/excalidraw/excalidraw`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data().data;
            console.log("Drawing loaded from Firestore");
            toast.success("Drawing loaded from Firestore");
            return JSON.parse(data);
        }
    } catch (error) {
        console.error("Error loading drawing:", error);
        toast.error("Failed to load drawing from Firestore");
    }
    console.log('No data found in Firestore');
    return null;
};

const clearLocalStorage = () => {
    localStorage.removeItem('excalidrawData');
    toast.success("Local storage cleared");
    console.log('Local storage cleared');
    // Reload the component to reflect the changes
    mountExcalidraw(isFullscreen.value ? excalidrawFullscreenContainer.value : excalidrawContainer.value, isFullscreen.value);
};

const ExcalidrawWrapper = React.memo((props) => {
    return React.createElement(Excalidraw, {
        initialData: props.initialData,
        onChange: (elements, appState, files) => {
            console.log('onChange triggered');
            debouncedSaveToLocalStorage(elements, appState, files);
        },
        onCollabButtonClick: () => {
            window.alert("You clicked on collab button");
            props.setIsCollaborating(true);
        },
        theme: 'dark',
        ...props,
    });
});

const mountExcalidraw = async (container, isFullscreenMode = false) => {
    if (container) {
        console.log(`Mounting Excalidraw in ${isFullscreenMode ? 'fullscreen' : 'normal'} mode`);

        const rootToUse = isFullscreenMode ? fullscreenRoot : root;
        if (rootToUse) {
            rootToUse.unmount();
        }

        // Try to load from localStorage first, then Firestore
        let savedData = loadFromFirestore();
        if (!savedData) {
            savedData = await loadFromLocalStorage();
        }

        initialData.value = savedData || {
            elements: [],
            appState: { theme: 'dark' },
            scrollToContent: true,
        };

        const newRoot = ReactDOM.createRoot(container);
        newRoot.render(
            React.createElement(
                ExcalidrawWrapper,
                {
                    initialData: initialData.value,
                    excalidrawAPI: (api) => {
                        excalidrawAPI = api;
                    },
                    isCollaborating: isCollaborating.value,
                    setIsCollaborating: (value) => {
                        isCollaborating.value = value;
                        if (value && excalidrawAPI) {
                            const collaborators = new Map();
                            collaborators.set("id1", {
                                username: "User 1",
                                avatarUrl: "https://example.com/avatar1.png",
                            });
                            collaborators.set("id2", {
                                username: "User 2",
                                avatarUrl: "https://example.com/avatar2.png",
                            });
                            excalidrawAPI.updateScene({ collaborators });
                        } else if (excalidrawAPI) {
                            excalidrawAPI.updateScene({
                                collaborators: new Map(),
                            });
                        }
                    },
                }
            )
        );

        if (isFullscreenMode) {
            fullscreenRoot = newRoot;
        } else {
            root = newRoot;
        }
    }
};

onMounted(async () => {
    console.log('Component mounted');
    await mountExcalidraw(excalidrawContainer.value);
});

onUnmounted(() => {
    console.log('Component unmounting');
    if (root) {
        root.unmount();
    }
    if (fullscreenRoot) {
        fullscreenRoot.unmount();
    }
    saveToFirestore();
});

const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value;
};

watch(isFullscreen, (newValue) => {
    console.log('Fullscreen changed:', newValue);
    nextTick(() => {
        if (newValue) {
            mountExcalidraw(excalidrawFullscreenContainer.value, true);
        } else {
            mountExcalidraw(excalidrawContainer.value);
        }
    });
});
</script>

<style scoped>
.excalidraw-container {
    width: 100%;
    height: calc(100vh - 320px);
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.excalidraw-container-fullscreen {
    width: 100%;
    height: calc(91vh);
    position: relative;
    overflow: hidden;
}
</style>