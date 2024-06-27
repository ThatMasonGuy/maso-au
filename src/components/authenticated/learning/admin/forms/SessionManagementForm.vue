<template>
    <form @submit.prevent="saveSession" class="space-y-4">
        <div>
            <Label for="courseTitle">Course Title</Label>
            <Input id="courseTitle" v-model="sessionData.courseTitle" disabled />
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div>
                <Label for="startDate">Start Date</Label>
                <Input id="startDate" v-model="sessionData.startDate" type="date" required />
            </div>
            <div>
                <Label for="endDate">End Date</Label>
                <Input id="endDate" v-model="sessionData.endDate" type="date" required />
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div>
                <Label for="capacity">Capacity</Label>
                <Input id="capacity" v-model="sessionData.capacity" type="number" min="1" required />
            </div>
            <div>
                <Label for="enrolled">Enrolled</Label>
                <Input id="enrolled" v-model="sessionData.enrolled" type="number" min="0" :max="sessionData.capacity"
                    required />
            </div>
        </div>
        <div>
            <Label for="status">Status</Label>
            <Select v-model="sessionData.status">
                <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div>
            <Label for="notes">Notes</Label>
            <Textarea id="notes" v-model="sessionData.notes" rows="3" />
        </div>
        <div class="flex justify-end space-x-2">
            <Button type="button" variant="outline" @click="$emit('close')">Cancel</Button>
            <Button type="submit">Save Changes</Button>
        </div>
    </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'vue-sonner';

const props = defineProps({
    session: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['close', 'update']);

const sessionData = ref({ ...props.session });

const saveSession = async () => {
    try {
        // Here you would typically make an API call to update the session
        // For now, we'll just simulate it
        await new Promise(resolve => setTimeout(resolve, 1000));

        emit('update', sessionData.value);
        toast.success('Session updated successfully');
        emit('close');
    } catch (error) {
        console.error('Error updating session:', error);
        toast.error('Failed to update session. Please try again.');
    }
};

onMounted(() => {
    // Any initialization logic can go here
});
</script>