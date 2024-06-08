<!-- @/components/authenticated/functions/Weather.vue -->
<template>
    <div class="h-60 w-72 bg-gray-800 text-gray-200 rounded-lg shadow-lg p-5 relative">
        <h1 class="text-3xl font-bold mb-6">{{ details.title }}</h1>
        <Popover ref="popover">
            <PopoverTrigger>
                <Button class="absolute bottom-5 left-5 text-md">Open</Button>
            </PopoverTrigger>
            <PopoverContent class="bg-gray-800 text-gray-200 rounded-lg shadow-2xl p-6 w-[400px] h-full">
                <h1 class="text-3xl font-bold mb-6">{{ details.title }}</h1>
                <p class="mb-6">{{ details.description }}</p>
                <div class="mb-6">
                    <div class="flex items-center">
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { getDoc, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const store = useStore();
const route = useRoute();
const popover = ref(null);

const user = computed(() => store.getters.user);

const details = {
    title: 'Weather',
    description: 'Realtime Weather Widget',
    hashCode: 'weather',
};

onMounted(() => {
    const hash = window.location.hash.substring(1);
    if (hash === details.hashCode) {
        popover.value.open();
    }
});
</script>
