<template>
    <Card>
        <CardHeader>
            <CardTitle class="text-xl">Firestore Explorer</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="mb-4">
                <Label class="ml-1 mb-1" for="collection-select">Select Collection</Label>
                <Select v-model="selectedCollection" @update:modelValue="fetchDocuments">
                    <SelectTrigger id="collection-select">
                        <SelectValue placeholder="Select a collection" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem v-for="collection in collections" :key="collection" :value="collection">
                            {{ collection }}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Document ID</TableHead>
                            <TableHead>Data</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-if="documents.length === 0">
                            <TableCell colspan="2">No documents found.</TableCell>
                        </TableRow>
                        <TableRow class="table-row" v-for="doc in documents" :key="doc.id">
                            <TableCell>{{ doc.id }}</TableCell>
                            <TableCell>
                                <Tree :data="doc.data" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </CardContent>
    </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { firestore } from '@/firebase';
import { getFirestore, getDocs, collection, doc } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Label } from '@/components/ui/label';

const collections = ref(['users', 'shortenedUrls', 'joinUrls', 'websiteData', 'learningManagementSystem', 'mailing']);
const selectedCollection = ref('');
const documents = ref([]);

const fetchCollections = async () => {
    return ['users', 'shortenedUrls', 'joinUrls', 'websiteData', 'learningManagementSystem', 'mailing'];
};

const fetchDocuments = async () => {
    if (!selectedCollection.value) return;

    const snapshot = await getDocs(collection(firestore, selectedCollection.value));
    documents.value = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
    }));
};

const Tree = {
    name: 'Tree',
    props: ['data'],
    template: `
      <ul v-if="isObject(data)" class="pl-4">
        <li v-for="(value, key) in data" :key="key">
          <strong>{{ key }}:</strong>
          <Tree v-if="isObject(value)" :data="value" />
          <span v-else>{{ value }}</span>
        </li>
      </ul>
      <span v-else>{{ data }}</span>
    `,
    methods: {
        isObject(value) {
            return typeof value === 'object' && value !== null;
        }
    }
};
</script>