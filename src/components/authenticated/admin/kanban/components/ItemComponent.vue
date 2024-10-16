<template>
    <div :class="['bg-background rounded p-3 shadow cursor-pointer', item.color]" @click="openItemDrawer(item)">
        <div class="font-medium">{{ item.title }}</div>
        <div class="text-sm text-gray-500">{{ item.description }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
});

const emit = defineEmits(['open-item-drawer']);

const openItemDrawer = () => {
    emit('open-item-drawer', props.item);
};
</script>