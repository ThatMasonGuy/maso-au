<template>
    <Card>
        <CardHeader>
            <div class="flex justify-between items-center">
                <CardTitle class="text-xl">Database Structure</CardTitle>
                <DropdownButton buttonText="Download" :dropdownOptions="downloadOptions"
                    @optionSelected="handleDownload" @buttonClick="downloadAsJSON" />
            </div>
        </CardHeader>
        <CardContent>
            <div class="border rounded-lg shadow-md bg-white text-gray-600 p-4 h-full">

                <div v-if="loading" class="flex justify-center items-center h-32">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-700"></div>
                </div>
                <div v-else-if="error" class="text-red-500">
                    {{ error }}
                </div>
                <div v-else class="overflow-auto h-full">
                    <div class="inline-block min-w-full database-structure">
                        <Tree :data="dbStructure" />
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<script setup>
import { ref, onMounted, h } from 'vue';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { getFirestore, collection, getDocs, DocumentReference } from 'firebase/firestore';
import DropdownButton from '@/components/common/buttons/DropdownButton.vue';
import html2canvas from 'html2canvas';

const db = getFirestore();
const dbStructure = ref({});
const loading = ref(true);
const error = ref(null);

const topLevelCollections = [
    'users',
    'shortenedUrls',
    'joinUrls',
    'websiteData',
    'learningManagementSystem',
    'mailing'
];

const downloadOptions = [
    { label: 'Download as JSON', value: 'json' },
    { label: 'Download as PNG', value: 'png' }
];

const handleDownload = (option) => {
    if (option.value === 'json') {
        downloadAsJSON();
    } else if (option.value === 'png') {
        downloadAsPNG();
    }
};

const generateDBStructure = async () => {
    try {
        const structure = {};

        for (const collectionName of topLevelCollections) {
            structure[collectionName] = await getCollectionStructure(collection(db, collectionName), collectionName);
        }

        dbStructure.value = structure;
    } catch (err) {
        console.error('Error fetching database structure:', err);
        error.value = 'Failed to fetch database structure. Please try again.';
    } finally {
        loading.value = false;
    }
};

const getCollectionStructure = async (collectionRef, parentCollectionName) => {
    const structure = {};
    const snapshot = await getDocs(collectionRef);

    if (snapshot.docs.length > 0) {
        const docData = snapshot.docs[0].data();
        for (const [key, value] of Object.entries(docData)) {
            structure[key] = getFieldType(value);
        }

        // Check for sub-collections
        for (const docSnap of snapshot.docs) {
            const subCollections = await getSubCollections(docSnap.ref, parentCollectionName);
            Object.assign(structure, subCollections);
        }
    }

    return structure;
};

const getFieldType = (value) => {
    if (value instanceof DocumentReference) {
        return 'reference';
    } else if (value instanceof Date) {
        return 'date';
    } else if (Array.isArray(value)) {
        return 'array';
    } else if (typeof value === 'object' && value !== null) {
        return getObjectStructure(value, 1);
    } else {
        return typeof value;
    }
};

const getObjectStructure = (obj, depth) => {
    if (depth > 5) {
        return 'object (nested)';
    }

    const structure = {};
    for (const [key, value] of Object.entries(obj)) {
        structure[key] = getFieldType(value);
    }
    return structure;
};

const getSubCollections = async (docRef, parentCollectionName) => {
    const subCollectionsMap = {
        'users': ['accounting'],
        'accounting': ['contacts', 'invoices', 'quotes', 'receipts'],
        'websiteData': ['demos'],
        'learningManagementSystem': ['courses', 'users'],
        'courses': ['sessions']
    };
    const subCollectionNames = subCollectionsMap[parentCollectionName] || [];
    const subCollections = {};

    for (const subCollectionName of subCollectionNames) {
        const subCollectionRef = collection(docRef, subCollectionName);
        const subCollectionSnapshot = await getDocs(subCollectionRef);
        if (!subCollectionSnapshot.empty) {
            subCollections[subCollectionName] = await getCollectionStructure(subCollectionRef, subCollectionName);
        }
    }
    return subCollections;
};

onMounted(async () => {
    await generateDBStructure();
});

// Tree component
const Tree = {
    props: ['data'],
    setup(props) {
        const renderTree = (data, level = 0) => {
            return h('ul', { class: 'pl-4' },
                Object.entries(data).map(([key, value]) =>
                    h('li', { key }, [
                        h('div', { class: 'flex items-center' }, [
                            value && typeof value === 'object' && Object.keys(value).length
                                ? h('span', {
                                    class: 'cursor-pointer mr-2',
                                    onClick: (event) => toggleCollapse(event.target)
                                }, '▶')
                                : h('span', { class: 'mr-2' }),
                            h('span', { class: level === 0 ? 'font-bold' : '' }, key),
                            h('span', { class: getTypeClass(value) },
                                typeof value === 'string' ? `: ${value}` : (typeof value === 'object' && !Array.isArray(value)) ? ': object' : ''
                            )
                        ]),
                        value && typeof value === 'object' && Object.keys(value).length
                            ? h('div', { class: 'hidden' }, renderTree(value, level + 1))
                            : null
                    ])
                )
            );
        };

        const getTypeClass = (type) => {
            switch (type) {
                case 'string': return 'text-green-600';
                case 'number': return 'text-yellow-600';
                case 'boolean': return 'text-purple-600';
                case 'array': return 'text-blue-600';
                case 'date': return 'text-pink-600';
                case 'object': return 'text-orange-600';
                case 'reference': return 'text-red-600';
                default: return 'text-gray-500';
            }
        };

        const toggleCollapse = (element) => {
            const content = element.parentElement.nextElementSibling;
            if (content) {
                content.classList.toggle('hidden');
                element.textContent = content.classList.contains('hidden') ? '▶' : '▼';
            }
        };

        return () => h('div', { class: 'font-mono text-sm' }, renderTree(props.data));
    }
};

const downloadAsJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dbStructure.value, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "database_structure.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

const downloadAsPNG = () => {
    const element = document.querySelector('.database-structure');
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'database_structure.png';
        link.href = canvas.toDataURL();
        link.click();
    });
};
</script>

<style scoped>
ul {
    list-style-type: none;
    border-left: 1px solid #4a5568;
    margin-left: 0.5rem;
}

li {
    position: relative;
    padding-left: 1rem;
}

li::before {
    content: '';
    position: absolute;
    top: 0.7em;
    left: -0.5rem;
    width: 1rem;
    height: 1px;
    background-color: #4a5568;
}
</style>