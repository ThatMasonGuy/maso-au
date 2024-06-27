<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AdminSidebar class="shadow-2xl" />
        <div class="flex flex-col flex-1 px-4 py-6">
            <div class="flex items-center justify-between mb-6">
                <h1 class="text-3xl font-semibold text-gray-700">Edit Course</h1>
                <Button @click="navigateToSessions" class="bg-green-600 hover:bg-green-700 text-white">
                    Edit Sessions
                </Button>
            </div>

            <div v-if="course"
                class="relative flex-1 bg-white rounded-lg shadow-md p-4 backdrop-blur-sm mx-auto max-w-5xl">
                <form @submit.prevent="updateCourse" class="space-y-4">
                    <div class="flex space-x-4">
                        <div class="w-1/3">
                            <label class="block text-sm font-medium">Course Image</label>
                            <div :class="[
                    'mt-1 flex justify-center items-center border-2 border-gray-300 border-dashed rounded-md cursor-pointer overflow-hidden relative',
                    { 'border-none': imagePreview || course.image }
                ]" @dragover.prevent @drop.prevent="handleDrop" @click="triggerFileInput">
                                <div v-if="!imagePreview && !course.image" class="space-y-1 text-center mx-6 mt-5 mb-6">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                        viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                        <p class="text-xs font-normal text-gray-500">
                                            <a class="font-medium text-indigo-600">Upload a file</a> or drag and drop
                                            JPG, JPEG, PNG, WEBP up to 5MB
                                        </p>
                                        <input id="file-upload-hidden" ref="fileInput" name="file-upload-hidden"
                                            type="file" class="sr-only" @change="handleFileUpload"
                                            accept=".jpg,.jpeg,.png,.webp" />
                                    </div>
                                </div>
                                <div v-else class="relative w-full h-full">
                                    <img :src="imagePreview || course.image" alt="Course image preview"
                                        class="w-full h-full object-cover rounded-md" />
                                    <div class="absolute top-0 right-0 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                                        @click.stop="removeImage" @mouseover="isRemoveHover = true"
                                        @mouseleave="isRemoveHover = false" :class="{ 'bg-red-500': isRemoveHover }">
                                        X
                                    </div>
                                </div>
                            </div>
                            <p v-if="imageError" class="text-xs text-red-500 mt-1">{{ imageError }}</p>
                        </div>
                        <div class="flex-1">
                            <Label class="block text-sm font-medium">Course Title</Label>
                            <Input v-model="title" type="text"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'focus:ring-red-500 border-red-500': showTitleError && !isTitleValid }"
                                required @input="validateTitle" @blur="showTitleError = true" />
                            <p class="text-xs text-gray-500 mt-1">Course ID: {{ courseId }}</p>
                            <p v-if="showTitleError && !isTitleValid" class="text-xs text-red-500 mt-1">
                                Title must be at least 4 characters long and contain only letters, numbers, and dashes.
                            </p>
                            <p v-if="showTitleError && isTitleTaken" class="text-xs text-red-500 mt-1">
                                This course title is already taken.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Label class="block text-sm font-medium mb-2">Description</Label>
                        <QuillEditor v-model:content="description" toolbar="essential" contentType="html"
                            class="rows-4 rounded-md" />
                    </div>
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <Label class="block text-sm mb-1 font-medium">Course Categories</Label>
                            <TagsInput v-model="modelValue" class="px-0 gap-0 w-full">
                                <div class="flex gap-2 flex-wrap items-center px-3">
                                    <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
                                        <TagsInputItemText>{{ capitalize(item) }}</TagsInputItemText>
                                        <TagsInputItemDelete />
                                    </TagsInputItem>
                                </div>

                                <ComboboxRoot v-model:open="open" v-model:searchTerm="searchTerm" class="w-full"
                                    @click-outside="open = false">
                                    <ComboboxAnchor as-child>
                                        <ComboboxInput placeholder="Select Category..." as-child>
                                            <TagsInputInput class="w-full px-3"
                                                :class="modelValue.length > 0 ? 'mt-2' : ''"
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
                                                    {{ capitalize(category) }}
                                                </CommandItem>
                                            </CommandGroup>
                                        </CommandList>
                                    </ComboboxPortal>
                                </ComboboxRoot>
                            </TagsInput>
                        </div>
                        <div class="w-1/3">
                            <Label class="block text-sm mb-1 font-medium">Course Length</Label>
                            <div class="flex items-center space-x-2">
                                <Input v-model="length.value" type="number" class="w-[60px] h-[34px]"
                                    :class="{ 'focus:ring-red-500 border-red-500': showLengthError && !isLengthValid }"
                                    @input="validateLength" @blur="showLengthError = true" />
                                <Select v-model="length.unit">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Filter by course type" class="text-gray-500">
                                            {{ length.unit.charAt(0).toUpperCase() + length.unit.slice(1) }}
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem v-for="option in availableUnits" :key="option.value"
                                            :value="option.value">
                                            {{ option.label }}
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <Button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            :disabled="!isFormValid">
                            Update Course
                        </Button>
                    </div>
                </form>
            </div>
            <div v-else class="text-center mt-8">
                <p class="text-xl font-semibold">Loading course data...</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { collection, getDoc, updateDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firestore, storage } from '@/firebase';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'vue-sonner';
