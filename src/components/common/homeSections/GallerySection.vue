<template>
    <section id="gallery" class="bg-[#98E278] py-10">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-700 text-center mb-4">Gallery</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div v-for="(img, index) in images" :key="index" class="relative overflow-hidden rounded-lg">
          <img :src="img.image" :alt="img.alt" class="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform transform duration-300 hover:scale-105" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    images: {
      type: Object,
      required: true,
    },
  });
  </script>