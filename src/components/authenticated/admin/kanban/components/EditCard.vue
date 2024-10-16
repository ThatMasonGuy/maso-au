<template>
    <Drawer @close="$emit('close')">
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Edit Column</DrawerTitle>
            </DrawerHeader>
            <DrawerDescription>
                <!-- Add form fields for editing column properties -->
            </DrawerDescription>
            <Button @click="saveChanges">Save Changes</Button>
        </DrawerContent>
    </Drawer>
</template>

<script setup>
import { ref } from 'vue';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

const props = defineProps(['open', 'column']);
const emit = defineEmits(['update:open', 'close', 'update']);

const editedColumn = ref({ ...props.column });

const saveChanges = () => {
    emit('update', editedColumn.value);
    emit('close');
};
</script>