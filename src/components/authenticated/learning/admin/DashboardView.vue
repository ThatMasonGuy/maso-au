<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-4xl font-bold">{{ activeUsers }}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Total Courses</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-4xl font-bold">{{ totalCourses }}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Revenue This Month</CardTitle>
                </CardHeader>
                <CardContent>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger class="cursor-text">
                                <div class="text-4xl font-bold">${{ revenueThisMonth }}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <div class="text-sm">Revenue is in $AUD.</div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardContent>
            </Card>
        </div>
        <div class="mt-8">
            <h3 class="text-xl font-semibold mb-4">Recent Activity</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>User</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-if="recentActivity.length === 0">
                        <TableCell colspan="3">No recent activity.</TableCell>
                    </TableRow>
                    <TableRow class="hover:bg-gray-100" v-for="activity in recentActivity" :key="activity.id">
                        <TableCell>{{ formatDate(activity.timestamp) }}</TableCell>
                        <TableCell>{{ activity.action }}</TableCell>
                        <TableCell>{{ activity.user }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const activeUsers = ref(0);
const totalCourses = ref(0);
const revenueThisMonth = ref(0);
const recentActivity = ref([]);

onMounted(async () => {
    // Fetch dashboard data from your API
    // Update ref values accordingly
});

const formatDate = (timestamp) => {
    // Implement date formatting logic
};
</script>