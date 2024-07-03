// src/composables/useLoading.js
import { ref } from 'vue';

export function useLoading() {
  const isLoading = ref(false);
  const progress = ref(0);
  let interval;

  const startLoading = () => {
    isLoading.value = true;
    progress.value = 0;
    simulateProgress();
  };

  const setProgress = (value) => {
    progress.value = Math.min(Math.max(value, 0), 100);
  };

  const stopLoading = () => {
    clearInterval(interval);
    progress.value = 100;
    setTimeout(() => {
      isLoading.value = false;
      progress.value = 0;
    }, 500);
  };

  const simulateProgress = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      if (progress.value < 90) {
        progress.value += Math.random() * 10;
      }
    }, 200);
  };

  return {
    isLoading,
    progress,
    startLoading,
    setProgress,
    stopLoading
  };
}