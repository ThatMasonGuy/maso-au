<template>
    <div class="tree-view">
        <div v-for="(value, key) in data" :key="key" class="tree-item">
            <div @click="toggle(key)" class="tree-item-header">
                <span v-if="isObject(value)" class="toggle-icon">{{ expanded[key] ? '▼' : '▶' }}</span>
                <span>{{ key }}</span>
            </div>
            <div v-if="isObject(value) && expanded[key]" class="tree-item-children ml-4">
                <Tree :data="value" />
            </div>
            <div v-else-if="!isObject(value)" class="tree-item-value ml-4">
                {{ value }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const expanded = reactive({});

const toggle = (key) => {
    expanded[key] = !expanded[key];
};

const isObject = (value) => {
    return typeof value === 'object' && value !== null;
};
</script>

<style scoped>
.tree-view {
    font-family: monospace;
}

.tree-item-header {
    cursor: pointer;
    user-select: none;
}

.toggle-icon {
    display: inline-block;
    width: 20px;
}
</style>