import AdminSidebar from '@/components/authenticated/learning/admin/AdminSidebar.vue';
import { ComboboxAnchor, ComboboxInput, ComboboxPortal, ComboboxRoot } from 'radix-vue';
import { CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input';
import { onClickOutside } from '@vueuse/core';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const route = useRoute();
const router = useRouter();
const courseId = route.params.id;

const course = ref(null);
const title = ref('');
const description = ref('');
const imageFile = ref(null);
const imagePreview = ref(null);
const imageError = ref('');
const modelValue = ref([]);
const open = ref(false);
const searchTerm = ref('');
const length = ref({ value: 1, unit: 'Days' });
const isTitleValid = ref(true);
const isTitleTaken = ref(false);
const showTitleError = ref(false);
const showLengthError = ref(false);
const isRemoveHover = ref(false);

const coursesCollection = collection(firestore, 'learningManagementSystem/tempestStudios/courses');
const categories = ref([]);

const fetchCourse = async () => {
    const docRef = doc(coursesCollection, courseId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        course.value = { id: docSnap.id, ...docSnap.data() };
        title.value = course.value.title;
        description.value = course.value.description;
        modelValue.value = course.value.courseCategory;
        length.value = course.value.length;
        imagePreview.value = course.value.image;
    } else {
        console.log("No such document!");
        toast.error("Course not found");
        router.push('/admin/courses'); // Redirect to courses list
    }
};

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

onMounted(() => {
    fetchCourse();
    fetchCategories();
});

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

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const validateTitle = async () => {
    const titleRegex = /^(?!.*\s$)(?!\s)[a-zA-Z0-9- ]{4,}$/;
    isTitleValid.value = titleRegex.test(title.value);

    if (isTitleValid.value && title.value !== course.value.title) {
        const q = query(coursesCollection, where('title', '==', title.value));
        const querySnapshot = await getDocs(q);
        isTitleTaken.value = !querySnapshot.empty;
    } else {
        isTitleTaken.value = false;
    }
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024 && ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
        imageError.value = null;
        imageFile.value = file;
    } else {
        imageError.value = 'Invalid file. Please upload a JPG, JPEG, PNG, or WEBP file up to 5MB.';
    }
};

const handleDrop = (event) => {
    const file = event.dataTransfer.files[0];
    handleFileUpload({ target: { files: [file] } });
};

const triggerFileInput = () => {
    document.getElementById('file-upload-hidden').click();
};

const removeImage = () => {
    imagePreview.value = null;
    imageFile.value = null;
    document.getElementById('file-upload-hidden').value = null;
};

const availableUnits = [
    { label: 'Half-Days', value: 'Half-Days' },
    { label: 'Days', value: 'Days' },
    { label: 'Weeks', value: 'Weeks' },
    { label: 'Months', value: 'Months' }
];

const validateLength = () => {
    length.value.value = length.value.value.replace(/[^0-9]/g, '');
    if (length.value.value === '') {
        length.value.value = 1;
    }
};

const isLengthValid = computed(() => {
    return length.value.value !== '' && parseInt(length.value.value) > 0;
});

const isFormValid = computed(() => {
    return (
        isTitleValid.value &&
        !isTitleTaken.value &&
        description.value.trim() !== '' &&
        modelValue.value.length > 0 &&
        isLengthValid.value
    );
});

const updateCourse = async () => {
    if (!isFormValid.value) return;

    let imageUrl = course.value.image;
    if (imageFile.value) {
        const imageRef = storageRef(storage, `company-specific/tempest-studios/learning/courses/images/${courseId}`);
        await uploadBytes(imageRef, imageFile.value);
        imageUrl = await getDownloadURL(imageRef);
    }

    const updatedCourseData = {
        title: title.value,
        description: description.value,
        image: imageUrl,
        length: {
            value: parseInt(length.value.value),
            unit: length.value.unit
        },
        courseCategory: modelValue.value,
    };

    try {
        const courseRef = doc(coursesCollection, courseId);
        await updateDoc(courseRef, updatedCourseData);

        toast.success('Course updated successfully!');
        router.push('/admin/courses'); // Redirect to courses list after update
    } catch (error) {
        console.error('Error updating document: ', error);
        toast.error('Failed to update course. Please try again.');
    }
};

const navigateToSessions = () => {
    router.push(`/admin/courses/${courseId}/sessions`);
};

</script>

<style scoped>
.hover\:bg-red-500:hover {
    background-color: #f56565;
}
</style>