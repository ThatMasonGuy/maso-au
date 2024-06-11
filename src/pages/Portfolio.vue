<template>
  <div
    class="mx-auto pb-12 pt-[--header-height] w-full min-h-[--adjusted-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600 lg:px-28 px-6">
    <div class="lg:max-w-4xl mx-auto" v-if="portfolio">
      <div>
        <header class="text-center mb-12 mt-5">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-100">{{ portfolio.details.name.firstName
            }} {{ portfolio.details.name.lastName }}</h1>
          <p class="text-2xl text-gray-200">{{ portfolio.details.title }}</p>
        </header>
      </div>
      <Accordion type="multiple" class="w-full text-gray-100" collapsible :default-value="['about']">
        <AccordionItem value="about">
          <AccordionTrigger class="flex items-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">{{ portfolio.aboutMe.title }}
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <p class="text-md md:text-lg text-gray-300 flex mb-4">{{ portfolio.aboutMe.description }}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="skills">
          <AccordionTrigger class="flex items-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">{{ portfolio.skills.title }}
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <div class="flexbox flex-wrap">
              <span v-for="skill in portfolio.skills.options" :key="skill"
                class="inline-block bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm sm:text-md md:text-lg mb-4 mr-4 transition duration-200 ease-in-out">{{
      skill }}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="projects">
          <AccordionTrigger class="flex items-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">{{ portfolio.projects.title }}
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <div v-for="project in portfolio.projects.options" :key="project.title"
              class="mb-6 flex flex-col sm:flex-row items-center sm:justify-between">
              <div class="w-full sm:w-1/2 sm:pr-8">
                <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-200">{{ project.title }}</h3>
                <p class="text-sm sm:text-md md:text-lg text-gray-300 mb-4">{{ project.description }}</p>
                <div class="hidden sm:flex sm:space-x-4 justify-between sm:justify-start mb-1 sm:mb-0">
                  <router-link v-if="project.viewDemo" :to="project.viewDemo"
                    class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">View
                    Demo</router-link>
                  <a v-if="project.viewLive" :href="project.viewLive"
                    class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">View
                    Live</a>
                </div>
              </div>
              <div class="w-full sm:w-1/2 mt-4 sm:mt-0 mb-4">
                <Dialog>
                  <DialogTrigger as-child>
                    <img :src="project.image" :alt="project.name"
                      class="rounded-lg w-full sm:w-96 shadow-2xl hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
                  </DialogTrigger>
                  <DialogContent class="sm:max-w-5xl bg-gray-100">
                    <DialogHeader>
                      <DialogTitle>{{ project.title }}</DialogTitle>
                      <DialogDescription>
                        {{ project.description }}
                      </DialogDescription>
                    </DialogHeader>
                    <img :src="project.image" alt="Project Image" class="w-full rounded-lg shadow-xl">
                  </DialogContent>
                </Dialog>
              </div>
              <div class="flex sm:hidden flex-row justify-between mt-2 w-full">
                <router-link v-if="project.viewDemo" :to="project.viewDemo"
                  class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">View
                  Demo</router-link>
                <a v-if="project.viewLive" :href="project.viewLive"
                  class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">View
                  Live</a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="workExperience">
          <AccordionTrigger class="flex items-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">{{
      portfolio.workExperience.title }}</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div v-for="job in sortedWorkExperience" :key="job.title" class="mb-6">
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-200">{{ job.title }}</h3>
              <h4 class="text-sm sm:text-md md:text-lg font-semibold text-gray-300 mb-2">{{ job.company }} | {{
      formatDate(job.duration.start) }} - {{ job.duration.end ? formatDate(job.duration.end) : 'Present' }}
              </h4>
              <ul class="list-disc list-inside text-sm sm:text-md md:text-lg text-gray-300"
                style="list-style-position: outside; padding-left: 1em;">
                <li v-for="point in job.description" :key="point" class="pb-1">{{ point }}</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="education">
          <AccordionTrigger class="flex items-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">{{ portfolio.education.title }}
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <div v-for="edu in sortedEducation" :key="edu.title" class="mb-6">
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-gray-200">{{ edu.title }}</h3>
              <p class="text-sm sm:text-md md:text-lg font-semibold text-gray-300 mb-2">{{ edu.school }} | {{
      formatDate(edu.duration.start) }} - {{ edu.duration.end ? formatDate(edu.duration.end) : 'Present' }}
              </p>
              <p class="text-sm sm:text-md md:text-lg text-gray-300">{{ edu.description }}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="contact">
          <AccordionTrigger class="flex items-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">{{ portfolio.contact.title }}
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <div v-for="con in portfolio.contact.options" :key="con.title" class="mb-6 flex items-center">
              <a :href="con.link" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-center cursor-pointer">
                <img :src="con.icon" alt="Icon" class="w-8 h-8 mr-2">
                <h3
                  class="text-sm sm:text-md md:text-lg font-semibold text-blue-700 hover:text-blue-500 hover:underline">
                  {{ con.title }}</h3>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div class="text-center mt-8 font-bold text-gray-100 text-sm sm:text-md md:text-lg">
        Want to download the resume? <a :href="portfolio.details.resume.link" download
          class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg whitespace-nowrap">Click
          here</a>
      </div>
      <div class="text-center mt-8 font-bold text-gray-100 text-sm sm:text-md md:text-lg">
        Want to generate a PDF of the resume? <button @click="generatePDF"
          class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg whitespace-nowrap">Click
          here</button>
      </div>
    </div>
    <div v-else class="text-center text-gray-100">Loading...</div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import jsPDF from 'jspdf';
