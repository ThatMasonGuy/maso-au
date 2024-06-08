<!-- @/components/authenticated/functions/CoinFlip.vue -->
<template>
    <div v-if="!open" class="h-60 w-72 bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6 relative">
        <h1 class="text-3xl font-bold mb-6">Coin Flip</h1>
        <Button class="absolute bottom-6 left-6 text-md" @click="$emit('open', componentId)">Open</Button>
    </div>
    <div v-else class="h-full w-[95vw] sm:w-[97vw] md:w-[36rem] lg:w-[54rem] bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-6">Coin Flip</h1>
        <p class="mb-6">Click the button to flip a coin</p>
        <div class="mb-6">
            <Button class="text-md" @click="flipCoin">Flip Coin</Button>
        </div>
        <div class="bg-gray-700 p-2 rounded-md border-gray-100 border-[1px] min-h-14 flex items-center justify-center">
            <div v-if="isFlipping" class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-200"></div>
            <p v-else class="text-md font-semibold select-all">{{ result || 'Result...' }}</p>
        </div>
        <Button class="mt-6" @click="$emit('close')">Close</Button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';

const result = ref('');
const isFlipping = ref(false);

const flipCoin = () => {
    isFlipping.value = true;
    result.value = '';
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            result.value = 'Heads';
        } else {
            result.value = 'Tails';
        }
        isFlipping.value = false;
        toast.success('Coin flipped successfully');
    }, 1000);
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