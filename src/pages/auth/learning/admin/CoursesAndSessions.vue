<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AdminSidebar class="shadow-2xl" />
        <div class="flex flex-col flex-1 px-4 py-6">
            <h1 class="text-3xl font-semibold text-gray-700 mb-6">Courses and Sessions Management</h1>

            <Tabs v-model="activeTab" class="mb-6" @update:modelValue="updateHash">
                <TabsList>
                    <TabsTrigger value="upcomingsessions">Upcoming Sessions</TabsTrigger>
                    <TabsTrigger value="editcourses">Edit Courses</TabsTrigger>
                </TabsList>

                <!-- Upcoming Sessions Table -->
                <TabsContent value="upcomingsessions">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h2 class="text-2xl font-semibold">Upcoming Sessions</h2>
                        <div class="flex mt-4 space-x-4 justify-between">
                            <Select v-model="selectedCategory">
                                <SelectTrigger class="w-[180px]">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem v-for="category in uniqueCategories" :key="category" :value="category">
                                        {{ category }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Input v-model="searchQuery" placeholder="Search courses..." class="max-w-[300px]" />
                        </div>
                        <Table class="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Course</TableHead>
                                    <TableHead>Start Date</TableHead>
                                    <TableHead>End Date</TableHead>
                                    <TableHead>Capacity</TableHead>
                                    <TableHead>Enrolled</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-if="upcomingSessions.length === 0">
                                    <TableCell colspan="6" class="text-center py-4">No upcoming sessions found.
                                    </TableCell>
                                </TableRow>
                                <TableRow v-for="session in upcomingSessions" :key="session.id">
                                    <TableCell>{{ session.courseTitle }}</TableCell>
                                    <TableCell>{{ formatDate(session.startDate) }}</TableCell>
                                    <TableCell>{{ formatDate(session.endDate) }}</TableCell>
                                    <TableCell>{{ session.capacity }}</TableCell>
                                    <TableCell>{{ session.enrolled }}</TableCell>
                                    <TableCell>
                                        <Button variant="outline" size="sm"
                                            @click="openSessionManagement(session)">Manage</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </TabsContent>

                <!-- All Courses Grid -->
                <TabsContent value="editcourses">
                    <div class="bg-white rounded-lg shadow-md py-6">
                        <div class="flex items-center justify-between px-6">
                            <h2 class="text-2xl font-semibold">Edit Courses</h2>
                            <DropdownButton buttonText="Add Course" :dropdownOptions="[
                { label: 'Bulk import', value: 'bulk-import' },
            ]" @optionSelected="handleOptionSelected" @buttonClick="handleMainButtonClick" />
                        </div>
                        <div class="flex mt-4 space-x-4 justify-between px-6">
                            <Select v-model="selectedCategory">
                                <SelectTrigger class="w-[180px]">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem v-for="category in uniqueCategories" :key="category" :value="category">
                                        {{ category }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Input v-model="searchQuery" placeholder="Search courses..." class="max-w-[300px]" />
                        </div>
                        <div class="flex md:justify-start sm:flex-wrap justify-center mt-6">
                            <div
                                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7 5xl:grid-cols-8 6xl:grid-cols-9 gap-6 mx-6">
                                <!-- Course Grid -->
                                <div v-for="course in filteredCourses" :key="course.courseId"
                                    @click="navigateToEditCourse(course)"
                                    class="bg-white w-72 h-[270px] rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer relative group overflow-hidden">
                                    <div class="relative">
                                        <img :src="course.image" :alt="course.title"
                                            class="min-w-full h-[172px] object-cover object-center">
                                        <div
                                            class="absolute inset-x-0 bottom-0 h-[70%] group-hover:h-[90%] bg-gradient-to-b from-transparent via-transparent to-90% to-white transition-all ease-in-out duration-300">
                                        </div>
                                    </div>
                                    <div
                                        class="p-4 relative z-10 flex flex-col -mt-8 group-hover:-mt-12 transition-all duration-300">
                                        <h3 class="text-lg font-semibold mb-2">{{ course.title }}</h3>
                                        <div class="text-sm line-clamp-2 group-hover:line-clamp-3 text-gray-600 mb-2 h-9 overflow-hidden group-hover:h-[50px] transition-all duration-300"
                                            v-html="course.description"></div>
                                    </div>
                                    <div
                                        class="absolute bottom-4 inset-x-4 flex justify-between items-center text-sm text-gray-500">
                                        <span>{{ course.length.value }} {{ course.length.value === 1 ?
                course.length.unit.slice(0, -1) : course.length.unit }}</span>
                                        <span class="truncate ml-2 text-right">{{
                capitalizeCategories(course.courseCategory) }}</span>
                                    </div>
                                    <Button
                                        class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        variant="secondary" size="sm" @click="viewLiveCourse(course)">
                                        View live
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AdminSidebar from '@/components/authenticated/learning/admin/AdminSidebar.vue';
import DropdownButton from '@/components/common/buttons/DropdownButton.vue';
import router from '@/router';
import { useHashNavigation } from '@/utils/useHashNavigation';

const courses = ref([]);
const upcomingSessions = ref([]);
const selectedCategory = ref('all');
const searchQuery = ref('');
const { activeTab, updateHash } = useHashNavigation('upcomingsessions', ['editcourses', 'upcomingsessions']);

const coursesCollection = collection(firestore, 'learningManagementSystem/tempestStudios/courses');

onMounted(async () => {
    try {
        const snapshot = await getDocs(coursesCollection);
        courses.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
        console.error('Error fetching courses:', error);
    } finally {
        updateHash(activeTab.value);
    }
});

const navigateToEditCourse = (course) => {
    router.push({
        name: 'LMS Admin - Edit Course',
        params: { id: course.id },
    });
};

const handleOptionSelected = (option) => {
    if (option === 'bulk-import') {
        router.push('/auth/learning/admin/bulkimport');
    }
};

const handleMainButtonClick = () => {
  router.push('/auth/learning/admin/addcourse')
};

const viewLiveCourse = (course) => {
    console.log('Viewing live course:', course.title);
    router.push({ name: 'LMS Admin - Sessions', params: { id: course.id } });
};

const uniqueCategories = computed(() => {
    const categories = new Set();
    courses.value.forEach(course => {
        course.courseCategory.forEach(category => categories.add(category));
    });
    return Array.from(categories);
});

const filteredCourses = computed(() => {
    return courses.value.filter(course => {
        const categoryMatch = selectedCategory.value === 'all' || course.courseCategory.includes(selectedCategory.value);
        const searchMatch = course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        return categoryMatch && searchMatch;
    });
});

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const capitalizeCategories = (categories) => {
    return categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ');
};
</script>