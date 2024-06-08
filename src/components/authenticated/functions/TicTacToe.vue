<!-- @/components/authenticated/functions/TicTacToe.vue -->
<template>
    <div v-if="!open" class="h-60 w-72 bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6 relative">
        <h1 class="text-3xl font-bold mb-6">Tic-Tac-Toe</h1>
        <Button class="absolute bottom-6 left-6 text-md" @click="$emit('open', componentId)">Open</Button>
    </div>
    <div v-else class="h-full w-[95vw] sm:w-[97vw] md:w-[36rem] lg:w-[54rem] bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-6">Tic-Tac-Toe</h1>
        <p class="mb-6">Hit the button below to start a game</p>
        <div class="mb-6">
            <div class="flex items-center">
                <Button class="text-md rounded-r-md" @click="generateLink">Start Game</Button>
            </div>
        </div>
        <div class="bg-gray-700 p-2 rounded-md border-gray-100 border-[1px]">
            <p class="break-all text-sm select-all">{{ joinUrl || 'Join Link...' }}</p>
        </div>
        <div v-if="joinUrl" class="mt-6">
        </div>
        <Button class="mt-6" @click="$emit('close')">Close</Button>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { getDoc, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { joinGame } from '@/utils/urlService';

const joinUrl = ref('');
const store = useStore();
const route = useRoute();

const user = computed(() => store.getters.user);

const generateUniqueId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};

const checkDuplicateAndGenerateId = async () => {
    let id;
    let docSnap;

    do {
        id = generateUniqueId();
        const docRef = doc(firestore, 'joinUrls', id);
        docSnap = await getDoc(docRef);
    } while (docSnap.exists());

    return id;
};

const generateLink = async () => {
    if (!user.value) {
        toast.error('You need to be logged in to play Tic-Tac-Toe');
        return;
    }

    const id = await checkDuplicateAndGenerateId();
    const generatedUrl = `https://maso.au/auth/functions#tictactoe?joinCode=${id}`;

    try {
        await setDoc(doc(firestore, 'joinUrls', id), {
            writtenBy: user.value.uid,
            writtenByUsername: user.value.userName,
            timestamp: serverTimestamp(),
        });
        joinUrl.value = generatedUrl;
        toast.success('Join URL successfully created');
    } catch (error) {
        toast.error('Failed to generate Join URL');
    }
};

onMounted(() => {
    const hash = window.location.hash.substring(1);
    if (hash === 'tictactoe') {
        const joinCode = route.query.joinCode;
        if (joinCode) {
            joinGameByCode(joinCode);
        }
    }
});

const joinGameByCode = async (joinCode) => {
    try {
        await joinGame(joinCode, user.value.uid);
        // Handle successful game join
    } catch (error) {
        // Handle game join error
    }
};

const props = defineProps({
    componentId: {
        type: Number,
        required: true,
    },
    open: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['open', 'close']);
</script>