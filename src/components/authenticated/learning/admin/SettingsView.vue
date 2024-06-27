<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">Admin Settings</h2>
        <form @submit.prevent="saveSettings" class="space-y-6">
            <div>
                <h3 class="text-lg font-medium mb-2">General Settings</h3>
                <div class="space-y-2">
                    <Label for="siteName">Site Name</Label>
                    <Input id="siteName" v-model="settings.siteName" />
                </div>
                <div class="space-y-2">
                    <Label for="supportEmail">Support Email</Label>
                    <Input id="supportEmail" v-model="settings.supportEmail" type="email" />
                </div>
            </div>
            <div>
                <h3 class="text-lg font-medium mb-2">Course Settings</h3>
                <div class="space-y-2">
                    <Label for="maxEnrollments">Maximum Enrollments per Course</Label>
                    <Input id="maxEnrollments" v-model="settings.maxEnrollments" type="number" />
                </div>
                <div class="space-y-2">
                    <Label for="defaultCourseLength">Default Course Length (days)</Label>
                    <Input id="defaultCourseLength" v-model="settings.defaultCourseLength" type="number" />
                </div>
            </div>
            <div>
                <h3 class="text-lg font-medium mb-2">User Settings</h3>
                <div class="flex items-center space-x-2">
                    <Checkbox id="allowSelfRegistration" v-model="settings.allowSelfRegistration" />
                    <Label for="allowSelfRegistration">Allow Self-Registration</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <Checkbox id="requireEmailVerification" v-model="settings.requireEmailVerification" />
                    <Label for="requireEmailVerification">Require Email Verification</Label>
                </div>
            </div>
            <div>
                <h3 class="text-lg font-medium mb-2">Security Settings</h3>
                <div class="space-y-2">
                    <Label for="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input id="sessionTimeout" v-model="settings.sessionTimeout" type="number" />
                </div>
                <div class="flex items-center space-x-2">
                    <Checkbox id="enableTwoFactor" v-model="settings.enableTwoFactor" />
                    <Label for="enableTwoFactor">Enable Two-Factor Authentication</Label>
                </div>
            </div>
            <Button type="submit">Save Settings</Button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const settings = ref({
    siteName: '',
    supportEmail: '',
    maxEnrollments: 100,
    defaultCourseLength: 30,
    allowSelfRegistration: true,
    requireEmailVerification: true,
    sessionTimeout: 60,
    enableTwoFactor: false,
});

const saveSettings = async () => {
    try {
        // Implement API call to save settings
        console.log('Saving settings:', settings.value);
        // Show success toast
    } catch (error) {
        console.error('Error saving settings:', error);
        // Show error toast
    }
};
</script>