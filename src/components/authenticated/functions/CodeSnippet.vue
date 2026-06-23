<template>
    <div class="h-60 w-72 bg-gray-800 text-gray-200 rounded-lg shadow-lg p-5 relative">
        <h1 class="text-3xl font-bold mb-6">Email & Password Grabber</h1>
        <Popover ref="popover">
            <PopoverTrigger>
                <Button class="absolute bottom-5 left-5 text-md">Open</Button>
            </PopoverTrigger>
            <PopoverContent class="bg-gray-800 text-gray-200 rounded-lg shadow-2xl p-6 w-[400px] h-full">
                <h1 class="text-3xl font-bold mb-6">Enter Credentials</h1>
                <div class="mb-4">
                    <label class="block mb-1">Email</label>
                    <input v-model="email" type="email" class="w-full p-2 bg-gray-700 rounded-lg" placeholder="Enter email" />
                </div>
                <div class="mb-4">
                    <label class="block mb-1">Password</label>
                    <input v-model="password" type="password" class="w-full p-2 bg-gray-700 rounded-lg" placeholder="Enter password" />
                </div>
                <Button @click="confirmCredentials" class="w-full">Confirm</Button>
                <div v-if="output" class="mt-4 bg-gray-900 p-3 rounded-lg">
                    <p class="mb-1">Copy & Paste:</p>
                    <textarea v-model="output" class="w-full p-2 bg-gray-700 rounded-lg" readonly></textarea>
                </div>
            </PopoverContent>
        </Popover>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const email = ref('');
const password = ref('');
const output = ref('');
const popover = ref(null);

const confirmCredentials = () => {
    output.value = `Email: ${email.value}\nPassword: ${password.value}`;
};
</script>
