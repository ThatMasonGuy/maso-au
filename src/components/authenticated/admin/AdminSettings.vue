<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">User Settings</h2>
        <div class="mb-4 flex justify-between items-center">
            <Input v-model="searchQuery" placeholder="Search users..." class="max-w-xs" @input="debouncedSearch" />
            <Button @click="fetchUsers">Refresh</Button>
        </div>
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User ID</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="user in users" :key="user.uid">
                            <TableCell>{{ user.uid }}</TableCell>
                            <TableCell>{{ user.userName }}</TableCell>
                            <TableCell>{{ user.emailAddress }}</TableCell>
                            <TableCell>{{ user.firstName }}</TableCell>
                            <TableCell>{{ user.lastName }}</TableCell>
                            <TableCell>{{ formatDate(user.createdAt) }}</TableCell>
                            <TableCell>
                                <Button variant="outline" size="sm" class="mr-2" @click="editUser(user)">Edit</Button>
                                <Button variant="destructive" size="sm" @click="deleteUser(user)">Delete</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <div class="mt-4 flex justify-between items-center">
            <p>
                Showing {{ (currentPage - 1) * pageSize + 1 }} -
                {{ Math.min(currentPage * pageSize, totalUsers) }} of {{ totalUsers }} users
            </p>
            <div>
                <Button :disabled="currentPage === 1" @click="changePage(currentPage - 1)" class="mr-2">
                    Previous
                </Button>
                <Button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
                    Next
                </Button>
            </div>
        </div>
    </div>

    <!-- Edit User Modal -->
    <Dialog :open="isEditModalOpen" @update:open="isEditModalOpen = $event">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
            </DialogHeader>
            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="username" class="text-right">Username</Label>
                    <Input id="username" v-model="editingUser.userName" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="email" class="text-right">Email</Label>
                    <Input id="email" v-model="editingUser.emailAddress" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="firstName" class="text-right">First Name</Label>
                    <Input id="firstName" v-model="editingUser.firstName" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="lastName" class="text-right">Last Name</Label>
                    <Input id="lastName" v-model="editingUser.lastName" class="col-span-3" />
                </div>
            </div>
            <DialogFooter>
                <Button @click="saveUser">Save changes</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { firestore } from '@/firebase';
import { collection, getDocs, query, orderBy, limit, startAfter, updateDoc, doc, deleteDoc, where } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from 'vue-sonner';
import debounce from 'lodash/debounce';

const users = ref([]);
const currentPage = ref(1);
const pageSize = 10;
const totalUsers = ref(0);
const totalPages = ref(0);
const lastVisible = ref(null);
const searchQuery = ref('');
const isEditModalOpen = ref(false);
const editingUser = ref({});

onMounted(() => {
    fetchUsers();
    fetchTotalUsers();
});

const fetchUsers = async () => {
    try {
        let q = query(collection(firestore, 'users'), orderBy('createdAt', 'desc'), limit(pageSize));

        if (searchQuery.value) {
            q = query(q, where('userName', '>=', searchQuery.value), where('userName', '<=', searchQuery.value + '\uf8ff'));
        }

        if (lastVisible.value && currentPage.value > 1) {
            q = query(q, startAfter(lastVisible.value));
        }

        const querySnapshot = await getDocs(q);
        users.value = querySnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));
        lastVisible.value = querySnapshot.docs[querySnapshot.docs.length - 1];
    } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users");
    }
};

const fetchTotalUsers = async () => {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'users'));
        totalUsers.value = querySnapshot.size;
        totalPages.value = Math.ceil(totalUsers.value / pageSize);
    } catch (error) {
        console.error("Error fetching total users:", error);
        toast.error("Failed to fetch total user count");
    }
};

const changePage = (page) => {
    currentPage.value = page;
    fetchUsers();
};

const debouncedSearch = debounce(() => {
    currentPage.value = 1;
    lastVisible.value = null;
    fetchUsers();
}, 300);

const editUser = (user) => {
    editingUser.value = { ...user };
    isEditModalOpen.value = true;
};

const saveUser = async () => {
    try {
        const userRef = doc(firestore, 'users', editingUser.value.uid);
        await updateDoc(userRef, {
            userName: editingUser.value.userName,
            emailAddress: editingUser.value.emailAddress,
            firstName: editingUser.value.firstName,
            lastName: editingUser.value.lastName,
        });
        toast.success("User updated successfully");
        isEditModalOpen.value = false;
        fetchUsers();
    } catch (error) {
        console.error("Error updating user:", error);
        toast.error("Failed to update user");
    }
};

const deleteUser = async (user) => {
    if (confirm(`Are you sure you want to delete the user ${user.userName}?`)) {
        try {
            await deleteDoc(doc(firestore, 'users', user.uid));
            toast.success("User deleted successfully");
            fetchUsers();
            fetchTotalUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Failed to delete user");
        }
    }
};

const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>