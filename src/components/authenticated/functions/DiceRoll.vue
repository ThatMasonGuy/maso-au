<!-- @/components/authenticated/functions/DiceRoll.vue -->
<template>
    <div v-if="!open" class="h-60 w-72 bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6 relative">
        <h1 class="text-3xl font-bold mb-6">Dice Roll</h1>
        <Button class="absolute bottom-6 left-6 text-md" @click="$emit('open', componentId)">Open</Button>
    </div>
    <div v-else class="h-full w-[95vw] sm:w-[97vw] md:w-[36rem] lg:w-[54rem] bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-6">Dice Roll</h1>
        <p class="mb-6">Select the dice size and number of dice to roll</p>
        <div class="mb-6">
            <select v-model="diceSize" @change="clearData" class="bg-gray-700 rounded-md p-2 mr-4">
                <option v-for="size in diceSizes" :key="size" :value="size">D{{ size }}</option>
            </select>
            <input v-model.number="numDice" @change="clearData" type="number" min="1" class="bg-gray-700 rounded-md p-2 w-20" />
        </div>
        <div class="mb-6 flex justify-between">
            <Button class="text-md" @click="rollDice">Roll Dice</Button>
            <Button class="text-md" @click="clearData">Clear</Button>
        </div>
        <div class="bg-gray-700 p-2 rounded-md border-gray-100 border-[1px] min-h-20 flex items-center justify-center">
            <div v-if="isRolling" class="flex items-center justify-center">
                <div class="animate-spin-bounce h-6 w-6 rounded-md bg-gray-200"></div>
            </div>
            <div v-else class="w-full">
                <p v-if="numDice === 1" class="text-sm select-all">Result: {{ result }}</p>
                <div v-else>
                    <p class="text-sm select-all">Min: {{ min || 0 }}</p>
                    <p class="text-sm select-all">Max: {{ max || 0 }}</p>
                    <p class="text-sm select-all">Avg: {{ roundedAvg || 0 }}</p>
                    <div @click="toggleRollsVisible" class="cursor-pointer flex items-center justify-end">
                        <p class="text-sm select-all mr-1">{{ rollsVisible ? 'Hide' : 'Show' }} Rolls</p>
                        <ChevronUpIcon v-if="rollsVisible" class="h-4 w-4" />
                        <ChevronDownIcon v-else class="h-4 w-4" />
                    </div>
                    <p v-if="rollsVisible" class="mt-2 text-sm select-all">{{ rolls.join(', ') }}</p>
                </div>
            </div>
        </div>
        <Button class="mt-6" @click="$emit('close')">Close</Button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';

const diceSizes = [4, 6, 8, 10, 12, 20, 100];
const diceSize = ref(20);
const numDice = ref(1);
const result = ref(null);
const rolls = ref([]);
const rollsVisible = ref(false);
const isRolling = ref(false);

const min = computed(() => Math.min(...rolls.value));
const max = computed(() => Math.max(...rolls.value));
const avg = computed(() => rolls.value.reduce((a, b) => a + b, 0) / rolls.value.length);
const roundedAvg = computed(() => Math.round(avg.value));

const rollDice = () => {
    isRolling.value = true;
    rolls.value = [];
    result.value = null;

    setTimeout(() => {
        for (let i = 0; i < numDice.value; i++) {
            const roll = Math.floor(Math.random() * diceSize.value) + 1;
            rolls.value.push(roll);
        }
        result.value = rolls.value.join(', ');
        isRolling.value = false;
        toast.success('Dice rolled successfully');
    }, 1500);
};

const clearData = () => {
    result.value = null;
    rolls.value = [];
    rollsVisible.value = false;
};

const toggleRollsVisible = () => {
    rollsVisible.value = !rollsVisible.value;
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

<style scoped>
@keyframes spin-bounce {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
    }
}

.animate-spin-bounce {
    animation: spin-bounce 1s infinite;
}
</style>