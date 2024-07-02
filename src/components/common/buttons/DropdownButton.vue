<template>
    <div class="relative inline-block text-left" ref="dropdownRef">
        <div class="flex shadow-xl hover:shadow-2xl transition-all duration-300">
            <button @click="handleMainButtonClick" :class="[
                'px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-l-md transition-colors duration-300'
            ]">
                {{ buttonText }}
            </button>
            <button @click="toggleDropdown" :class="[
                'px-2 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-r-md border-l border-gray-700 transition-colors duration-300'
            ]">
                <ChevronDownIcon :class="{ 'rotate-180': isOpen }" class="w-4 h-4 transition-transform duration-200" />
            </button>
        </div>
        <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="isOpen"
                class="absolute z-[999] right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a v-for="option in dropdownOptions" :key="option.value" @click="selectOption(option)" href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem">
                        {{ option.label }}
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    buttonText: {
        type: String,
        required: true
    },
    dropdownOptions: {
        type: Array,
        required: true
    }
});

const dropdownRef = ref(null);
const emit = defineEmits(['optionSelected', 'buttonClick']);
const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const handleMainButtonClick = () => {
    emit('buttonClick');
};

const selectOption = (option) => {
    emit('optionSelected', option);
    isOpen.value = false;
};

const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>