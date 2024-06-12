<template>
  <section :class="['absolute overflow-hidden min-h-[97vh] carousel-mask', $attrs.class]" v-bind="$attrs">
    <Carousel :plugins="[plugin]" class="absolute w-full h-full">
      <CarouselContent>
        <CarouselItem v-for="(img, index) in images" :key="index">
          <div class="relative h-[94vh] z-30 overflow-hidden">
            <div class="absolute inset-0 bg-black z-31 opacity-50 blur"></div>
            <img :src="img.location" :alt="img.alt" class="absolute z-29 inset-0 w-full h-full object-cover" />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <div v-if="homeData"
      class="absolute inset-0 flex justify-center items-center text-white text-center z-40 bg-black bg-opacity-30 backdrop-blur-">
      <div class="p-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl z-41 font-bold">{{ homeData.heading }}</h2>
        <p class="mt-4 text-md sm:text-lg md:text-xl z-42 lg:text-2xl">{{ homeData.body }}</p>
      </div>
    </div>
    <svg class="absolute inset-0 w-full h-full z-50 pointer-events-none" viewBox="0 0 960 1100"
      preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1">
      <defs>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feFlood flood-color="rgba(0,0,0,0.7)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <mask id="path-mask">
          <rect width="101%" height="101%" fill="white" />
          <path
            d="M960 0H0V950L22.8 962.5C45.7 975 91.3 1000 137 1012.5C182.7 1025 228.3 1012.5 274 1000C319.7 987.5 365.3 975 411.2 987.5C457 1000 503 1025 548.8 1037.5C594.7 1050 640.3 1037.5 686 1025C731.7 1012.5 777.3 1000 823 987.5C868.7 975 914.3 962.5 937.2 956.25L960 950Z"
            fill="black" />
        </mask>
      </defs>
      <rect width="101%" height="101%" fill="#0066FF" mask="url(#path-mask)" />
      <path
        d="M960 0H0V950L22.8 962.5C45.7 975 91.3 1000 137 1012.5C182.7 1025 228.3 1012.5 274 1000C319.7 987.5 365.3 975 411.2 987.5C457 1000 503 1025 548.8 1037.5C594.7 1050 640.3 1037.5 686 1025C731.7 1012.5 777.3 1000 823 987.5C868.7 975 914.3 962.5 937.2 956.25L960 950Z"
        fill="none" stroke-linecap="round" stroke-linejoin="miter" filter="url(#dropShadow)" />
    </svg>
  </section>

  <div class="bg-[#98E278]">
    <AboutSection v-if="homeData && homeData.sections && homeData.sections.aboutMe" :data="homeData.sections.aboutMe" />
    <svg id="visual" viewBox="0 0 960 120" class="w-full -mt-[1px] lg:-mt-8" preserve-aspect-ratio="none"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0, 0, 0, 0.5)" />
        </filter>
      </defs>
      <path
        d="M0 84L22.8 85.3C45.7 86.7 91.3 89.3 137 92.7C182.7 96 228.3 100 274 90.8C319.7 81.7 365.3 59.3 411.2 45.3C457 31.3 503 25.7 548.8 29.8C594.7 34 640.3 48 686 47.5C731.7 47 777.3 32 823 34.5C868.7 37 914.3 57 937.2 67L960 77L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
        fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter" filter="url(#shadow)"></path>
    </svg>
  </div>

  <div class="bg-[#98E278]">
    <GallerySection v-if="homeData" :images="images" />
    <svg id="visual" viewBox="0 0 960 92" class="w-full" preserve-aspect-ratio="none" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0, 0, 0, 0.5)" />
        </filter>
      </defs>
      <path
        d="M0 0L22.8 2.2C45.7 4.3 91.3 8.7 137 15.5C182.7 22.3 228.3 31.7 274 38.5C319.7 45.3 365.3 49.7 411.2 48C457 46.3 503 38.7 548.8 34.7C594.7 30.7 640.3 30.3 686 34.8C731.7 39.3 777.3 48.7 823 49.7C868.7 50.7 914.3 43.3 937.2 39.7L960 36L960 100L937.2 100C914.3 100 868.7 100 823 100C777.3 100 731.7 100 686 100C640.3 100 594.7 100 548.8 100C503 100 457 100 411.2 100C365.3 100 319.7 100 274 100C228.3 100 182.7 100 137 100C91.3 100 45.7 100 22.8 100L0 100Z"
        fill="#956CC6" stroke-linecap="round" stroke-linejoin="miter" filter="url(#shadow)"></path>
    </svg>
  </div>

  <div class="bg-[#F9A03F]">
    <TimelineSection v-if="homeData && homeData.sections && homeData.sections.timeline"
      :data="homeData.sections.timeline" />
    <svg id="visual" viewBox="0 0 960 120" class="w-full" preserve-aspect-ratio="none"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0, 0, 0, 0.5)" />
        </filter>
      </defs>
      <path
        d="M0 84L22.8 85.3C45.7 86.7 91.3 89.3 137 92.7C182.7 96 228.3 100 274 90.8C319.7 81.7 365.3 59.3 411.2 45.3C457 31.3 503 25.7 548.8 29.8C594.7 34 640.3 48 686 47.5C731.7 47 777.3 32 823 34.5C868.7 37 914.3 57 937.2 67L960 77L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
        fill="#956CC6" stroke-linecap="round" stroke-linejoin="miter" filter="url(#shadow)"></path>
    </svg>
  </div>

  <div class="bg-[#F9A03F]">
    <TestimonialsSection v-if="homeData && homeData.sections && homeData.sections.testimonials"
      :data="homeData.sections.testimonials" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import lazy from '@/utils/lazy';

