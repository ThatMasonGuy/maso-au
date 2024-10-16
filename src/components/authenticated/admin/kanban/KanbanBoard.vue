<template>
    <Card class="h-[75vh]">
        <CardHeader>
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <CardTitle class="text-xl font-bold text-primary">Kanban Board</CardTitle>
                    <Input v-if="selectedBoard" v-model="boardName" @blur="updateBoardName" class="max-w-xs"
                        placeholder="Board Name" />
                </div>
                <div class="flex space-x-2 justify-end items-center">
                    <Select v-model="selectedBoard" @update:modelValue="loadBoard">
                        <SelectTrigger class="w-[180px]">
                            <SelectValue placeholder="Select a board" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem v-for="board in boards" :key="board.id" :value="board.id">
                                {{ board.name }}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Input v-model="inviteUsername" placeholder="Enter username" class="max-w-lg" />
                    <Button @click="inviteUser" variant="outline"
                        class="bg-primary text-primary-foreground hover:bg-primary/90">Invite</Button>
                    <Button variant="ghost" size="icon" @click="showSettings = !showSettings">
                        <CogIcon class="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </CardHeader>
        <CardContent class="flex-grow overflow-hidden">
            <SettingsComponent v-if="showSettings" @save-settings="updateSettings" :settings="boardSettings" />
            <div v-else-if="!boardLoaded" class="flex flex-col items-center justify-center h-full">
                <h2 class="text-2xl font-bold mb-4">Welcome to Kanban</h2>
                <div class="space-x-4">
                    <Button @click="createBoard('example')">Create Example Board</Button>
                    <Button @click="createBoard('blank')">Create Blank Board</Button>
                </div>
            </div>
            <div v-else
                class="flex space-x-4 overflow-hidden p-4 bg-secondary/10 rounded-lg shadow-inner">
                <draggable v-model="columns" group="columns" @start="drag = true" @end="drag = false" item-key="id"
                    class="flex space-x-4 overflow-hidden">
                    <template #item="{ element: column }">
                        <CardComponent :column="column" @remove-column="removeColumn" @add-item="addItem"
                            @update-column="updateColumn" @open-item-drawer="openItemDrawer" />
                    </template>
                </draggable>
                <Button variant="outline" class="h-12 self-start bg-primary/10 hover:bg-primary/20" @click="addColumn">
                    Add Column
                </Button>
            </div>
        </CardContent>
        <EditItem v-if="selectedItem" v-model:open="isDrawerOpen" :item="selectedItem" @close="closeItemDrawer"
            @update="updateItem" />
        <EditCard v-if="selectedColumn" v-model:open="isColumnDrawerOpen" :column="selectedColumn"
            @close="closeColumnDrawer" @update="updateColumn" />
    </Card>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { collection, doc, addDoc, updateDoc, onSnapshot, query, where, getDoc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '@/firebase';
import { useStore } from 'vuex';
import { toast } from 'vue-sonner';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { XMarkIcon, CogIcon } from '@heroicons/vue/24/solid';
import SettingsComponent from '@/components/authenticated/admin/kanban/components/SettingsComponent.vue';
import CardComponent from '@/components/authenticated/admin/kanban/components/CardComponent.vue';
import EditItem from '@/components/authenticated/admin/kanban/components/EditItem.vue';
import EditCard from '@/components/authenticated/admin/kanban/components/EditCard.vue';
import draggable from 'vuedraggable';

const store = useStore();
const user = computed(() => store.getters.user);

const showSettings = ref(false);
const boardSettings = ref({
    tags: [
        { name: 'Important', color: '#ff0000' },
        { name: 'Urgent', color: '#ffa500' },
        { name: 'In Progress', color: '#0000ff' },
        { name: 'Completed', color: '#008000' },
    ],
    allowDragDrop: true,
    showDueDates: false,
    colorTheme: 'system',
});

const columns = ref([]);
const boards = ref([]);
const selectedBoard = ref(null);
const boardLoaded = ref(false);

const inviteUsername = ref('');
const isDrawerOpen = ref(false);
const isColumnDrawerOpen = ref(false);
const selectedItem = ref(null);
const selectedColumn = ref(null);

const columnColors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-pink-100'];

const boardName = ref('');

onMounted(async () => {
    await loadBoards();
    await loadLastOpenedBoard();
});

const loadBoards = async () => {
    if (!user.value || !user.value.uid) {
        console.error('User not authenticated');
        return;
    }
    const boardsQuery = query(collection(firestore, 'kanban'), where('users', 'array-contains', user.value.uid));
    onSnapshot(boardsQuery, (snapshot) => {
        boards.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
};

const loadLastOpenedBoard = async () => {
    if (!user.value || !user.value.uid) {
        console.error('User not authenticated');
        return;
    }
    const userDocRef = doc(firestore, 'users', user.value.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists() && userDoc.data().state && userDoc.data().state.kanban) {
        selectedBoard.value = userDoc.data().state.kanban;
        await loadBoard();
    }
};

const loadBoard = async () => {
    if (!selectedBoard.value) return;

    const boardRef = doc(firestore, 'kanban', selectedBoard.value);
    onSnapshot(boardRef, (doc) => {
        if (doc.exists()) {
            const data = doc.data();
            columns.value = data.columns;
            boardSettings.value = data.settings;
            boardName.value = data.name;
            boardLoaded.value = true;
            saveLastOpenedBoard();
        }
    });
};

const saveLastOpenedBoard = async () => {
    if (!user.value || !user.value.uid) {
        console.error('User not authenticated');
        return;
    }
    const userDocRef = doc(firestore, 'users', user.value.uid);
    await setDoc(userDocRef, { state: { kanban: selectedBoard.value } }, { merge: true });
};

const updateBoardName = async () => {
    if (!selectedBoard.value) return;

    try {
        await updateDoc(doc(firestore, 'kanban', selectedBoard.value), {
            name: boardName.value
        });
        toast.success('Board name updated');
    } catch (error) {
        console.error('Error updating board name:', error);
        toast.error('Failed to update board name');
    }
};

const createBoard = async (type) => {
    if (!user.value || !user.value.uid) {
        console.error('User not authenticated');
        return;
    }
    const newBoard = {
        name: type === 'example' ? 'Example Board' : 'New Board',
        createdBy: user.value.uid,
        users: [user.value.uid],
        columns: type === 'example' ? [
            { id: 1, title: 'To Do', items: [], color: columnColors[0] },
            { id: 2, title: 'In Progress', items: [], color: columnColors[1] },
            { id: 3, title: 'Done', items: [], color: columnColors[2] },
        ] : [],
        settings: boardSettings.value,
    };

    try {
        const docRef = await addDoc(collection(firestore, 'kanban'), newBoard);
        selectedBoard.value = docRef.id;
        await loadBoard();
    } catch (error) {
        console.error('Error creating board:', error);
        toast.error('Failed to create board');
    }
};

const updateBoard = async () => {
    if (!selectedBoard.value) return;

    try {
        await updateDoc(doc(firestore, 'kanban', selectedBoard.value), {
            columns: columns.value,
            settings: boardSettings.value,
        });
    } catch (error) {
        console.error('Error updating board:', error);
        toast.error('Failed to update board');
    }
};

const addColumn = async () => {
    const newColumn = {
        id: Date.now(),
        title: 'New Column',
        items: [],
        color: columnColors[columns.value.length % columnColors.length],
    };
    columns.value.push(newColumn);
    await updateBoard();
};

const removeColumn = async (columnId) => {
    columns.value = columns.value.filter(col => col.id !== columnId);
    await updateBoard();
};

const addItem = async (columnId) => {
    const column = columns.value.find(col => col.id === columnId);
    if (column) {
        const newItem = {
            id: Date.now(),
            title: 'New Item',
            description: '',
            tags: [],
            dueDate: '',
            assignedUsers: [],
            todoList: [],
        };
        column.items.push(newItem);
        await updateBoard();
    }
};

const inviteUser = async () => {
    if (inviteUsername.value.trim()) {
        // Here you would typically check if the user exists and add them to the board's users array
        // For simplicity, we'll just show a toast
        toast.success(`Invitation sent to ${inviteUsername.value}`);
        inviteUsername.value = '';
    } else {
        toast.error('Please enter a valid username');
    }
};

const updateSettings = async (newSettings) => {
    boardSettings.value = newSettings;
    await updateBoard();
    applySettings();
};

const applySettings = () => {
    document.documentElement.classList.toggle('dark', boardSettings.value.colorTheme === 'dark');
};

const openItemDrawer = (item) => {
    selectedItem.value = item;
    isDrawerOpen.value = true;
};

const closeItemDrawer = () => {
    selectedItem.value = null;
    isDrawerOpen.value = false;
};

const updateItem = async (updatedItem) => {
    const columnIndex = columns.value.findIndex(col => col.items.some(item => item.id === updatedItem.id));
    if (columnIndex !== -1) {
        const itemIndex = columns.value[columnIndex].items.findIndex(item => item.id === updatedItem.id);
        columns.value[columnIndex].items[itemIndex] = updatedItem;
        await updateBoard();
    }
};

const updateColumn = async (updatedColumn) => {
    const index = columns.value.findIndex(col => col.id === updatedColumn.id);
    if (index !== -1) {
        columns.value[index] = updatedColumn;
        await updateBoard();
    }
};

watch(() => boardSettings.value.colorTheme, applySettings);

// Watch for changes in columns and update Firestore
watch(columns, async () => {
    await updateBoard();
}, { deep: true });
</script>