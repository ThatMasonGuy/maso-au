<template>
  <div class="bg-gray-100 min-h-screen flex ml-16">
    <Sidebar class="shadow-2xl" />
    <div class="flex flex-col flex-1 px-4 py-6">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-semibold text-gray-700">Learning Management System</h1>
      </div>
      <div class="flex justify-end items-center mb-4">
        <div class="relative flex space-x-2">
          <Select v-model="selectedOption">
            <SelectTrigger>
              <SelectValue placeholder="Filter by course type" class="text-gray-500">{{
            selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1) }}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="option in filteredOptions" :key="option.id" :value="option.value">{{ option.name }}
              </SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger as-child>
              <Button variant="outline" :class="cn(
            'w-[280px] text-muted-foreground justify-start text-left text-sm font-normal',
            !value && 'text-muted-foreground',
          )">
                <CalendarIcon class="mr-2 h-4 w-4 text-gray-400" />
                <template v-if="value.start">
                  <template v-if="value.end">
                    {{ df.format(value.start.toDate(getLocalTimeZone())) }} - {{
            df.format(value.end.toDate(getLocalTimeZone())) }}
                  </template>
                  <template v-else>
                    {{ df.format(value.start.toDate(getLocalTimeZone())) }}
                  </template>
                </template>
                <template v-else>
                  Pick a date range
                </template>
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <RangeCalendar v-model="value" initial-focus :number-of-months="2" />
            </PopoverContent>
          </Popover>
          <Input type="text" v-model="searchQuery" placeholder="Search bar..."
            class="px-4 py-2 bg-gray-200 rounded-md focus:outline-none" />
        </div>
      </div>

      <div class="relative mb-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-2">Upcoming Courses</h2>
        <div class="flex items-center">
          <div class="flex space-x-2 overflow-x-auto pb-2 flex-grow backdrop-blur-sm">
            <transition-group name="fade" tag="div" class="flex space-x-2">
              <Button v-for="session in filteredSessions" :key="session.id"
                class="px-4 py-2 bg-blue-500 text-white rounded-md whitespace-nowrap hover:bg-blue-600 transition-colors duration-300">
                <div>{{ session.name }}</div>
                <div v-if="dropdownOpen" class="text-sm text-gray-200">{{ getTimeUntil(session.startDate) }}</div>
              </Button>
            </transition-group>
          </div>
          <Button @click="toggleDropdown"
            class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </Button>
        </div>
      </div>

      <div class="relative flex-1 bg-white rounded-lg shadow-md p-4 backdrop-blur-sm">
        <TransitionGroup name="list" tag="ul" class="space-y-4 relative z-10">
          <template v-if="paginatedCourses.length">
            <li v-for="course in paginatedAndSortedCourses" :key="course.id"
              class="p-4 border border-gray-100 rounded-md hover:shadow-xl transition-all duration-300 relative group backdrop-blur-sm"
              :class="[
            { 'border-yellow-500': course.highlightSession && !course.userScheduled },
            { 'border-green-500': course.userScheduled },
            { 'border-gray-800 bg-gray-200 cursor-not-allowed hover:shadow-none': course.paused },
            { 'border-red-500 cursor-not-allowed hover:shadow-none': course.sessionFull },
            { 'border-yellow-500': course.almostFull && !course.sessionFull && !course.userScheduled },
          ]">
              <div class="grid grid-cols-2 gap-2">
                <div class="font-semibold">{{ course.name }}</div>
                <div class="text-right">{{ course.length }}</div>
                <div>{{ formattedDates(course) }}</div>
                <div class="text-right">{{ course.currentBookings }}/{{ course.maxAttendees }}</div>
                <div class="col-span-2 truncate">{{ course.description }}</div>
              </div>
              <div class="absolute -top-3 -left-3 flex space-x-1">
                <TooltipProvider>
                  <Tooltip v-if="course.highlightSession">
                    <TooltipTrigger>
                      <svg fill="none" height="30" viewBox="0 0 32 32" width="30" xmlns="http://www.w3.org/2000/svg"
                        id="fi_6142849">
                        <linearGradient id="paint0_linear_364_995" gradientUnits="userSpaceOnUse" x1="27.097" x2="1.308"
                          y1="29.141" y2="9.187">
                          <stop offset="0" stop-color="#ffb800" />
                          <stop offset="1" stop-color="#fff281" />
                        </linearGradient>
                        <path clip-rule="evenodd"
                          d="m17.5943 4.87146c-.0725-.71631-1.1162-.71631-1.1887 0-.0286.28234-.2519.50561-.5342.5342-.7163.07251-.7163 1.11621 0 1.18872.2823.02858.5056.25185.5342.53419.0725.71631 1.1162.71631 1.1887 0 .0286-.28234.2519-.50561.5342-.53419.7163-.07251.7163-1.11621 0-1.18872-.2823-.02859-.5056-.25186-.5342-.5342zm4.9429 2.55795c.2731-.97294 1.6524-.97294 1.9255 0l.7487 2.66669c.0942.3358.3567.5982.6925.6925l2.6666.7486c.973.2732.973 1.6524 0 1.9256l-2.6666.7486c-.3358.0943-.5983.3567-.6925.6925l-.7487 2.6667c-.2731.973-1.6524.973-1.9255 0l-.7487-2.6667c-.0943-.3358-.3567-.5982-.6925-.6925l-2.6667-.7486c-.9729-.2732-.9729-1.6524 0-1.9256l2.6667-.7486c.3358-.0943.5982-.3567.6925-.6925zm-12.36 4.60629c.7087-1.569 2.9368-1.569 3.6455 0l1.5998 3.5423c.2004.4437.5558.7991.9995.9995l3.5422 1.5998c1.5691.7086 1.5691 2.9368 0 3.6454l-3.5422 1.5999c-.4437.2004-.7991.5558-.9995.9995l-1.5998 3.5422c-.7087 1.569-2.9368 1.569-3.6455 0l-1.59981-3.5422c-.2004-.4437-.55578-.7991-.99949-.9995l-3.54224-1.5999c-1.56903-.7086-1.56903-2.9368 0-3.6454l3.54224-1.5998c.44371-.2004.79909-.5558.99949-.9995z"
                          fill="url(#paint0_linear_364_995)" fill-rule="evenodd" />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Session is highlighted</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip v-if="course.sessionFull">
                    <TooltipTrigger>
                      <svg height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"
                        id="fi_10308693">
                        <circle cx="256" cy="256" fill="#ff2147" r="256" />
                        <g fill="#fff">
                          <path
                            d="m256 307.2a35.89 35.89 0 0 1 -35.86-34.46l-4.73-119.44a35.89 35.89 0 0 1 35.86-37.3h9.46a35.89 35.89 0 0 1 35.86 37.3l-4.73 119.44a35.89 35.89 0 0 1 -35.86 34.46z" />
                          <rect height="71.66" rx="35.83" width="71.66" x="220.17" y="324.34" />
                        </g>
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Session is full</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip v-if="course.almostFull && !course.sessionFull">
                    <TooltipTrigger>
                      <svg height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"
                        id="fi_10308693">
                        <circle cx="256" cy="256" fill="#FFBF00" r="256" />
                        <g fill="#fff">
                          <path
                            d="m256 307.2a35.89 35.89 0 0 1 -35.86-34.46l-4.73-119.44a35.89 35.89 0 0 1 35.86-37.3h9.46a35.89 35.89 0 0 1 35.86 37.3l-4.73 119.44a35.89 35.89 0 0 1 -35.86 34.46z" />
                          <rect height="71.66" rx="35.83" width="71.66" x="220.17" y="324.34" />
                        </g>
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Session is almost full.</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip v-if="course.userScheduled">
                    <TooltipTrigger>
                      <svg version="1.1" id="fi_190411" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" height="30"
                        width="30" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <circle style="fill:#32BA7C;" cx="256" cy="256" r="256"></circle>
                        <path style="fill:#FFFFFF;" d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8
