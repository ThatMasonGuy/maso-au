<!-- @/pages/auth/Functions.vue -->
<template>
    <div
        class="p-5 pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600 min-h-[--adjusted-height]">
        <div class="pt-8 mb-4 mx-auto">
            <div
                class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-center">
                <TooltipProvider>
                    <div v-for="component in components" :v-if="component.active" :key="component.id">
                        <Tooltip v-if="!component.complete">
                            <TooltipTrigger>
                                <div class="bg-gray-400 shadow-md rounded-lg cursor-not-allowed opacity-50">
                                    <div class="pointer-events-none">
                                    <component :is="component.name" :component-id="component.id">
                                    </component>
                                </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Component Coming Soon!</p>
                            </TooltipContent>
                        </Tooltip>
                        <div v-else class="bg-gray-600 shadow-md rounded-lg">
                            <component :is="component.name" :component-id="component.id" @open="handleOpen"
                                @close="handleClose">
                            </component>
                        </div>
                    </div>
                </TooltipProvider>
            </div>
        </div>
        <div v-if="openComponentId" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            @click.self="handleClose">
            <div class="bg-gray-800 rounded-lg shadow-2xl w-auto h-auto overflow-auto">
                <component :is="getOpenComponent" :component-id="openComponentId" :open="true" @close="handleClose">
                </component>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PlaceholderComponent from '@/components/authenticated/functions/PlaceholderComponent.vue'
import UrlShorten from '@/components/authenticated/functions/UrlShorten.vue'
import CoinFlip from '@/components/authenticated/functions/CoinFlip.vue'
import DiceRoll from '@/components/authenticated/functions/DiceRoll.vue'
import TicTacToe from '@/components/authenticated/functions/TicTacToe.vue'
import InvoiceGenerator from '@/components/authenticated/functions/InvoiceGenerator.vue'
import CodeSnippet from '@/components/authenticated/functions/CodeSnippet.vue'
import CurrencyConvertor from '@/components/authenticated/functions/CurrencyConvertor.vue'
import EventCountdown from '@/components/authenticated/functions/EventCountdown.vue'
import StockTracker from '@/components/authenticated/functions/StockTracker.vue'
import TimezoneConvertor from '@/components/authenticated/functions/TimezoneConvertor.vue'
import UnitConvertor from '@/components/authenticated/functions/UnitConvertor.vue'
import PasswordGenerator from '@/components/authenticated/functions/PasswordGenerator.vue'
import MusicPlayer from '@/components/authenticated/functions/MusicPlayer.vue'
import ToDo from '@/components/authenticated/functions/ToDo.vue'
import Weather from '@/components/authenticated/functions/Weather.vue'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'

const components = [
    { id: 1, name: UrlShorten, active: true, complete: true },
    { id: 2, name: CoinFlip, active: true, complete: true },
    { id: 3, name: DiceRoll, active: true, complete: true },
    { id: 4, name: TicTacToe, active: true, complete: true },
    { id: 5, name: InvoiceGenerator, active: true, complete: true },
    { id: 6, name: CodeSnippet, active: true, complete: false },
    { id: 7, name: CurrencyConvertor, active: true, complete: false },
    { id: 8, name: EventCountdown, active: true, complete: false },
    { id: 9, name: StockTracker, active: true, complete: false },
    { id: 10, name: TimezoneConvertor, active: true, complete: false },
    { id: 11, name: UnitConvertor, active: true, complete: false },
    { id: 12, name: PasswordGenerator, active: true, complete: false },
    { id: 13, name: MusicPlayer, active: true, complete: false },
    { id: 14, name: ToDo, active: true, complete: false },
    { id: 15, name: Weather, active: true, complete: false },
];

const openComponentId = ref(null);

const handleOpen = (componentId) => {
    const component = components.find(component => component.id === componentId);
    if (component && component.complete) {
        openComponentId.value = componentId;
    }
};

const handleClose = () => {
    openComponentId.value = null;
};

const getOpenComponent = computed(() => {
    return components.find(component => component.id === openComponentId.value)?.name;
});
</script>