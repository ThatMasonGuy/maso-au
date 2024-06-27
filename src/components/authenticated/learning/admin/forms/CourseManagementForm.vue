<template>
    <div class="space-y-6">
        <form @submit.prevent="saveCourse" class="space-y-4">
            <div>
                <Label for="title">Course Title</Label>
                <Input id="title" v-model="courseData.title" required />
            </div>
            <div>
                <Label for="description">Description</Label>
                <Textarea id="description" v-model="courseData.description" rows="3" required />
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <Label for="length">Course Length</Label>
                    <div class="flex items-center space-x-2">
                        <Input id="length" v-model="courseData.length.value" type="number" min="1" required
                            class="w-20" />
                        <Select v-model="courseData.length.unit">
                            <SelectTrigger>
                                <SelectValue placeholder="Unit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="days">Days</SelectItem>
                                <SelectItem value="weeks">Weeks</SelectItem>
                                <SelectItem value="months">Months</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div>
                    <Label for="category">Category</Label>
                    <Select v-model="courseData.category">
                        <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem v-for="category in categories" :key="category" :value="category">
                                {{ category }}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div class="flex justify-end space-x-2">
                <Button type="button" variant="outline" @click="$emit('close')">Cancel</Button>
                <Button type="submit">Save Course</Button>
            </div>
        </form>

        <div>
            <h3 class="text-lg font-semibold mb-2">Course Sessions</h3>
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
                    <TableRow v-for="session in courseData.sessions" :key="session.id">
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
            <Button @click="showAddSessionModal = true" class="mt-4">Add New Session</Button>
        </div>

        <Dialog v-model:open="showAddSessionModal">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Session</DialogTitle>
                </DialogHeader>
                <SessionManagementForm :session="{ courseTitle: courseData.title }" @close="showAddSessionModal = false"
                    @update="addNewSession" />
            </DialogContent>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'vue-sonner';
import SessionManagementForm from './SessionManagementForm.vue';

const props = defineProps({
    course: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['close', 'update']);

const courseData = ref({ ...props.course });
const showAddSessionModal = ref(false);
const categories = ref(['Web Development', 'Data Science', 'Mobile Development', 'DevOps', 'Design']); // Add more categories as needed

const saveCourse = async () => {
    try {
        // Here you would typically make an API call to update the course
        // For now, we'll just simulate it
        await new Promise(resolve => setTimeout(resolve, 1000));

        emit('update', courseData.value);
        toast.success('Course updated successfully');
        emit('close');
    } catch (error) {
        console.error('Error updating course:', error);
        toast.error('Failed to update course. Please try again.');
    }
};

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const editSession = (session) => {
    // Implement edit session logic
    console.log('Edit session:', session);
};

const deleteSession = (session) => {
    // Implement delete session logic
    console.log('Delete session:', session);
};

const addNewSession = (newSession) => {
    courseData.value.sessions.push(newSession);
    showAddSessionModal.value = false;
    toast.success('New session added successfully');
};

onMounted(() => {
    // Any initialization logic can go here
});
</script>