c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"></path>
                        <path style="fill:#FFFFFF;" d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2
c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"></path>
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>You are booked into this session.</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip v-if="course.paused">
                    <TooltipTrigger>
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="fi_15525354">
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="Layer_1-2" data-name="Layer 1">
                            <circle cx="12.01" cy="12" fill="#cf1f25" r="11"></circle>
                            <path
                              d="m12.06 4.74a7.2 7.2 0 1 0 7.2 7.2 7.21 7.21 0 0 0 -7.2-7.2zm0 13.07a5.84 5.84 0 0 1 -3.44-1.12l8.12-8.29a5.86 5.86 0 0 1 -4.68 9.41zm0-11.74a5.84 5.84 0 0 1 3.61 1.24l-8.16 8.33a5.86 5.86 0 0 1 4.55-9.57z"
                              fill="#fff"></path>
                            <path d="m0 0h24v24h-24z" fill="none"></path>
                          </g>
                        </g>
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This course is currently unavailable.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <button @click="toggleWishlist(course)"
                class="absolute rounded-full p-2 bg-white shadow-md -top-3 -right-3 transition-all duration-300" :class="[
            { 'opacity-0 group-hover:opacity-100': !course.userWishlisted },
            { 'text-red-500': course.userWishlisted },
            { 'text-gray-400 hover:text-red-500': !course.userWishlisted }
          ]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                  :fill="course.userWishlisted ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </li>
          </template>
          <template v-else>
            <li class="p-4 text-center text-gray-500">
              No courses found
            </li>
          </template>
        </TransitionGroup>
      </div>

      <Pagination v-if="totalPages > 1" class="mt-4">
        <PaginationFirst @click="changePage(1)" :disabled="currentPage === 1" />
        <PaginationPrev @click="changePage(currentPage - 1)" :disabled="currentPage === 1" />
        <PaginationList>
          <PaginationListItem v-for="page in totalPages" :key="page" :value="page" :isActive="currentPage === page"
            @click="changePage(page)">
            {{ page }}
          </PaginationListItem>
        </PaginationList>
        <PaginationNext @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" />
        <PaginationLast @click="changePage(totalPages)" :disabled="currentPage === totalPages" />
      </Pagination>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { useStore } from 'vuex';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CalendarIcon } from '@heroicons/vue/24/outline'
