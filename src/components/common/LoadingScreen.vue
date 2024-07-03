<!-- src/components/common/LoadingScreen.vue -->
<template>
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
      <div class="bg-white rounded-lg p-8 shadow-xl max-w-md w-full">
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 mb-4">
            <svg class="animate-spin" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <h2 class="text-2xl font-semibold mb-2">Loading...</h2>
          <p class="text-gray-600 mb-4">Please wait while we prepare your content.</p>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
          <p class="text-sm text-gray-500">{{ progressText }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  progress: {
    type: Number,
    default: 0,
  },
});

const progressText = computed(() => `${Math.round(props.progress)}% Complete`);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>