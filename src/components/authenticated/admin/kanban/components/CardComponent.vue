<template>
    <div :class="['bg-card rounded-lg shadow-lg p-4 w-80 flex flex-col', column.color]">
        <div class="flex justify-between items-center mb-4 bg-secondary/20 p-2 rounded group">
            <Input v-model="column.title" @input="updateColumn"
                class="font-semibold text-lg bg-transparent border-none focus:ring-0" />
            <Button variant="ghost" size="icon" @click="removeColumn"
                class="text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <XMarkIcon class="h-5 w-5" />
            </Button>
        </div>
        <div class="flex-grow space-y-2 overflow-y-auto">
            <draggable v-model="column.items" group="items" @start="drag = true" @end="drag = false" item-key="id">
                <template #item="{ element: item }">
                    <ItemComponent :item="item" @open-item-drawer="openItemDrawer" />
                </template>
            </draggable>
        </div>
        <Button variant="outline" size="sm" class="mt-4 w-full bg-primary/10 hover:bg-primary/20" @click="addItem">
            Add Item
        </Button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import draggable from 'vuedraggable';
import ItemComponent from '@/components/authenticated/admin/kanban/components/ItemComponent.vue';

const props = defineProps({
    column: Object
});

const emit = defineEmits(['remove-column', 'add-item', 'update-column', 'open-item-drawer']);

const updateColumn = () => {
    emit('update-column', props.column);
};

const removeColumn = () => {
    emit('remove-column', props.column.id);
};

const addItem = () => {
    emit('add-item', props.column.id);
};

const openItemDrawer = (item) => {
    emit('open-item-drawer', item);
};
</script>