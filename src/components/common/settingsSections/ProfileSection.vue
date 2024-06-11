<!-- src/components/ProfileSection.vue -->
<template>
    <div class="flex-grow h-full ml-64 p-10">
        <h2 class="text-2xl font-bold mb-6">Profile</h2>
      <div class="flex items-center mb-8">
        <Avatar class="avatar w-32 h-32 flex items-center justify-center overflow-hidden bg-gray-800 drop-shadow-lg">
          <AvatarFallback class="text-4xl">{{ user.firstName.charAt(0) + user.lastName.charAt(0) }}</AvatarFallback>
        </Avatar>
        <div class="ml-6">
          <h3 class="text-xl font-bold"></h3>
          <p class="text-gray-100"></p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div>
          <Label class="block text-sm font-medium mb-1">First Name:</Label>
          <p class="text-gray-100">{{ user.firstName }}</p>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Last Name:</Label>
          <p class="text-gray-100">{{ user.lastName }}</p>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Email Address:</Label>
          <p class="text-gray-100">{{ user.emailAddress }}</p>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Phone Number:</Label>
          <p class="text-gray-100">{{ user.phoneNumber }}</p>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Country:</Label>
          <p class="text-gray-100">{{ user.country }}</p>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">User is Admin:</Label>
          <p class="text-gray-100">{{ isAdmin }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Avatar, AvatarFallback, AvatarImage, Label } from '@/components/ui';
  import { useStore } from 'vuex';

  const store = useStore();
  const user = store.state.user;
  const isAdmin = store.state.isAdmin;
  </script>