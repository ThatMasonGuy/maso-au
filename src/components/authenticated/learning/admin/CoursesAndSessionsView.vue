<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AdminSidebar class="shadow-2xl" />
        <div class="flex flex-col flex-1 px-4 py-6">
            <h1 class="text-3xl font-semibold text-gray-700 mb-6">Courses and Sessions Management</h1>

            <Tabs v-model="activeTab" class="mb-6">
                <TabsList>
                    <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
                    <TabsTrigger value="courses">All Courses</TabsTrigger>
                </TabsList>
            </Tabs>

            <!-- Upcoming Sessions Table -->
            <TabsContent value="sessions">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-4">Upcoming Sessions</h2>
                    <Table>
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
            <TabsContent value="courses">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-semibold">All Courses</h2>
                        <div class="flex space-x-4">
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
                            <Input v-model="searchQuery" placeholder="Search courses..." class="w-[300px]" />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div v-for="course in filteredCourses" :key="course.courseId"
                            @click="openCourseManagement(course)"
                            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative group overflow-hidden">
                            <div class="relative h-48">
                                <img :src="course.image" :alt="course.title"
                                    class="w-full h-full object-cover object-center">
                                <div
                                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-80 group-hover:h-full transition-all duration-300 ease-in-out backdrop-blur-sm">
                                </div>
                            </div>
                            <div class="p-4 relative z-10 -mt-8 group-hover:-mt-12 transition-all duration-300">
                                <h3 class="text-lg font-semibold mb-2">{{ course.title }}</h3>
                                <div class="text-sm text-gray-600 mb-2 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300"
                                    v-html="course.description"></div>
                            </div>
                            <div
                                class="absolute bottom-4 inset-x-4 flex justify-between items-center text-sm text-gray-500">
                                <span>{{ course.length.value }} {{ course.length.value === 1 ?
                course.length.unit.slice(0, -1) : course.length.unit }}</span>
                                <span class="truncate ml-2 text-right">{{ capitalizeCategories(course.courseCategory)
                                    }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>
        </div>

        <!-- Session Management Modal -->
        <Dialog v-model:open="isSessionModalOpen">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Manage Session</DialogTitle>
                </DialogHeader>
                <SessionManagementForm :session="selectedSession" @close="isSessionModalOpen = false" />
            </DialogContent>
        </Dialog>

        <!-- Course Management Modal -->
        <Dialog v-model:open="isCourseModalOpen">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Manage Course</DialogTitle>
                </DialogHeader>
                <CourseManagementForm :course="selectedCourse" @close="isCourseModalOpen = false" />
            </DialogContent>
        </Dialog>
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AdminSidebar from '@/components/authenticated/learning/admin/AdminSidebar.vue';
import SessionManagementForm from '@/components/authenticated/learning/admin/forms/SessionManagementForm.vue';
import CourseManagementForm from '@/components/authenticated/learning/admin/forms/CourseManagementForm.vue';

const activeTab = ref('sessions');
const courses = ref([]);
const upcomingSessions = ref([]);
const selectedCategory = ref('all');
const searchQuery = ref('');
const isSessionModalOpen = ref(false);
const isCourseModalOpen = ref(false);
const selectedSession = ref(null);
const selectedCourse = ref(null);

const coursesCollection = collection(firestore, 'learningManagementSystem/tempestStudios/courses');

onMounted(async () => {
    const snapshot = await getDocs(coursesCollection);
    courses.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    // Fetch upcoming sessions (you'll need to implement this based on your data structure)
    // upcomingSessions.value = await fetchUpcomingSessions();
});

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
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const capitalizeCategories = (categories) => {
    return categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ');
};

const openSessionManagement = (session) => {
    selectedSession.value = session;
    isSessionModalOpen.value = true;
};

const openCourseManagement = (course) => {
    selectedCourse.value = course;
    isCourseModalOpen.value = true;
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>