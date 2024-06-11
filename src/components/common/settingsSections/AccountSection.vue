<!-- src/components/AccountSection.vue -->
<template>
  <div class="flex-grow h-full ml-64 p-10">
    <div class="flex justify-center items-center flex-col">
      <Avatar class="avatar w-48 h-48 flex items-center justify-center overflow-hidden drop-shadow-lg">
        <AvatarFallback class="text-4xl">{{ user.firstName.charAt(0) + user.lastName.charAt(0) }}</AvatarFallback>
      </Avatar>
      <form class="space-y-6 w-full max-w-lg mt-8">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <Label class="block text-sm font-medium mb-1">First Name:</Label>
            <Input type="text" autocomplete="given-name" class="bg-gray-500 rounded p-2 w-full" placeholder="John" v-model="user.firstName"></Input>
          </div>
          <div>
            <Label class="block text-sm font-medium mb-1">Last Name:</Label>
            <Input type="text" autocomplete="family-name" class="bg-gray-500 rounded p-2 w-full" placeholder="Appleseed" v-model="user.lastName"></Input>
          </div>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Email Address:</Label>
          <Input type="email" autocomplete="email" class="bg-gray-500 rounded p-2 w-full" placeholder="JohnAppleseed@email.com" v-model="user.emailAddress"></Input>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Phone Number:</Label>
          <Input type="tel" autocomplete="tel" class="bg-gray-500 rounded p-2 w-full" placeholder="0412 345 678" v-model="user.phoneNumber"></Input>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Country:</Label>
          <Input type="country" autocomplete="country" class="bg-gray-500 rounded p-2 w-full" v-model="user.country"></Input>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Old Password:</Label>
          <Input type="password" autocomplete="current-password" class="bg-gray-500 rounded p-2 w-full" placeholder="Current password"></Input>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">New Password:</Label>
          <Input type="password" autocomplete="new-password" class="bg-gray-500 rounded p-2 w-full" placeholder="New password"></Input>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Confirm New Password:</Label>
          <Input type="password" autocomplete="new-password" class="bg-gray-500 rounded p-2 w-full" placeholder="New password"></Input>
        </div>
        <Button type="submit" class="bg-yellow-500 text-black p-3 rounded w-full">Update Profile</Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.state.user);

</script>