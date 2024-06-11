<!-- @/pages/Home.vue -->
<template>
  <div class="bg-[#0066FF]">
    <section
      :class="['absolute overflow-hidden min-h-screen bg-gray-950 carousel-mask shadow-lg', $attrs.class]"
      v-bind="$attrs"
    >
      <div class="relative h-screen w-screen overflow-hidden" v-if="!homeData || !homeData.images || !image.loaded">
        <div class="inset-0 z-10 bg-black opacity-50 blur"></div>
        <img src="@/assets/heroImage.jpg" alt="Hero Image" class="inset-0 z-8 w-full h-full object-cover" />
      </div>
      <Carousel :plugins="[plugin]" class="absolute w-full h-full" v-if="homeData && homeData.images">
        <CarouselContent>
          <CarouselItem v-for="(img, index) in homeData.images" :key="index">
            <div class="relative h-screen overflow-hidden">
              <div class="absolute inset-0 bg-black opacity-50 blur"></div>
              <img v-lazy="img.image" :alt="img.alt" class="absolute inset-0 w-full h-full object-cover" />
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
      <div
        v-else
        class="absolute inset-0 flex justify-center items-center text-white text-center bg-black bg-opacity-30 backdrop-blur-md"
        v-if="homeData"
      >
        <div class="p-4">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{{ homeData.heading }}</h2>
          <p class="mt-4 text-md sm:text-lg md:text-xl lg:text-2xl">{{ homeData.body }}</p>
        </div>
      </div>
    </section>
  </div>

  <div class="bg-[#98E278]">
    <AboutSection v-if="homeData && homeData.sections && homeData.sections.aboutMe" :data="homeData.sections.aboutMe" />
    <svg id="visual" viewBox="0 0 960 120" class="w-full lg:-mt-8" preserveAspectRatio="none" v-once>
      <path
        d="M0 84L22.8 85.3C45.7 86.7 91.3 89.3 137 92.7C182.7 96 228.3 100 274 90.8C319.7 81.7 365.3 59.3 411.2 45.3C457 31.3 503 25.7 548.8 29.8C594.7 34 640.3 48 686 47.5C731.7 47 777.3 32 823 34.5C868.7 37 914.3 57 937.2 67L960 77L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
        fill="#0066FF"
        stroke-linecap="round"
        stroke-linejoin="miter"
      ></path>
    </svg>
  </div>

  <div class="bg-[#98E278]">
    <GallerySection v-if="homeData && homeData.images" :images="homeData.images" />
    <svg id="visual" viewBox="0 0 960 92" class="w-full" preserveAspectRatio="none" v-once>
      <path
        d="M0 0L22.8 2.2C45.7 4.3 91.3 8.7 137 15.5C182.7 22.3 228.3 31.7 274 38.5C319.7 45.3 365.3 49.7 411.2 48C457 46.3 503 38.7 548.8 34.7C594.7 30.7 640.3 30.3 686 34.8C731.7 39.3 777.3 48.7 823 49.7C868.7 50.7 914.3 43.3 937.2 39.7L960 36L960 100L937.2 100C914.3 100 868.7 100 823 100C777.3 100 731.7 100 686 100C640.3 100 594.7 100 548.8 100C503 100 457 100 411.2 100C365.3 100 319.7 100 274 100C228.3 100 182.7 100 137 100C91.3 100 45.7 100 22.8 100L0 100Z"
        fill="#956CC6"
        stroke-linecap="round"
        stroke-linejoin="miter"
      ></path>
    </svg>
  </div>

  <div class="bg-[#F9A03F]">
    <TimelineSection v-if="homeData && homeData.sections && homeData.sections.timeline" :data="homeData.sections.timeline" />
    <svg id="visual" viewBox="0 0 960 120" class="w-full" preserveAspectRatio="none" v-once>
      <path
        d="M0 84L22.8 85.3C45.7 86.7 91.3 89.3 137 92.7C182.7 96 228.3 100 274 90.8C319.7 81.7 365.3 59.3 411.2 45.3C457 31.3 503 25.7 548.8 29.8C594.7 34 640.3 48 686 47.5C731.7 47 777.3 32 823 34.5C868.7 37 914.3 57 937.2 67L960 77L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
        fill="#956CC6"
        stroke-linecap="round"
        stroke-linejoin="miter"
      ></path>
    </svg>
  </div>

  <div class="bg-[#F9A03F]">
    <TestimonialsSection v-if="homeData && homeData.sections && homeData.sections.testimonials" :data="homeData.sections.testimonials" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import Autoplay from 'embla-carousel-autoplay';
import lazy from '@/utils/lazy';

const AboutSection = defineAsyncComponent(() => import('@/components/common/homeSections/AboutSection.vue'));
const GallerySection = defineAsyncComponent(() => import('@/components/common/homeSections/GallerySection.vue'));
const TimelineSection = defineAsyncComponent(() => import('@/components/common/homeSections/TimelineSection.vue'));
const TestimonialsSection = defineAsyncComponent(() => import('@/components/common/homeSections/TestimonialsSection.vue'));
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