<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AccountingSidebar class="shadow-2xl" />
        <div class="flex-1 p-4 sm:p-8">
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-3xl font-bold">Contacts</h1>
                <Button @click="toggleAddContact">
                    {{ isAddingContact ? 'Cancel' : 'Add Contact' }}
                </Button>
            </div>
            
            <Transition name="slide-fade">
                <AddContact 
                    v-if="isAddingContact"
                    :editingContact="editingContact"
                    @save="saveContact"
                    @cancel="cancelAddContact"
                />
            </Transition>

            <div v-if="loading" class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
            
            <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">{{ error }}</span>
            </div>
            
            <div v-else class="bg-white shadow-md rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="contact in contacts" :key="contact.id">
                            <TableCell>{{ contact.name }}</TableCell>
                            <TableCell>{{ contact.email }}</TableCell>
                            <TableCell>{{ contact.phone }}</TableCell>
                            <TableCell>{{ contact.type }}</TableCell>
                            <TableCell>
                                <Button variant="outline" size="sm" @click="editContact(contact)">Edit</Button>
                                <Button variant="destructive" size="sm" @click="deleteContact(contact)" class="ml-2">Delete</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { auth, firestore } from '@/firebase';
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import AccountingSidebar from '@/components/authenticated/accounting/AccountingSidebar.vue';
import AddContact from '@/components/authenticated/accounting/ContactCreator.vue';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'vue-sonner';

const contacts = ref([]);
const isAddingContact = ref(false);
const editingContact = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    try {
        await fetchContacts();
    } catch (err) {
        error.value = "Failed to load contacts. Please try again later.";
        console.error('Error fetching contacts:', err);
    } finally {
        loading.value = false;
    }
});

const fetchContacts = async () => {
    const userId = auth.currentUser.uid;
    const contactsRef = collection(firestore, `users/${userId}/accounting/details/contacts`);
    const querySnapshot = await getDocs(contactsRef);
    contacts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const toggleAddContact = () => {
    isAddingContact.value = !isAddingContact.value;
    editingContact.value = null;
};

const editContact = (contact) => {
    editingContact.value = { ...contact };
    isAddingContact.value = true;
};

const deleteContact = async (contact) => {
    if (confirm('Are you sure you want to delete this contact?')) {
        try {
            const userId = auth.currentUser.uid;
            await deleteDoc(doc(firestore, `users/${userId}/accounting/details/contacts`, contact.id));
            contacts.value = contacts.value.filter(c => c.id !== contact.id);
            toast.success('Contact deleted successfully');
        } catch (error) {
            console.error('Error deleting contact:', error);
            toast.error('Failed to delete contact');
        }
    }
};

const saveContact = async (contactData) => {
    try {
        const userId = auth.currentUser.uid;
        if (editingContact.value) {
            const contactRef = doc(firestore, `users/${userId}/accounting/details/contacts`, editingContact.value.id);
            await updateDoc(contactRef, contactData);
            const index = contacts.value.findIndex(c => c.id === editingContact.value.id);
            if (index !== -1) {
                contacts.value[index] = { id: editingContact.value.id, ...contactData };
            }
            toast.success('Contact updated successfully');
        } else {
            const docRef = await addDoc(collection(firestore, `users/${userId}/accounting/details/contacts`), contactData);
            contacts.value.push({ id: docRef.id, ...contactData });
            toast.success('Contact added successfully');
        }
        isAddingContact.value = false;
        editingContact.value = null;
    } catch (error) {
        console.error('Error saving contact:', error);
        toast.error('Failed to save contact');
    }
};

const cancelAddContact = () => {
    isAddingContact.value = false;
    editingContact.value = null;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>