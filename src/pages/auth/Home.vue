<!-- @/pages/auth/Home.vue -->
<template>
  <div class="min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 relative">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-5xl font-bold mb-8 text-center text-white animate-fade-in">
        Welcome back, {{ user.userName }}!
      </h1>
      <p class="text-center text-xl text-gray-200 mb-12 animate-fade-in-delay">
        Explore your personalized dashboard and stay productive.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DashboardCard 
          v-for="(card, index) in dashboardCards" 
          :key="index"
          :title="card.title"
          :description="card.description"
          :buttonText="card.buttonText"
          :route="card.route"
          :status="card.status"
        />
      </div>
    </div>
    <button @click="logout" class="fixed z-[9999] bottom-8 right-8 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
      Logout
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import DashboardCard from '@/components/authenticated/common/DashboardCard.vue';

const store = useStore();
const router = useRouter();
const user = computed(() => store.getters.user);
const homeData = computed(() => store.state.homeData);

const dashboardCards = [
  {
    title: 'Learning Management System',
    description: 'Head to the currently in development learning management system by Tempest Studios.',
    buttonText: 'Check it out',
    route: '/auth/learning/',
    status: 'In progress'
  },
  {
    title: 'Accounting Platform',
    description: 'A basic accounting platform for small businesses or sole traders.',
    buttonText: 'View Dashboard',
    route: '/auth/accounting/',
    status: 'In progress'
  },
  {
    title: 'Admin Platform',
    description: 'Access the admin panel for maso.au.',
    buttonText: 'View Dashboard',
    route: '/auth/admin/',
    status: 'In progress'
  },
  {
    title: 'Notifications',
    description: 'View your latest notifications and updates.',
    buttonText: 'View Notifications',
    route: '/auth/notifications/'
  },
  {
    title: 'Settings',
    description: 'Adjust your account preferences and application settings.',
    buttonText: 'Go to Settings',
    route: '/auth/settings/'
  },
  {
    title: 'Messages',
    description: 'Check your messages and communicate with other users.',
    buttonText: 'View Messages',
    route: '/auth/messages/'
  }
];

onMounted(() => {
  try {
    store.dispatch('fetchHomeData');
  } catch (error) {
    console.error(error);
  }
});

const logout = () => {
  store.dispatch('logoutUser');
  router.push('/login');
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.5s ease-out 0.2s both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
