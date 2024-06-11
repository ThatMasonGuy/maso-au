<template>
    <section id="timeline" class="bg-[#956CC6] text-gray-200 -mt-8 py-2 px-4 sm:px-6">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-4">My Photography Through the Years</h2>
        <ul class="max-w-2xl mx-auto">
            <li v-for="(item, key) in data" :key="key" class="mb-4">
                <strong class="text-sm sm:text-base">{{ item.date }}:</strong>
                <span class="text-sm sm:text-base">{{ item.description }}</span>
            </li>
        </ul>
    </section>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>