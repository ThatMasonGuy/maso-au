<template>
    <section id="testimonials" class="bg-[#F9A03F] text-gray-900 py-10 px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-4">Testimonials</h2>
        <div class="max-w-4xl mx-auto text-center">
            <p v-for="(testimonial, key) in data" :key="key" class="mb-4 max-w-prose mx-auto">
                <span class="text-sm sm:text-base">"{{ testimonial.text }}" - </span>
                <span class="text-sm sm:text-base font-semibold">{{ testimonial.name }}</span>
            </p>
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