<!-- @/components/authenticated/functions/PlaceholderComponent.vue -->
<template>
  <div class="flex items-center justify-center h-60 w-72 bg-gray-700 text-gray-200 rounded-lg border border-gray-300">
    {{ componentId }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  componentId: Number,
});
</script>