<!-- @/components/DashboardCard.vue -->
<template>
    <div class="bg-white opacity-80 backdrop-blur-lg rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <div class="flex justify-between items-start mb-4">
        <h2 class="text-2xl font-semibold text-gray-900">{{ title }}</h2>
        <p v-if="status" class="text-sm underline underline-offset-1 text-gray-500">{{ status }}</p>
      </div>
      <p class="text-gray-700 flex-grow mb-4">{{ description }}</p>
      <button @click="navigate" class="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300">
        {{ buttonText }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    title: String,
    description: String,
    buttonText: String,
    route: String,
    status: String,
  });
  
  const router = useRouter();
  
  const navigate = () => {
    router.push(props.route);
  };
  </script>
  