import { useStore } from 'vuex';
import moment from 'moment';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default {
  components: {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  },
  setup() {
    const store = useStore();
    const isDialogOpen = ref(false);
    const portfolio = computed(() => store.state.portfolio);

    onMounted(() => {
      try {
        store.dispatch('fetchPortfolio');
      } catch (error) {
        console.error(error);
      }
    });

    const openDialog = () => {
      isDialogOpen.value = true;
    };

    const closeDialog = () => {
      isDialogOpen.value = false;
    };

    const formatDate = (date) => {
      if (date && date.seconds) {
        return moment(date.seconds * 1000).format('MMMM YYYY');
      }
      return 'Present';
    };

    const sortItemsByEndDate = (items) => {
      if (items && typeof items === 'object') {
        items = Object.values(items);
      }
      if (!Array.isArray(items)) {
        console.error('Expected an array of items, but got:', items);
        return [];
      }

      items.sort((a, b) => {
        const endA = a.duration?.end?.seconds || Infinity;
        const endB = b.duration?.end?.seconds || Infinity;

        return endB - endA;
      });

      return items;
    };

    const sortedWorkExperience = computed(() => {
      const workExperience = portfolio.value?.workExperience?.options;
      const sorted = sortItemsByEndDate(workExperience);
      return sorted;
    });

    const sortedEducation = computed(() => {
      const education = portfolio.value?.education?.options;
      const sorted = sortItemsByEndDate(education);
      return sorted;
    });

    const generatePDF = () => {
      if (!portfolio.value || !portfolio.value.details || !portfolio.value.contact || !portfolio.value.contact.options || typeof portfolio.value.contact.options !== 'object' || !portfolio.value.skills || !portfolio.value.skills.options) {
        console.error("Portfolio data is not structured as expected or missing some parts.");
        console.log("portfolio.value:", portfolio.value);
        return;
      }

      const { name, title } = portfolio.value.details;
      const contact = portfolio.value.contact.options;
      const skills = portfolio.value.skills.options;
      const topThreeWorkExperience = sortedWorkExperience.value.slice(0, 3);
      const education = sortedEducation.value;

      const doc = new jsPDF();

      // Header
      doc.setFontSize(20);
      doc.setFont(undefined, 'bold');
      doc.text(`${name.firstName} ${name.lastName}`, 10, 10);
      doc.setFontSize(16);
      doc.setFont(undefined, 'normal');
      doc.text(title, 10, 20);

      // Sidebar - Contact Information
      let sidebarX = 150;
      let sidebarY = 30;
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text('Contact Information', sidebarX, sidebarY);
      sidebarY += 10;
      doc.setFont(undefined, 'normal');
      Object.values(contact).forEach((con) => {
        doc.text(`${con.title}: ${con.link}`, sidebarX, sidebarY);
        sidebarY += 10;
      });

      // Sidebar - Skills
      sidebarY += 10;
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text('Skills', sidebarX, sidebarY);
      sidebarY += 10;
      doc.setFont(undefined, 'normal');
      skills.forEach((skill) => {
        doc.text(skill, sidebarX, sidebarY);
        sidebarY += 10;
      });

      // Sidebar - References Header
      sidebarY += 10;
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text('References', sidebarX, sidebarY);

      // Main Content - Work Experience
      let mainContentY = 40;
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text('Work Experience', 10, mainContentY);
      doc.setFont(undefined, 'normal');
      mainContentY += 10;
      topThreeWorkExperience.forEach((job, index) => {
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        mainContentY += 10;
        doc.text(`${job.title} at ${job.company}`, 10, mainContentY);
        mainContentY += 5;
        doc.setFontSize(12);
        doc.setFont(undefined, 'italic');
        doc.text(`${formatDate(job.duration.start)} - ${job.duration.end ? formatDate(job.duration.end) : 'Present'}`, 10, mainContentY);
        doc.setFont(undefined, 'normal');
        job.description.forEach((desc, descIndex) => {
          mainContentY += 5;
          doc.text(`- ${desc}`, 10, mainContentY);
        });
        mainContentY += 10;
      });

      // Main Content - Education
      mainContentY += 10;
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text('Education', 10, mainContentY);
      doc.setFont(undefined, 'normal');
      mainContentY += 10;
      education.forEach((edu, index) => {
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        mainContentY += 10;
        doc.text(`${edu.title} at ${edu.school}`, 10, mainContentY);
        mainContentY += 5;
        doc.setFontSize(12);
        doc.setFont(undefined, 'italic');
        doc.text(`${formatDate(edu.duration.start)} - ${edu.duration.end ? formatDate(edu.duration.end) : 'Present'}`, 10, mainContentY);
        mainContentY += 5;
        doc.setFont(undefined, 'normal');
        doc.text(`${edu.description}`, 10, mainContentY);
        mainContentY += 10;
      });

      doc.save('Mason-Bartholomai-Resume.pdf');
    };

    return {
      portfolio,
      isDialogOpen,
      openDialog,
      closeDialog,
      formatDate,
      sortedWorkExperience,
      sortedEducation,
      generatePDF,
    }
  }
}
</script>