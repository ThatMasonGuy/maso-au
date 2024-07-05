<template>
    <Card>
        <CardHeader>
            <CardTitle class="text-xl mb-5">User Settings</CardTitle>
            <div class="flex justify-between items-center">
                <Input v-model="searchQuery" placeholder="Search users..." class="max-w-xs" @input="debouncedSearch" />
                <Button @click="fetchUsers">Refresh</Button>
            </div>
        </CardHeader>
        <CardContent>
            <Table class="mt-4">
                <TableHeader>
                    <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>User ID</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead class="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="user in users" :key="user.uid">
                        <TableCell>{{ user.userName }}</TableCell>
                        <TableCell>{{ user.uid }}</TableCell>
                        <TableCell>{{ user.emailAddress }}</TableCell>
                        <TableCell>{{ user.firstName }}</TableCell>
                        <TableCell>{{ user.lastName }}</TableCell>
                        <TableCell>{{ formatDate(user.createdAt) }}</TableCell>
                        <TableCell class="text-right">
                            <Button variant="outline" size="sm" class="mr-2" @click="editUser(user)">Edit</Button>
                            <Button variant="destructive" size="sm" @click="deleteUser(user)">Delete</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
    <div class="mt-4 flex justify-between items-center">
        <div class="text-sm text-gray-600">
            {{ paginationText }}
        </div>
        <Pagination v-slot="{ page }" :total="totalPages" :sibling-count="1" show-edges :default-page="currentPage"
            @update:page="changePage">
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
                <PaginationFirst />
                <PaginationPrev />

                <template v-for="(item, index) in items">
                    <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                        <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                            {{ item.value }}
                        </Button>
                    </PaginationListItem>
                    <PaginationEllipsis v-else :key="item.type" :index="index" />
                </template>

                <PaginationNext />
                <PaginationLast />
            </PaginationList>
        </Pagination>
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
import { ref, onMounted, computed } from 'vue';
import { firestore } from '@/firebase';
import { collection, getDocs, query, orderBy, limit, startAfter, updateDoc, doc, deleteDoc, where } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
} from '@/components/ui/pagination';
import { toast } from 'vue-sonner';
import debounce from 'lodash/debounce';

const users = ref([]);
const currentPage = ref(1);
const pageSize = 20;
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
        let q = query(collection(firestore, 'users'), orderBy('userName'), limit(pageSize));

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

const paginationText = computed(() => {
    const start = (currentPage.value - 1) * pageSize + 1;
    const end = Math.min(currentPage.value * pageSize, totalUsers.value);
    return `${start} to ${end} of ${totalUsers.value}`;
});

const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>