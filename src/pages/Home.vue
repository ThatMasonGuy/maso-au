<!-- @/pages/Home.vue -->
<template>
  <div class="bg-[#0066FF]">
    <section
      :class="['absolute overflow-hidden min-h-screen bg-gray-950 carousel-mask shadow-lg', $attrs.class]"
      v-bind="$attrs">
      <div class="hero-fallback" v-if="!homeData || !homeData.images || !image.loaded">
        <div class="inset-0 bg-black opacity-50 blur"></div>
        <img src="@/assets/heroImage.jpg" alt="Hero Image" class="inset-0 w-full h-full object-cover">
      </div>
      <Carousel :plugins="[plugin]" class="absolute w-full h-full" v-if="homeData && homeData.images">
        <CarouselContent>
          <CarouselItem v-for="(img, index) in homeData.images" :key="index">
            <div class="relative h-screen overflow-hidden">
              <div class="absolute inset-0 bg-black opacity-50 blur"></div>
              <img v-lazy="img.url" :alt="img.alt" class="absolute inset-0 w-full h-full object-cover">
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <Skeleton v-if="!homeData">
        <div class="p-4">
          <div class="h-8 bg-gray-700 rounded mb-2"></div>
          <div class="h-4 bg-gray-700 rounded"></div>
        </div>
      </Skeleton>
      <div v-else
        class="absolute inset-0 flex justify-center items-center text-white text-center bg-black bg-opacity-30 backdrop-blur-md"
        v-if="homeData">
        <div class="p-4">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{{ homeData.heading }}</h2>
          <p class="mt-4 text-md sm:text-lg md:text-xl lg:text-2xl">{{ homeData.body }}</p>
        </div>
      </div>
    </section>
  </div>

  <div class="bg-[#98E278]">
    <section id="about" class="shadow-lg" v-if="homeData && homeData.sections && homeData.sections.aboutMe">
      <div class="bg-[#0066FF] text-gray-300 py-10 text-center px-4 shadow-lg">
        <h2 class="text-3xl font-bold mb-4">{{ homeData.sections.aboutMe.heading }}</h2>
        <p class="max-w-prose mx-auto">{{ homeData.sections.aboutMe.body }}</p>
      </div>
    </section>
    <svg id="visual" viewBox="0 0 960 120" class="w-full lg:-mt-8" preserve-aspect-ratio="none"
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
    <Skeleton v-if="!homeData || !homeData.images">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div v-for="n in 6" :key="n" class="relative overflow-hidden rounded-lg">
          <div class="h-48 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </Skeleton>
    <section v-else id="gallery" class="bg-[#98E278] py-10" v-if="homeData && homeData.images">
      <h2 class="text-3xl font-bold text-gray-700 text-center mb-4">Gallery</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div v-for="(img, index) in homeData.images" :key="index" class="relative overflow-hidden rounded-lg">
          <img v-lazy="img.url" :alt="img.alt"
            class="w-full h-full transition-transform transform duration-300 hover:scale-105 object-cover">
          <Skeleton v-if="!img.loaded" class="w-full bg-gray-600"></Skeleton>
        </div>
      </div>
    </section>
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
    <Skeleton v-if="!homeData || !homeData.sections || !homeData.sections.timeline">
      <div class="bg-[#956CC6] text-gray-200 -mt-8 py-2 px-6">
        <div class="h-8 bg-gray-700 rounded mb-4 mx-auto w-1/2"></div>
        <div v-for="n in 3" :key="n" class="mb-4 mx-auto max-w-2xl">
          <div class="h-4 bg-gray-700 rounded mb-2"></div>
          <div class="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    </Skeleton>
    <section v-else id="timeline" class="bg-[#956CC6] text-gray-200 -mt-8 py-2 px-6"
      v-if="homeData && homeData.sections && homeData.sections.timeline">
      <h2 class="text-3xl font-bold text-center mb-4">My Photography Through the Years</h2>
      <ul class="max-w-2xl mx-auto">
        <li v-for="(item, key) in homeData.sections.timeline" :key="key" class="mb-4">
          <strong>{{ item.date }}:</strong> {{ item.description }}
        </li>
      </ul>
    </section>
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
    <Skeleton v-if="!homeData || !homeData.sections || !homeData.sections.testimonials">
      <section class="bg-[#F9A03F] text-gray-900 py-10 px-4">
        <div class="h-8 bg-gray-700 rounded mb-4 mx-auto w-1/2"></div>
        <div v-for="n in 3" :key="n" class="mb-4 max-w-prose mx-auto">
          <div class="h-4 bg-gray-700 rounded mb-2"></div>
          <div class="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      </section>
    </Skeleton>
    <section v-else id="testimonials" class="bg-[#F9A03F] text-gray-900 py-10 px-4"
      v-if="homeData && homeData.sections && homeData.sections.testimonials">
      <h2 class="text-3xl font-bold text-center mb-4">Testimonials</h2>
      <div class="max-w-4xl mx-auto text-center">
        <p v-for="(testimonial, key) in homeData.sections.testimonials" :key="key" class="mb-4 max-w-prose mx-auto">
          <span class="text-md">"{{ testimonial.text }}" - </span>
          <span class="text-md font-semibold">{{ testimonial.name }}</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import Autoplay from 'embla-carousel-autoplay';
import lazy from '@/utils/lazy';

const store = useStore();
const homeData = computed(() => store.state.homeData);

const plugin = Autoplay({ delay: 5000 });

const image = ref({ loaded: false });

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
  -webkit-mask-image: url('@/assets/maskDividerSvg.svg');
  mask-image: url('@/assets/maskDividerSvg.svg');
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: bottom;
  mask-position: bottom;
}
</style>
