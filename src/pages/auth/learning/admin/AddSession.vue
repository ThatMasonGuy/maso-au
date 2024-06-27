<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <Sidebar class="shadow-2xl" />
        <div class="flex flex-col flex-1 px-4 py-6">
            <h1 class="text-3xl font-semibold text-gray-700 mb-6">Course Management</h1>

            <!-- Filters and Search -->
            <div class="flex justify-between items-center mb-6">
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

            <!-- Course Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 min-h-[300px]">
                <div v-for="course in filteredCourses" :key="course.courseId" @click="toggleCourse(course)"
                    class="bg-white max-w-72 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer relative group overflow-hidden">
                    <div class="relative h-48">
                        <img :src="course.image" :alt="course.title"
                            class="min-w-full h-full object-fill object-center overflow-hidden">
                        <div
                            class="absolute inset-x-0 bottom-0 h-[70%] group-hover:h-[90%] bg-gradient-to-b from-transparent via-transparent to-90% to-white transition-all ease-in-out duration-300">
                        </div>
                    </div>
                    <div class="p-4 relative z-10 -mt-8 group-hover:-mt-12 transition-all duration-300">
                        <h3 class="text-lg font-semibold mb-2">{{ course.title }}</h3>
                        <div class="text-sm text-gray-600 mb-2 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300" v-html="course.description"></div>
                    </div>
                    <div class="absolute bottom-4 inset-x-4 flex justify-between items-center text-sm text-gray-500">
                            <span>{{ course.length.value }} {{ course.length.value === 1 ? course.length.unit.slice(0, -1) : course.length.unit }}</span>
                            <span class="truncate ml-2 text-right">{{ capitalizeCategories(course.courseCategory) }}</span>
                    </div>
                    <Button
                        class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        variant="secondary" size="sm">
                        View live
                    </Button>
                </div>
            </div>

            <!-- Selected Course Details and Session Management -->
            <Transition name="slide-fade">
                <div v-if="selectedCourse" class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-4">{{ selectedCourse.title }}</h2>

                    <!-- Existing Sessions -->
                    <div v-if="selectedCourse.sessions && selectedCourse.sessions.length > 0" class="mb-6">
                        <h3 class="text-xl font-semibold mb-2">Existing Sessions</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Start Date</TableHead>
                                    <TableHead>End Date</TableHead>
                                    <TableHead>Capacity</TableHead>
                                    <TableHead>Enrolled</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="session in selectedCourse.sessions" :key="session.id">
                                    <TableCell>{{ formatDate(session.startDate) }}</TableCell>
                                    <TableCell>{{ formatDate(session.endDate) }}</TableCell>
                                    <TableCell>{{ session.capacity }}</TableCell>
                                    <TableCell>{{ session.enrolled }}</TableCell>
                                    <TableCell>
                                        <Button variant="outline" size="sm" @click="editSession(session)">Edit</Button>
                                        <Button variant="destructive" size="sm" class="ml-2"
                                            @click="deleteSession(session)">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <!-- Add New Session Form -->
                    <div>
                        <h3 class="text-xl font-semibold mb-2">Add New Session</h3>
                        <form @submit.prevent="addSession" class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <Label for="startDate">Start Date</Label>
                                    <Input id="startDate" v-model="newSession.startDate" type="date" required />
                                </div>
                                <div>
                                    <Label for="endDate">End Date</Label>
                                    <Input id="endDate" v-model="newSession.endDate" type="date" required />
                                </div>
                            </div>
                            <div>
                                <Label for="capacity">Capacity</Label>
                                <Input id="capacity" v-model="newSession.capacity" type="number" min="1" required />
                            </div>
                            <Button type="submit">Add Session</Button>
                        </form>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Sidebar from '@/components/authenticated/learning/Sidebar.vue';
import { toast } from 'vue-sonner';

const courses = ref([]);
const selectedCourse = ref(null);
const newSession = ref({
    startDate: '',
    endDate: '',
    capacity: 1,
    enrolled: 0
});
const selectedCategory = ref('all');
const searchQuery = ref('');

const coursesCollection = collection(firestore, 'learningManagementSystem/tempestStudios/courses');

const capitalizeCategories = (categories) => {
    return categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ');
}

onMounted(async () => {
    const snapshot = await getDocs(coursesCollection);
    courses.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
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

const toggleCourse = (course) => {
    if (selectedCourse.value && selectedCourse.value.id === course.id) {
        selectedCourse.value = null;
    } else {
        selectedCourse.value = course;
    }
};

watch([selectedCategory, searchQuery], () => {
    selectedCourse.value = null;
});

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const addSession = async () => {
    if (!selectedCourse.value) return;

    const sessionData = {
        ...newSession.value,
        courseId: selectedCourse.value.courseId
    };

    try {
        const sessionsCollection = collection(firestore, `learningManagementSystem/tempestStudios/courses/${selectedCourse.value.id}/sessions`);
        await addDoc(sessionsCollection, sessionData);

        // Update local state
        if (!selectedCourse.value.sessions) {
            selectedCourse.value.sessions = [];
        }
        selectedCourse.value.sessions.push(sessionData);

        // Reset form
        newSession.value = { startDate: '', endDate: '', capacity: 1, enrolled: 0 };

        toast.success('Session added successfully!');
    } catch (error) {
        console.error('Error adding session: ', error);
        toast.error('Failed to add session. Please try again.');
    }
};

const editSession = (session) => {
    // Implement edit functionality
    console.log('Edit session:', session);
    // You might want to open a modal or navigate to an edit page
};

const deleteSession = async (session) => {
    if (!selectedCourse.value) return;

    try {
        const sessionRef = doc(firestore, `learningManagementSystem/tempestStudios/courses/${selectedCourse.value.id}/sessions/${session.id}`);
        await deleteDoc(sessionRef);

        // Update local state
        selectedCourse.value.sessions = selectedCourse.value.sessions.filter(s => s.id !== session.id);

        toast.success('Session deleted successfully!');
    } catch (error) {
        console.error('Error deleting session: ', error);
        toast.error('Failed to delete session. Please try again.');
    }
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>