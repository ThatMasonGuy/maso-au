<!-- @/pages/auth/Home.vue -->
<template>
  <div
    class="min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8 text-center text-[var(--text-50)]">
        Welcome back! {{ user.userName }}
      </h1>
      <p class="text-center text-lg text-[var(--text-50)] mb-12">
        We're glad to have you back! Explore your personalized dashboard below.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Your Profile</h2>
          <p class="text-[var(--text-700)]">Manage your personal information and update your settings.</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Profile</button>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Notifications</h2>
          <p class="text-[var(--text-700)]">View your latest notifications and updates.</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Notifications</button>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Settings</h2>
          <p class="text-[var(--text-700)]">Adjust your account preferences and application settings.</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go to Settings</button>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Learning Management System</h2>
          <p class="text-[var(--text-700)]">Head to the currently in development learning management system by Tempest Studios.</p>
          <button @click="$router.push('/auth/learning/')" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Check it out</button>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
          <p class="text-[var(--text-700)]">Overview of your recent activities and analytics.</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Dashboard</button>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Messages</h2>
          <p class="text-[var(--text-700)]">Check your messages and communicate with other users.</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Messages</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.getters.user);
const homeData = computed(() => store.state.homeData);

onMounted(() => {
  try {
    store.dispatch('fetchHomeData');
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
