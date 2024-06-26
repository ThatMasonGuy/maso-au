<!-- src/views/Settings.vue-->
<template>
  <div class="flex pt-[--header-height] min-h-[--adjusted-height] bg-gray-700 text-gray-50">
    <div class="fixed left-0 h-full flex flex-col w-64 p-5 bg-gray-600">
      <div class="space-y-4">
        <a @click="activePage = 'general'" class="block p-3 hover:bg-gray-700 rounded"
          :class="{ 'bg-gray-700': activePage === 'general' }">General</a>
        <a v-if="isAuthenticated" @click="activePage = 'profile'" class="block p-3 hover:bg-gray-700 rounded"
          :class="{ 'bg-gray-700': activePage === 'profile' }">Profile</a>
        <a v-if="isAuthenticated" @click="activePage = 'account'" class="block p-3 hover:bg-gray-700 rounded"
          :class="{ 'bg-gray-700': activePage === 'account' }">Account</a>
        <a @click="activePage = 'support'" class="block p-3 hover:bg-gray-700 rounded"
          :class="{ 'bg-gray-700': activePage === 'support' }">Support</a>
        <a @click="activePage = 'about'" class="block p-3 hover:bg-gray-700 rounded"
          :class="{ 'bg-gray-700': activePage === 'about' }">About</a>
        <Button @click="openLogoutModal"
          class="fixed bottom-[calc(var(--footer-height)_+_20px)] m-2 bg-yellow-500 text-black rounded">Logout</Button>
      </div>
    </div>

    <!-- Modal for Logout Confirmation -->
    <div v-if="modalsOpen.logout" class="modal-overlay" @click.self="closeLogoutModal">
      <div class="modal transition bg-gray-800 rounded-lg w-96" @click.stop>
        <div class="modal-box p-4">
          <h3 class="font-bold text-lg text-gray-50">Confirm Logout</h3>
          <p class="py-4 text-gray-50 mb-10">Are you sure you want to log out?</p>
          <div class="modal-action flex gap-2">
            <Button @click="logout"
              class="bg-destructive hover:bg-destructive rounded-md text-gray-50 p-2">Logout</Button>
            <Button @click="closeLogoutModal" class="bg-hover-2 rounded-md text-gray-50 p-2">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
    <GeneralSection v-if="activePage === 'general'" />
    <ProfileSection v-if="isAuthenticated && activePage === 'profile'" />
    <AccountSection v-if="isAuthenticated && activePage === 'account'" />
    <SupportSection v-if="activePage === 'support'" />
    <AboutSection v-if="activePage === 'about'" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { Button } from '@/components/ui/button';
import ProfileSection from '@/components/common/settingsSections/ProfileSection.vue';
import AccountSection from '@/components/common/settingsSections/AccountSection.vue';
import SupportSection from '@/components/common/settingsSections/SupportSection.vue';
import AboutSection from '@/components/common/settingsSections/AboutSection.vue';
import GeneralSection from '@/components/common/settingsSections/GeneralSection.vue';


const store = useStore();
const activePage = ref('general');
const modalsOpen = ref({});

const isAuthenticated = computed(() => store.state.user !== null);

function openLogoutModal() {
  modalsOpen.value['logout'] = true;
}

function closeLogoutModal() {
  modalsOpen.value['logout'] = false;
}

function logout() {
  store.dispatch('logout');
  closeLogoutModal();
}

</script>
