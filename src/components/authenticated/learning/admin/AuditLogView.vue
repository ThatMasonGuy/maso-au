<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">Audit Log</h2>
        <div class="flex justify-between items-center mb-6">
            <Input v-model="searchQuery" placeholder="Search logs..." class="w-64" />
            <div class="flex space-x-4">
                <DatePicker v-model="dateRange" range />
                <Select v-model="actionType">
                    <SelectTrigger class="w-[180px]">
                        <SelectValue placeholder="Filter by action" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Actions</SelectItem>
                        <SelectItem value="create">Create</SelectItem>
                        <SelectItem value="update">Update</SelectItem>
                        <SelectItem value="delete">Delete</SelectItem>
                        <SelectItem value="login">Login</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Details</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="log in filteredLogs" :key="log.id">
                    <TableCell>{{ formatDate(log.timestamp) }}</TableCell>
                    <TableCell>{{ log.user }}</TableCell>
                    <TableCell>{{ log.action }}</TableCell>
                    <TableCell>
                        <Button variant="ghost" @click="showLogDetails(log)">View Details</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <div class="mt-4 flex justify-between items-center">
            <Button @click="exportLogs">Export Logs</Button>
            <Pagination v-model="currentPage" :total-pages="totalPages" />
        </div>

        <!-- Log Details Modal -->
        <Dialog v-model:open="isLogDetailsModalOpen">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Log Details</DialogTitle>
                </DialogHeader>
                <pre class="bg-gray-100 p-4 rounded">{{ JSON.stringify(selectedLog, null, 2) }}</pre>
            </DialogContent>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DatePicker } from '@/components/ui/date-picker';
import { Pagination } from '@/components/ui/pagination';

const searchQuery = ref('');
const dateRange = ref({ from: null, to: null });
const actionType = ref('all');
const currentPage = ref(1);
const totalPages = ref(10); // This should be calculated based on the total number of logs
const logs = ref([]); // This should be fetched from your API
const isLogDetailsModalOpen = ref(false);
const selectedLog = ref(null);

const filteredLogs = computed(() => {
    // Implement log filtering logic based on searchQuery, dateRange, and actionType
});

const formatDate = (timestamp) => {
    // Implement date formatting logic
};

const showLogDetails = (log) => {
    selectedLog.value = log;
    isLogDetailsModalOpen.value = true;
};

const exportLogs = () => {
    // Implement log export functionality
};
</script>