import Sidebar from '@/components/authenticated/learning/Sidebar.vue'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const df = new DateFormatter('en-AU', {
  dateStyle: 'medium',
})

const value = ref({
  start: null,
  end: null,
})

const store = useStore();
const user = computed(() => store.getters.user);
const coursesData = ref([
  {
    id: 1,
    name: 'Advanced JavaScript',
    description: 'Learn advanced JavaScript concepts and techniques.',
    sessionDates: [
      { date: '2024-07-15', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-22', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-29', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-05', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-12', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-19', startTime: '09:00 AM', endTime: '05:00 PM' },
    ],
    currentBookings: 5,
    maxAttendees: 10,
    userWishlisted: false,
    imageUrl: 'image-url-1',
    userScheduled: false,
    highlightSession: true,
    courseType: ['fullstack'],
    paused: false,
  },
  {
    id: 2,
    name: 'UI/UX Design Fundamentals',
    description: 'Learn the fundamentals of UI/UX design.',
    sessionDates: [
      { date: '2024-08-01', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-08-08', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-08-15', startTime: '10:00 AM', endTime: '04:00 PM' },
    ],
    currentBookings: 10,
    maxAttendees: 10,
    userWishlisted: false,
    imageUrl: 'image-url-2',
    userScheduled: false,
    highlightSession: false,
    courseType: ['design'],
    paused: false,
  },
  {
    id: 3,
    name: 'Data Structures and Algorithms',
    description: 'Learn data structures and algorithms in-depth.',
    sessionDates: [
      { date: '2024-08-15', startTime: '11:00 AM', endTime: '03:00 PM' },
      { date: '2024-08-22', startTime: '11:00 AM', endTime: '03:00 PM' },
      { date: '2024-08-29', startTime: '11:00 AM', endTime: '03:00 PM' },
      { date: '2024-09-05', startTime: '11:00 AM', endTime: '03:00 PM' },
      { date: '2024-09-12', startTime: '11:00 AM', endTime: '03:00 PM' },
      { date: '2024-09-19', startTime: '11:00 AM', endTime: '03:00 PM' },
      { date: '2024-09-26', startTime: '11:00 AM', endTime: '03:00 PM' },
      { date: '2024-10-03', startTime: '11:00 AM', endTime: '03:00 PM' },
    ],
    currentBookings: 7,
    maxAttendees: 10,
    userWishlisted: false,
    imageUrl: 'image-url-3',
    userScheduled: false,
    highlightSession: false,
    courseType: ['backend'],
    paused: true,
  },
  {
    id: 4,
    name: 'Machine Learning Basics',
    description: 'Introduction to machine learning concepts.',
    sessionDates: [
      { date: '2024-09-01', startTime: '09:30 AM', endTime: '04:30 PM' },
      { date: '2024-09-08', startTime: '09:30 AM', endTime: '04:30 PM' },
      { date: '2024-09-15', startTime: '09:30 AM', endTime: '04:30 PM' },
      { date: '2024-09-22', startTime: '09:30 AM', endTime: '04:30 PM' },
      { date: '2024-09-29', startTime: '09:30 AM', endTime: '04:30 PM' },
    ],
    currentBookings: 3,
    maxAttendees: 5,
    userWishlisted: false,
    imageUrl: 'image-url-4',
    userScheduled: false,
    highlightSession: false,
    courseType: ['ai'],
    paused: false,
  },
  {
    id: 5,
    name: 'Fullstack Web Development',
    description: 'Become a fullstack web developer.',
    sessionDates: [
      { date: '2024-07-01', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-08', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-15', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-22', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-29', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-05', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-12', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-19', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-26', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-09-02', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-09-09', startTime: '08:00 AM', endTime: '05:00 PM' },
      { date: '2024-09-16', startTime: '08:00 AM', endTime: '05:00 PM' },
    ],
    currentBookings: 8,
    maxAttendees: 10,
    userWishlisted: false,
    imageUrl: 'image-url-5',
    userScheduled: true,
    highlightSession: true,
    courseType: ['fullstack'],
    paused: false,
  },
  {
    id: 6,
    name: 'Frontend Development',
    description: 'Learn frontend development skills.',
    sessionDates: [
      { date: '2024-07-05', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-12', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-19', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-07-26', startTime: '09:00 AM', endTime: '05:00 PM' },
    ],
    currentBookings: 6,
    maxAttendees: 10,
    userWishlisted: false,
    imageUrl: 'image-url-6',
    userScheduled: false,
    highlightSession: false,
    courseType: ['frontend'],
    paused: false,
  },
  {
    id: 7,
    name: 'Backend Development',
    description: 'Master backend development techniques.',
    sessionDates: [
      { date: '2024-07-10', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-07-17', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-07-24', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-07-31', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-08-07', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-08-14', startTime: '10:00 AM', endTime: '04:00 PM' },
    ],
    currentBookings: 4,
    maxAttendees: 10,
    userWishlisted: false,
    imageUrl: 'image-url-7',
    userScheduled: false,
    highlightSession: false,
    courseType: ['backend'],
    paused: false,
  },
  {
    id: 8,
    name: 'Cyber Security Basics',
    description: 'Learn the basics of cyber security.',
    sessionDates: [
      { date: '2024-08-10', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-17', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-24', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-08-31', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-09-07', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-09-14', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-09-21', startTime: '09:00 AM', endTime: '05:00 PM' },
      { date: '2024-09-28', startTime: '09:00 AM', endTime: '05:00 PM' },
    ],
    currentBookings: 2,
    maxAttendees: 5,
    userWishlisted: false,
    imageUrl: 'image-url-8',
    userScheduled: false,
    highlightSession: false,
    courseType: ['security'],
    paused: false,
  },
  {
    id: 9,
    name: 'Mobile App Development',
    description: 'Build and develop mobile applications.',
    sessionDates: [
      { date: '2024-08-05', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-08-12', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-08-19', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-08-26', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-09-02', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-09-09', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-09-16', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-09-23', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-09-30', startTime: '10:00 AM', endTime: '04:00 PM' },
      { date: '2024-10-07', startTime: '10:00 AM', endTime: '04:00 PM' },
    ],
    currentBookings: 6,
    maxAttendees: 10,
    userWishlisted: false,
    imageUrl: 'image-url-9',
    userScheduled: false,
    highlightSession: false,
    courseType: ['mobile'],
    paused: false,
  },
  {
    id: 10,
    name: 'Cloud Computing',
    description: 'Learn cloud computing and related technologies.',
    sessionDates: [
      { date: '2024-08-15', startTime: '09:00 AM', endTime: '03:00 PM' },
      { date: '2024-08-22', startTime: '09:00 AM', endTime: '03:00 PM' },
      { date: '2024-08-29', startTime: '09:00 AM', endTime: '03:00 PM' },
      { date: '2024-09-05', startTime: '09:00 AM', endTime: '03:00 PM' },
      { date: '2024-09-12', startTime: '09:00 AM', endTime: '03:00 PM' },
    ],
    currentBookings: 4,
    maxAttendees: 10,
    userWishlisted: false,
    imageUrl: 'image-url-10',
    userScheduled: false,
    highlightSession: false,
    courseType: ['cloud'],
    paused: false,
  },
])

const courses = computed(() =>
  coursesData.value.map(course => ({
    ...course,
    length: `${course.sessionDates.length} days`,
    startDate: course.sessionDates[0].date,
    startTime: course.sessionDates[0].startTime,
    endDate: course.sessionDates[course.sessionDates.length - 1].date,
    endTime: course.sessionDates[course.sessionDates.length - 1].endTime,
    almostFull: course.currentBookings >= course.maxAttendees * 0.8,
    sessionFull: course.currentBookings >= course.maxAttendees,
  }))
);

const selectedOption = ref('')
const searchQuery = ref('')
const dropdownOpen = ref(false)
const currentPage = ref(1)
const itemsPerPage = 20

const filteredOptions = computed(() => {
  const uniqueTypes = new Set(['All Courses', 'Wishlisted']);
  courses.value.forEach(course => {
    course.courseType.forEach(type => {
      uniqueTypes.add(type.charAt(0).toUpperCase() + type.slice(1));
    });
  });
  return Array.from(uniqueTypes).map((type, index) => ({
    id: index,
    name: type,
    value: type === 'All Courses' ? 'all' : type.toLowerCase(),
  }));
});

const toggleWishlist = (course) => {
  const updatedCourse = { ...course, userWishlisted: !course.userWishlisted };
  const index = coursesData.value.findIndex(c => c.id === course.id);
  coursesData.value[index] = updatedCourse;

  toast.success(`${updatedCourse.name} ${updatedCourse.userWishlisted ? 'added to' : 'removed from'} wishlist`);
};

const sortedCourses = computed(() => {
  let filteredCourses = courses.value;

  if (selectedOption.value) {
    if (selectedOption.value === 'wishlisted') {
      filteredCourses = filteredCourses.filter(course => course.userWishlisted);
    } else if (selectedOption.value !== 'all') {
      filteredCourses = filteredCourses.filter(course =>
        course.courseType.includes(selectedOption.value)
      );
    }
  }

  if (value.value.start && value.value.end) {
    const startDate = value.value.start.toDate(getLocalTimeZone());
    const endDate = value.value.end.toDate(getLocalTimeZone());
    filteredCourses = filteredCourses.filter(course => {
      const courseStartDate = new Date(course.startDate);
      const courseEndDate = new Date(course.endDate);
      return courseStartDate >= startDate && courseEndDate <= endDate;
    });
  }

  if (searchQuery.value) {
    filteredCourses = filteredCourses.filter(course =>
      course.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  return filteredCourses.sort((a, b) => {
    if (a.highlightSession !== b.highlightSession) {
      return a.highlightSession ? -1 : 1;
    }
    if (a.userWishlisted !== b.userWishlisted) {
      return a.userWishlisted ? -1 : 1;
    }
    return new Date(a.startDate) - new Date(b.startDate);
  });
});

const paginatedCourses = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return sortedCourses.value.slice(startIndex, endIndex);
});

const filteredSessions = computed(() => {
  let sessions = courses.value.filter(course => course.userScheduled);

  if (selectedOption.value && selectedOption.value !== 'all') {
    sessions = sessions.filter(course =>
      course.courseType.includes(selectedOption.value)
    );
  }

  if (value.value.start && value.value.end) {
    const startDate = value.value.start.toDate(getLocalTimeZone());
    const endDate = value.value.end.toDate(getLocalTimeZone());
    sessions = sessions.filter(course => {
      const courseStartDate = new Date(course.startDate);
      const courseEndDate = new Date(course.endDate);
      return courseStartDate >= startDate && courseEndDate <= endDate;
    });
  }

  return sessions.map(course => ({
    id: course.id,
    name: course.name,
    startDate: new Date(course.startDate),
  }));
});

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function getTimeUntil(date) {
  const now = new Date();
  const difference = new Date(date) - now;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return `${days}d ${hours}h`;
}

const totalPages = computed(() => Math.ceil(sortedCourses.value.length / itemsPerPage));

const paginatedAndSortedCourses = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return sortedCourses.value.slice(startIndex, endIndex);
});

function changePage(page) {
  currentPage.value = page;
}

function formattedDates(course) {
  const startDate = new Date(course.startDate);
  const endDate = new Date(course.endDate);
  return `${df.format(startDate)} - ${df.format(endDate)}`;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
/* I have built this end user session selection page, for upcoming courses. I have also built this page that allows admins to create new courses, now I would like for you to create me a page where an admin can see all the courses in a grid array, then select one and add a session to it, or view in detail current sessions for the selected courses */