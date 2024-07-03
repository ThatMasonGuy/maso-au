<template>
    <Card>
        <CardHeader>
            <CardTitle>Cloud Storage Explorer</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="mb-4">
                <Label for="storage-path">Storage Path</Label>
                <div class="flex space-x-2">
                    <Input v-model="currentPath" placeholder="Enter storage path" />
                    <Button @click="listFiles">Go</Button>
                </div>
            </div>
            <div class="mb-4">
                <Input type="file" @change="handleFileUpload" />
                <Button @click="uploadFile" :disabled="!selectedFile">Upload</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="file in files" :key="file.name">
                        <TableCell>{{ file.name }}</TableCell>
                        <TableCell>{{ formatFileSize(file.size) }}</TableCell>
                        <TableCell>
                            <Button @click="downloadFile(file)" variant="outline" size="sm"
                                class="mr-2">Download</Button>
                            <Button @click="openFile(file)" variant="outline" size="sm">Open</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>

<script setup>
import { ref } from 'vue';
import { storage } from '@/firebase';
import { ref as storageRef, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const currentPath = ref('');
const files = ref([]);
const selectedFile = ref(null);

const listFiles = async () => {
    const listRef = storageRef(storage, currentPath.value);
    const res = await listAll(listRef);
    files.value = await Promise.all(res.items.map(async (itemRef) => {
        const metadata = await itemRef.getMetadata();
        return {
            name: itemRef.name,
            size: metadata.size,
            fullPath: itemRef.fullPath,
        };
    }));
};

const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
};

const uploadFile = async () => {
    if (!selectedFile.value) return;
    const fileRef = storageRef(storage, `${currentPath.value}/${selectedFile.value.name}`);
    await uploadBytes(fileRef, selectedFile.value);
    await listFiles();
};

const downloadFile = async (file) => {
    const url = await getDownloadURL(storageRef(storage, file.fullPath));
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

const openFile = async (file) => {
    const url = await getDownloadURL(storageRef(storage, file.fullPath));
    window.open(url, '_blank');
};

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Initial file listing
listFiles();
</script>