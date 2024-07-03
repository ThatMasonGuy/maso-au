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
                    <li v-for="item in navItems" :key="item.path">
                        <Tooltip :disabled="sidebarOpen">
                            <TooltipTrigger asChild>
                                <button @click.prevent="$router.push(item.path)"
                                    class="w-full text-white flex p-2 rounded-md hover:bg-gray-700 hover:shadow-lg transition-all duration-200">
                                    <component :is="item.icon" class="h-6 w-6" />
                                    <span v-show="sidebarOpen" class="ml-4 transition-opacity duration-500"
                                        :class="{ 'opacity-0': !sidebarOpen, 'opacity-100': sidebarOpen }">{{ item.name
                                        }}</span>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                {{ item.name }}
                            </TooltipContent>
                        </Tooltip>
                    </li>
                </ul>
            </nav>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div class="flex items-center cursor-pointer" @click="$router.push('/auth/home')">
                        <Avatar class="text-white bg-gray-700 font-bold">
                            <AvatarImage :src="businessLogo" :alt="businessName" />
                            <AvatarFallback>{{ businessInitials }}</AvatarFallback>
                        </Avatar>
                        <div v-show="sidebarOpen"
                            class="text-white text-left flex-1 transition-opacity duration-500 ease-in-out ml-3"
                            :class="{ 'opacity-0': !sidebarOpen, 'opacity-100': sidebarOpen }">
                            {{ businessName }}
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                    Return to Main Dashboard
                </TooltipContent>
            </Tooltip>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { HomeIcon, UsersIcon, CogIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useStore } from 'vuex';

const store = useStore();
const sidebarOpen = ref(false);

const accountingSettings = computed(() => store.state.accountingSettings || {});

const businessName = computed(() => accountingSettings.value.account?.businessName || 'Maso.au');
const businessLogo = computed(() => accountingSettings.value.account?.businessLogo || '@/assets/favicon.ico');
const businessInitials = computed(() => {
    const name = businessName.value;
    if (!name) return 'MB';
    
    const words = name.split(' ');
    const initials = words.map(word => word.charAt(0)).join('').toUpperCase();
    return initials;
});


const navItems = [
    { name: 'Dashboard', path: '/auth/accounting', icon: HomeIcon },
    { name: 'Contacts', path: '/auth/accounting/contacts', icon: UsersIcon },
    { name: 'Transactions', path: '/auth/accounting/transactions', icon: CurrencyDollarIcon },
    { name: 'Settings', path: '/auth/accounting/settings', icon: CogIcon },
];

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};
</script>