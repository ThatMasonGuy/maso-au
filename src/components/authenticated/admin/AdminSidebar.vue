<template>
    <div
        :class="['fixed top-0 left-0 h-full transition-all duration-500 ease-in-out z-50', sidebarOpen ? 'w-64' : 'w-16']">
        <div class="bg-gray-800 h-full shadow-lg px-3 pt-12 pb-3 overflow-hidden flex flex-col">
            <button @click="toggleSidebar" class="text-white mb-4 flex justify-center">
                <svg v-if="sidebarOpen" xmlns="http://www.w3.org/2000/svg" class="absolute h-7 w-7 top-4 left-4"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="absolute h-7 w-7 top-4 left-[17px]" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <nav class="flex-1 justify-start items-start">
                <ul class="space-y-2">
                    <li v-for="item in menuItems" :key="item.path">
                        <router-link :to="item.path"
                            class="w-full text-white flex p-2 rounded-md hover:bg-gray-700 hover:shadow-lg transition-all duration-200">
                            <component :is="item.icon" class="h-6 w-6" />
                            <span v-show="sidebarOpen" class="ml-4 transition-opacity duration-500"
                                :class="{ 'opacity-0': !sidebarOpen, 'opacity-100': sidebarOpen }">{{ item.name
                                }}</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { HomeIcon, UsersIcon, CogIcon, UserIcon } from '@heroicons/vue/24/outline';

const sidebarOpen = ref(false);

const menuItems = [
    { name: 'Dashboard', path: '/auth/admin', icon: HomeIcon },
    { name: 'Users', path: '/auth/admin/users', icon: UsersIcon },
    { name: 'Settings', path: '/auth/admin/settings', icon: CogIcon },
    { name: 'My Settings', path: '/auth/admin/my-settings', icon: UserIcon },
];

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};
</script>