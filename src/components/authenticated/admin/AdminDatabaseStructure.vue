<template>
    <Card>
        <CardHeader>
            <CardTitle>Database Structure</CardTitle>
        </CardHeader>
        <CardContent>
            <Tree :data="dbStructure" />
        </CardContent>
    </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { firestore } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const dbStructure = ref({});

onMounted(async () => {
    await generateDBStructure();
});

const generateDBStructure = async () => {
    const structure = {};
    const collections = await getDocs(collection(firestore, '__collection__'));

    for (const collectionDoc of collections.docs) {
        const collectionName = collectionDoc.id;
        structure[collectionName] = {};
        const snapshot = await getDocs(collection(firestore, collectionName));
        snapshot.docs.forEach(doc => {
            structure[collectionName][doc.id] = Object.keys(doc.data());
        });
    }

    dbStructure.value = structure;
};

// Tree component
const Tree = {
    name: 'Tree',
    props: ['data'],
    template: `
      <ul v-if="isObject(data)" class="pl-4">
        <li v-for="(value, key) in data" :key="key">
          <strong>{{ key }}</strong>
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