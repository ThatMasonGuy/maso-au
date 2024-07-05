<template>
    <div class="flex bg-gray-100 min-h-screen">
      <AdminSidebar />
      <div class="flex-1 p-4 md:p-8 ml-16 transition-all duration-500 ease-in-out">
        <h1 class="text-3xl font-bold mb-8">Super Admin Dashboard</h1>
  
        <Tabs v-model="activeTab" class="w-full">
          <div class="md:hidden">
            <Select v-model="activeTab">
              <SelectTrigger class="w-full font-semibold bg-white shadow-lg">
                <SelectValue placeholder="Select a tab" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excalidraw">Excalidraw</SelectItem>
                <SelectItem value="firestore">Firestore Explorer</SelectItem>
                <SelectItem value="dbstructure">Database Structure</SelectItem>
                <SelectItem value="storage">Storage Explorer</SelectItem>
                <SelectItem value="settings">User Settings</SelectItem>
              </SelectContent>
            </Select>
          </div>
  
          <TabsList class="hidden justify-start md:flex bg-white shadow-lg">
            <TabsTrigger class="hover:shadow-md transition-all duration-300 ease-in-out" value="excalidraw">Excalidraw</TabsTrigger>
            <TabsTrigger class="hover:shadow-md transition-all duration-300 ease-in-out" value="firestore">Firestore Explorer</TabsTrigger>
            <TabsTrigger class="hover:shadow-md transition-all duration-300 ease-in-out" value="dbstructure">Database Structure</TabsTrigger>
            <TabsTrigger class="hover:shadow-md transition-all duration-300 ease-in-out" value="storage">Storage Explorer</TabsTrigger>
            <TabsTrigger class="hover:shadow-md transition-all duration-300 ease-in-out" value="settings">User Settings</TabsTrigger>
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
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
  
  const activeTab = ref('excalidraw');
  </script>