const AboutSection = defineAsyncComponent(() => import('@/components/common/homeSections/AboutSection.vue'));
const GallerySection = defineAsyncComponent(() => import('@/components/common/homeSections/GallerySection.vue'));
const TimelineSection = defineAsyncComponent(() => import('@/components/common/homeSections/TimelineSection.vue'));
const TestimonialsSection = defineAsyncComponent(() => import('@/components/common/homeSections/TestimonialsSection.vue'));
const store = useStore();
const homeData = computed(() => store.state.homeData);
const plugin = Autoplay({ delay: 5000 });
const images = ref([
  { index: 1, location: new URL('@/assets/landing/nature/image(1).webp', import.meta.url).href, alt: 'Image 1' },
  { index: 2, location: new URL('@/assets/landing/nature/image(2).webp', import.meta.url).href, alt: 'Image 2' },
  { index: 3, location: new URL('@/assets/landing/nature/image(3).webp', import.meta.url).href, alt: 'Image 3' },
  { index: 4, location: new URL('@/assets/landing/nature/image(4).webp', import.meta.url).href, alt: 'Image 4' },
  { index: 5, location: new URL('@/assets/landing/nature/image(5).webp', import.meta.url).href, alt: 'Image 5' },
  { index: 6, location: new URL('@/assets/landing/nature/image(6).webp', import.meta.url).href, alt: 'Image 6' },
  { index: 7, location: new URL('@/assets/landing/nature/image(7).webp', import.meta.url).href, alt: 'Image 7' },
  { index: 8, location: new URL('@/assets/landing/nature/image(8).webp', import.meta.url).href, alt: 'Image 8' },
  { index: 9, location: new URL('@/assets/landing/nature/image(9).webp', import.meta.url).href, alt: 'Image 9' },
  { index: 10, location: new URL('@/assets/landing/nature/image(10).webp', import.meta.url).href, alt: 'Image 10' },
]);

onMounted(() => {
  store.dispatch('fetchHomeData');
});
</script>

<script>
import lazy from '@/utils/lazy';

export default {
  directives: {
    lazy,
  },
};
</script>

<style scoped>
.carousel-mask {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.backdrop-blur- {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
