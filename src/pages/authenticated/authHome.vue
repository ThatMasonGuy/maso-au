<template>
    <div
        class="p-5 pt-12 bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600 min-h-[--adjusted-height]">
        <div class="pt-8 mx-auto">
            <div class="flex flex-wrap justify-center gap-6">
                <div v-for="component in components" :v-if="component.active" :key="component.id"
                    class="bg-gray-600 shadow-md rounded-lg">
                    <component :is="component.name" :component-id="component.id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PlaceholderComponent from '@/components/authenticated/functions/PlaceholderComponent.vue'
import UrlShorten from '@/components/authenticated/functions/UrlShorten.vue'

const components = [
    { id: 1, name: UrlShorten, active: true },
    { id: 2, name: PlaceholderComponent, active: true },
    { id: 3, name: PlaceholderComponent, active: true },
    { id: 4, name: PlaceholderComponent, active: true },
    { id: 5, name: PlaceholderComponent, active: true },
    { id: 6, name: PlaceholderComponent, active: true },
    { id: 7, name: PlaceholderComponent, active: true },
    { id: 8, name: PlaceholderComponent, active: true },
];
</script>

<style scoped>
/* Add any additional styles here */
</style>