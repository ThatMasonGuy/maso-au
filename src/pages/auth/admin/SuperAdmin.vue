<template>
    <div class="flex bg-gray-100 min-h-screen">
        <AdminSidebar />
        <div class="flex-1 p-4 md:p-8 ml-16 transition-all duration-500 ease-in-out">
            <h1 class="text-3xl font-bold mb-8">Super Admin Dashboard</h1>

            <Tabs defaultValue="excalidraw" class="w-full">
                <TabsList>
                    <TabsTrigger value="excalidraw">Excalidraw</TabsTrigger>
                    <TabsTrigger value="firestore">Firestore Explorer</TabsTrigger>
                    <TabsTrigger value="dbstructure">Database Structure</TabsTrigger>
                    <TabsTrigger value="storage">Storage Explorer</TabsTrigger>
                    <TabsTrigger value="settings">User Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="excalidraw">
                    <AdminExcalidraw />
                </TabsContent>

                <TabsContent value="firestore">
                    <AdminFirestoreExplorer />
                </TabsContent>

                <TabsContent value="dbstructure">
                    <AdminDatabaseStructure />
                </TabsContent>

                <TabsContent value="storage">
                    <AdminCloudStorage />
                </TabsContent>

                <TabsContent value="settings">
                    <AdminSettings />
                </TabsContent>
            </Tabs>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AdminSidebar from '@/components/authenticated/admin/AdminSidebar.vue';
import AdminExcalidraw from '@/components/authenticated/admin/AdminExcalidraw.vue';
import AdminFirestoreExplorer from '@/components/authenticated/admin/AdminFirestoreExplorer.vue';
import AdminDatabaseStructure from '@/components/authenticated/admin/AdminDatabaseStructure.vue';
import AdminCloudStorage from '@/components/authenticated/admin/AdminCloudStorage.vue';
import AdminSettings from '@/components/authenticated/admin/AdminSettings.vue';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
</script>