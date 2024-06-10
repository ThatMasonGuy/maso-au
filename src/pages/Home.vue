<template>
  <div class="bg-[#0066FF]">
    <section
      :class="['relative overflow-hidden min-h-screen sm:min-h-[105vh] md:min-h-[110vh] bg-gray-950 carousel-mask shadow-lg', $attrs.class]"
      v-bind="$attrs">
      <Carousel :plugins="[plugin]" class="absolute w-full h-full" v-if="homeData && homeData.images">
        <CarouselContent>
          <CarouselItem v-for="(image, index) in homeData.images" :key="index">
            <div class="relative h-screen overflow-hidden">
              <div class="absolute inset-0 bg-black opacity-50 blur"></div>
              <img :src="image.url" :alt="image.alt" class="absolute inset-0 w-full h-full object-cover">
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div
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
    <svg id="visual" viewBox="0 0 960 100" class="w-full lg:-mt-8" preserve-aspect-ratio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0, 0, 0, 0.5)" />
        </filter>
      </defs>
      <path d="M0 84L22.8 85.3C45.7 86.7 91.3 89.3 137 92.7C182.7 96 228.3 100 274 90.8C319.7 81.7 365.3 59.3 411.2 45.3C457 31.3 503 25.7 548.8 29.8C594.7 34 640.3 48 686 47.5C731.7 47 777.3 32 823 34.5C868.7 37 914.3 57 937.2 67L960 77L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter" filter="url(#shadow)"></path>
    </svg>
  </div>

  <div class="bg-[#98E278]">
  <section id="gallery" class="bg-[#98E278] py-10" v-if="homeData && homeData.images">
    <h2 class="text-3xl font-bold text-gray-700 text-center mb-4">Gallery</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      <div v-for="(image, index) in homeData.images" :key="index" class="relative overflow-hidden rounded-lg">
        <img :src="image.url" :alt="image.alt"
          class="w-full h-full transition-transform transform duration-300 hover:scale-105 object-cover">
      </div>
    </div>
  </section>
  <svg id="visual" viewBox="0 0 960 92" class="w-full" preserve-aspect-ratio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0, 0, 0, 0.5)" />
      </filter>
    </defs>
    <path d="M0 0L22.8 2.2C45.7 4.3 91.3 8.7 137 15.5C182.7 22.3 228.3 31.7 274 38.5C319.7 45.3 365.3 49.7 411.2 48C457 46.3 503 38.7 548.8 34.7C594.7 30.7 640.3 30.3 686 34.8C731.7 39.3 777.3 48.7 823 49.7C868.7 50.7 914.3 43.3 937.2 39.7L960 36L960 100L937.2 100C914.3 100 868.7 100 823 100C777.3 100 731.7 100 686 100C640.3 100 594.7 100 548.8 100C503 100 457 100 411.2 100C365.3 100 319.7 100 274 100C228.3 100 182.7 100 137 100C91.3 100 45.7 100 22.8 100L0 100Z" fill="#956CC6" stroke-linecap="round" stroke-linejoin="miter" filter="url(#shadow)"></path>
  </svg>
  </div>

  <div class="bg-[#F9A03F]">
  <section id="timeline" class="bg-[#956CC6] text-gray-200 -mt-8 py-2 px-6"
    v-if="homeData && homeData.sections && homeData.sections.timeline">
    <h2 class="text-3xl font-bold text-center mb-4">My Photography Through the Years</h2>
    <ul class="max-w-2xl mx-auto">
      <li v-for="(item, key) in homeData.sections.timeline" :key="key" class="mb-4">
        <strong>{{ item.date }}:</strong> {{ item.description }}
      </li>
    </ul>
  </section>
  <svg id="visual" viewBox="0 0 960 120" class="w-full" preserve-aspect-ratio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0, 0, 0, 0.5)" />
      </filter>
    </defs>
    <path d="M0 84L22.8 85.3C45.7 86.7 91.3 89.3 137 92.7C182.7 96 228.3 100 274 90.8C319.7 81.7 365.3 59.3 411.2 45.3C457 31.3 503 25.7 548.8 29.8C594.7 34 640.3 48 686 47.5C731.7 47 777.3 32 823 34.5C868.7 37 914.3 57 937.2 67L960 77L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z" fill="#956CC6" stroke-linecap="round" stroke-linejoin="miter" filter="url(#shadow)"></path>
  </svg>
</div>

<div class="bg-[#F9A03F]">
  <section id="testimonials" class="bg-[#F9A03F] text-gray-900 py-10 px-4"
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
import Autoplay from 'embla-carousel-autoplay';

const store = useStore();
const homeData = computed(() => store.state.homeData);

const plugin = Autoplay({ delay: 5000 });

onMounted(() => {
  store.dispatch('fetchHomeData');
});
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
