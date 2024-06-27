<template>
    <div class="bg-gray-100 min-h-screen flex ml-16">
        <AdminSidebar />
        <div class="flex-1 p-8">
            <h1 class="text-3xl font-bold mb-8">Admin Center</h1>

            <Tabs v-model="activeTab" class="mb-6" @update:modelValue="updateHash">
                <TabsList>
                    <TabsTrigger value="dashboard" class="text-md">Dashboard</TabsTrigger>
                    <TabsTrigger value="reports" class="text-md">Reports & Analytics</TabsTrigger>
                    <TabsTrigger value="settings" class="text-md">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="dashboard">
                    <DashboardView />
                </TabsContent>

                <TabsContent value="reports">
                    <ReportsAndAnalyticsView />
                </TabsContent>

                <TabsContent value="settings">
                    <SettingsView />
                </TabsContent>
            </Tabs>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AdminSidebar from '@/components/authenticated/learning/admin/AdminSidebar.vue';
import DashboardView from '@/components/authenticated/learning/admin/DashboardView.vue';
import ReportsAndAnalyticsView from '@/components/authenticated/learning/admin/ReportsAndAnalyticsView.vue';
import SettingsView from '@/components/authenticated/learning/admin/SettingsView.vue';
import router from '@/router';
import { useHashNavigation } from '@/utils/useHashNavigation';

const { activeTab, updateHash } = useHashNavigation('dashboard', ['dashboard', 'reports', 'settings']);
</script>