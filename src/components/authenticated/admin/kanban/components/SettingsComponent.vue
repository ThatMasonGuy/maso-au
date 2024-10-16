<template>
    <Card class="w-full max-w-md">
        <CardHeader>
            <CardTitle>Kanban Board Settings</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="space-y-4">
                <div>
                    <h3 class="text-lg font-semibold mb-2">Tags</h3>
                    <div v-for="(tag, index) in tags" :key="index" class="flex items-center space-x-2 mb-2">
                        <Input v-model="tag.name" placeholder="Tag name" class="flex-grow" />
                        <div class="relative">
                            <div class="w-8 h-8 rounded-full cursor-pointer" :style="{ backgroundColor: tag.color }"
                                @click="openColorPicker(index)"></div>
                            <div v-if="activeColorPicker === index" class="absolute z-10 mt-2">
                                <ChromePicker v-model="tag.color" @input="updateColor" />
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" @click="removeTag(index)">
                            <XMarkIcon class="h-4 w-4" />
                        </Button>
                    </div>
                    <Button variant="outline" size="sm" @click="addTag">Add Tag</Button>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-2">Board Options</h3>
                    <div class="flex items-center space-x-2">
                        <Checkbox id="allowDragDrop" v-model="settings.allowDragDrop" />
                        <label for="allowDragDrop">Enable Drag and Drop</label>
                    </div>
                    <div class="flex items-center space-x-2 mt-2">
                        <Checkbox id="showDueDates" v-model="settings.showDueDates" />
                        <label for="showDueDates">Show Due Dates</label>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-2">Color Theme</h3>
                    <Select v-model="settings.colorTheme">
                        <SelectTrigger>
                            <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <Button @click="saveSettings" class="w-full">Save Settings</Button>
        </CardFooter>
    </Card>
</template>

<script setup>
import { ref } from 'vue';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { toast } from 'vue-sonner';
import { Chrome as ChromePicker } from 'vue-color';

const tags = ref([
    { name: 'Important', color: '#ff0000' },
    { name: 'Urgent', color: '#ffa500' },
    { name: 'In Progress', color: '#0000ff' },
    { name: 'Completed', color: '#008000' },
]);

const settings = ref({
    allowDragDrop: true,
    showDueDates: false,
    colorTheme: 'system',
});

const activeColorPicker = ref(null);

const addTag = () => {
    tags.value.push({ name: '', color: '#000000' });
};

const removeTag = (index) => {
    tags.value.splice(index, 1);
};

const openColorPicker = (index) => {
    activeColorPicker.value = activeColorPicker.value === index ? null : index;
};

const updateColor = () => {
    // This function is called when the color is updated
    // You can add any additional logic here if needed
};

const saveSettings = () => {
    // Here you would typically save the settings to your backend or local storage
    console.log('Saving settings:', { tags: tags.value, settings: settings.value });
    toast.success('Settings saved successfully');
};
</script>