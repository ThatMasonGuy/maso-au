<template>
    <section id="about" class="shadow-lg">
        <div class="bg-[#0066FF] text-gray-300 py-10 text-center px-4 shadow-lg">
            <h2 class="text-2xl sm:text-3xl font-bold mb-4">{{ data.heading }}</h2>
            <p class="max-w-prose mx-auto text-sm sm:text-base">{{ data.body }}</p>
        </div>
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