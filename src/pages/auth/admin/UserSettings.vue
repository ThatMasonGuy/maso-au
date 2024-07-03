<template>
    <div class="bg-gray-100 min-h-screen p-4 md:p-8 ml-16">
        <AdminSidebar />
        <h1 class="text-3xl font-bold mb-6">My Settings</h1>
        <div v-if="loading" class="text-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
        </div>
        <div v-else class="bg-white shadow-md rounded-lg p-6">
            <div class="flex justify-between items-center mb-6">
                <Avatar :src="userData.avatarUrl" :fallback="getInitials(userData)" class="w-20 h-20" />
                <Button @click="toggleEdit" :variant="isEditing ? 'default' : 'outline'">
                    {{ isEditing ? 'Cancel' : 'Edit' }}
                </Button>
            </div>
            <form @submit.prevent="saveSettings">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="(value, key) in userFields" :key="key">
                        <Label :for="key">{{ value.label }}</Label>
                        <Input v-if="key !== 'isAdmin'" :id="key" v-model="userData[key]" :type="value.type || 'text'"
                            :readonly="!isEditing || key === 'createdAt' || key === 'updatedAt'"
                            :class="{ 'bg-gray-100': !isEditing || key === 'createdAt' || key === 'updatedAt' }" />
                        <div v-else class="bg-gray-100 p-2 rounded">
                            {{ userData[key] ? 'Yes' : 'No' }}
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex justify-between">
                    <Button type="submit" :disabled="!isEditing">Save Changes</Button>
                    <Button type="button" variant="outline" @click="showChangePasswordModal = true">Change
                        Password</Button>
                </div>
            </form>
        </div>

        <!-- Change Password Modal -->
        <Dialog :open="showChangePasswordModal" @update:open="showChangePasswordModal = $event">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Change Password</DialogTitle>
                </DialogHeader>
                <form @submit.prevent="changePassword">
                    <div class="space-y-4">
                        <div>
                            <Label for="currentPassword">Current Password</Label>
                            <Input id="currentPassword" v-model="passwordData.currentPassword" type="password"
                                required />
                        </div>
                        <div>
                            <Label for="newPassword">New Password</Label>
                            <Input id="newPassword" v-model="passwordData.newPassword" type="password" required />
                        </div>
                        <div>
                            <Label for="confirmPassword">Confirm New Password</Label>
                            <Input id="confirmPassword" v-model="passwordData.confirmPassword" type="password"
                                required />
                        </div>
                    </div>
                    <DialogFooter class="mt-4">
                        <Button type="submit">Change Password</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { firestore, auth } from '@/firebase';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'vue-sonner';
import AdminSidebar from '@/components/authenticated/admin/AdminSidebar.vue';

const store = useStore();
const userData = ref({});
const loading = ref(true);
const showChangePasswordModal = ref(false);
const isEditing = ref(false);
const passwordData = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
});

const userFields = {
    firstName: { label: 'First Name' },
    lastName: { label: 'Last Name' },
    userName: { label: 'Username' },
    emailAddress: { label: 'Email', type: 'email' },
    phoneNumber: { label: 'Phone Number', type: 'tel' },
    country: { label: 'Country' },
    createdAt: { label: 'Created At', type: 'datetime-local' },
    updatedAt: { label: 'Updated At', type: 'datetime-local' },
    isAdmin: { label: 'Admin Status' },
};

onMounted(async () => {
    await fetchUserData();
});

const fetchUserData = async () => {
    try {
        const user = auth.currentUser;
        if (user) {
            const userDoc = await getDoc(doc(firestore, 'users', user.uid));
            if (userDoc.exists()) {
                userData.value = userDoc.data();
                // Convert timestamps to Date objects for input fields
                userData.value.createdAt = new Date(userData.value.createdAt.seconds * 1000).toISOString().slice(0, 16);
                userData.value.updatedAt = new Date(userData.value.updatedAt.seconds * 1000).toISOString().slice(0, 16);
            }
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to load user data');
    } finally {
        loading.value = false;
    }
};

const toggleEdit = () => {
    isEditing.value = !isEditing.value;
    if (!isEditing.value) {
        fetchUserData(); // Reset to original data if cancelling edit
    }
};

const saveSettings = async () => {
    try {
        const user = auth.currentUser;
        if (user && isEditing.value) {
            const updatedData = { ...userData.value, updatedAt: new Date() };
            delete updatedData.isAdmin; // Ensure isAdmin is not updated
            await updateDoc(doc(firestore, 'users', user.uid), updatedData);
            toast.success('Settings updated successfully');
            isEditing.value = false;
        }
    } catch (error) {
        console.error('Error updating settings:', error);
        toast.error('Failed to update settings');
    }
};

const changePassword = async () => {
    try {
        if (passwordData.value.newPassword !== passwordData.value.confirmPassword) {
            throw new Error('New passwords do not match');
        }

        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, passwordData.value.currentPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, passwordData.value.newPassword);

        toast.success('Password changed successfully');
        showChangePasswordModal.value = false;
        passwordData.value = { currentPassword: '', newPassword: '', confirmPassword: '' };
    } catch (error) {
        console.error('Error changing password:', error);
        toast.error(error.message || 'Failed to change password');
    }
};

const getInitials = (user) => {
    return (user.firstName[0] + user.lastName[0]).toUpperCase();
};
</script>