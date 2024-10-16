<template>
    <Select v-model="selectedClientId" @update:modelValue="handleClientSelection">
        <SelectTrigger id="client">
            <SelectValue :placeholder="selectedClient ? selectedClient.name : 'Select client'" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem v-for="client in clients" :key="client.id" :value="client.id">
                {{ client.name }}
            </SelectItem>
        </SelectContent>
    </Select>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { useStore } from 'vuex';
import { toast } from 'vue-sonner';

const store = useStore();
const user = computed(() => store.getters.user);

const clients = ref([]);
const selectedClientId = ref(null);
const selectedClient = ref(null);

const emit = defineEmits(['clientSelected']);

const fetchClients = async () => {
    try {
        const userId = user.value.uid;
        const contactsRef = collection(firestore, `users/${userId}/accounting/details/contacts`);
        const q = query(contactsRef, orderBy('name'));
        const querySnapshot = await getDocs(q);
        clients.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching clients:", error);
        toast.error("Failed to fetch clients");
    }
};

const handleClientSelection = (clientId) => {
    selectedClient.value = clients.value.find(client => client.id === clientId);
    emit('clientSelected', selectedClient.value);
};

onMounted(fetchClients);
</script>