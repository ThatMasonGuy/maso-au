<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <Sidebar class="shadow-2xl" />
        <div class="flex flex-col flex-1 px-4 py-6">
            <div class="flex items-center justify-between mb-6">
                <h1 class="text-3xl font-semibold text-gray-700">Learning Management System</h1>
            </div>

            <div class="relative flex-1 bg-white rounded-lg shadow-md p-4 backdrop-blur-sm">
                <h2 class="text-xl font-semibold text-gray-700 mb-4">Add New Course</h2>
                <form @submit.prevent="addCourse" class="space-y-4">
                    <div>
                        <Label class="block text-sm font-medium">Course Title</Label>
                        <Input v-model="title" type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required />
                    </div>
                    <div>
                        <Label class="block text-sm font-medium">Description</Label>
                        <Textarea v-model="description"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required></Textarea>
                    </div>
                    <div>
                        <Label class="block text-sm font-medium">Image URL</Label>
                        <Input v-model="image" type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required />
                    </div>
                    <div>
                        <Label class="block text-sm font-medium">Length</Label>
                        <Input v-model="length" type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required />
                    </div>
                    <div>
                        <Label class="block text-sm font-medium">Course Categories</Label>
                        <TagsInput v-model="modelValue" class="px-0 gap-0 w-80">
                            <div class="flex gap-2 flex-wrap items-center px-3">
                                <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
                                    <TagsInputItemText />
                                    <TagsInputItemDelete />
                                </TagsInputItem>
                            </div>

                            <ComboboxRoot v-model:open="open" v-model:searchTerm="searchTerm" class="w-full"
                                @click-outside="open = false">
                                <ComboboxAnchor as-child>
                                    <ComboboxInput placeholder="Select Category..." as-child>
                                        <TagsInputInput class="w-full px-3" :class="modelValue.length > 0 ? 'mt-2' : ''"
                                            @keydown.enter.prevent="addNewCategory" v-model="searchTerm" />
                                    </ComboboxInput>
                                </ComboboxAnchor>

                                <ComboboxPortal>
                                    <CommandList position="popper"
                                        class="w-[--radix-popper-anchor-width] rounded-md mt-2 border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                                        <CommandEmpty />
                                        <CommandGroup>
                                            <CommandItem v-for="category in filteredCategories" :key="category"
                                                :value="category" @select="selectCategory(category)">
                                                {{ category.charAt(0).toUpperCase() + category.slice(1) }}
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </ComboboxPortal>
                            </ComboboxRoot>
                        </TagsInput>
                    </div>
                    <div class="flex justify-end">
                        <Button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add
                            Course</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import Sidebar from '@/components/authenticated/learning/Sidebar.vue';
import { ComboboxAnchor, ComboboxInput, ComboboxPortal, ComboboxRoot } from 'radix-vue';
import { CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input';
import { onClickOutside } from '@vueuse/core';

const title = ref('');
const description = ref('');
const image = ref('');
const length = ref('');
const modelValue = ref([]);
const open = ref(false);
const searchTerm = ref('');

const coursesCollection = collection(firestore, 'learningManagementSystem/tempestStudios/courses');
const categories = ref([]);

const fetchCategories = async () => {
    const snapshot = await getDocs(coursesCollection);
    const allCategories = [];
    snapshot.forEach(doc => {
        const courseCategories = doc.data().courseCategory;
        if (Array.isArray(courseCategories)) {
            allCategories.push(...courseCategories);
        }
    });
    categories.value = Array.from(new Set(allCategories));
};

onMounted(fetchCategories);

const filteredCategories = computed(() => {
    return categories.value.filter(category => !modelValue.value.includes(category));
});

const selectCategory = (category) => {
    modelValue.value.push(category.toLowerCase());
    searchTerm.value = '';
    open.value = false;
};

const addNewCategory = () => {
    if (searchTerm.value.trim() !== '' && !modelValue.value.includes(searchTerm.value.toLowerCase())) {
        modelValue.value.push(searchTerm.value.trim().toLowerCase());
        searchTerm.value = '';
    }
};

onClickOutside(() => {
    open.value = false;
});

const addCourse = async () => {
    const courseData = {
        title: title.value,
        description: description.value,
        image: image.value,
        length: length.value,
        courseCategory: modelValue.value,
    };
    try {
        await addDoc(coursesCollection, courseData);
        title.value = '';
        description.value = '';
        image.value = '';
        length.value = '';
        modelValue.value = [];
        toast.success('Course added successfully!');
    } catch (error) {
        console.error('Error adding document: ', error);
        toast.error('Failed to add course. Please try again.');
    }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>