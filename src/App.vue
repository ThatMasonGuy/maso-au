<template>
  <div id="app" class="flex flex-col min-h-screen">
    <LoadingScreen :is-loading="isLoading" :progress="progress" />
    <TooltipProvider>
      <Toaster position="bottom-right" richColors />
      <Header v-if="$route.meta.requiresOverlay && !$route.meta.requiresAuth" />
      <AuthHeader v-if="$route.meta.requiresOverlay && $route.meta.requiresAuth" />
      <router-view class="flex-grow" />
      <Footer v-if="$route.meta.requiresOverlay" />
    </TooltipProvider>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import AuthHeader from '@/components/authenticated/common/Header.vue';
import LoadingScreen from '@/components/common/LoadingScreen.vue';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useLoading } from '@/utils/useLoading';

const { isLoading, progress, startLoading, setProgress, stopLoading } = useLoading();

// Provide loading state and methods
provide('loading', {
  isLoading,
  progress,
  startLoading,
  setProgress,
  stopLoading
});
</script>

<style>
#app {
  min-height: 100vh;
}
</style>