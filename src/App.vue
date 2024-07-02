<!-- src/App.vue -->
<template>
  <div id="app" class="flex flex-col">
    <TooltipProvider>
    <Toaster position="bottom-right" richColors />
    <Header v-if="$route.meta.requiresOverlay && !$route.meta.requiresAuth" />
    <AuthHeader v-if="$route.meta.requiresOverlay && $route.meta.requiresAuth" />
    <router-view class="flex router-view" />
    <div clas="flex-grow"></div>
    <Footer v-if="$route.meta.requiresOverlay" />
    </TooltipProvider>
  </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import AuthHeader from '@/components/authenticated/common/Header.vue';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

</script>

<style>
#app {
  min-height: 100vh;
}

.router-view {
  flex-grow: 1;
}
</style>