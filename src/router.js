import { createRouter, createWebHistory } from 'vue-router';
import { InProgress } from '@/components';
import Home from '@/pages/Home.vue';
import Settings from '@/pages/Settings.vue';
import RedirectHandler from '@/pages/RedirectHandler.vue';
import store from './store';

export const routes = [
  {
    path: '/',
    alias: ['/', '/index', '', '/home', '/Home'],
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
      title: 'Home',
      requiresOverlay: true,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/about',
    alias: '/about-us',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: {
      requiresAuth: false,
      title: 'About',
      requiresOverlay: true,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/contact',
    alias: '/contact-us',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
    meta: {
      requiresAuth: false,
      title: 'Contact',
      requiresOverlay: true,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/websites',
    alias: '/websites',
    name: 'Websites',
    component: () => import('@/pages/Websites.vue'),
    meta: {
      requiresAuth: false,
      title: 'Websites',
      requiresOverlay: true,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/login',
    alias: '/signin',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      requiresAuth: false,
      title: 'Login',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/signup',
    alias: ['/create-account', '/sign-up'],
    name: 'Sign Up',
    component: () => import('@/pages/SignUp.vue'),
    meta: {
      requiresAuth: false,
      title: 'Sign Up',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/additionalinfo',
    alias: '/additional-info',
    name: 'Additional Info',
    component: () => import('@/pages/AdditionalInfo.vue'),
    meta: {
      requiresAuth: false,
      title: 'Additional Info',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/portfolio',
    alias: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/pages/Portfolio.vue'),
    meta: {
      requiresAuth: false,
      title: 'Portfolio',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/settings',
    alias: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: false,
      title: 'Settings',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/demo/lcc-powerapps',
    name: 'Logan City Council PowerApps',
    component: () => import('@/pages/demo/Demo_LCC_PowerApps.vue'),
    meta: {
      requiresAuth: false,
      title: 'Logan City Council PowerApps',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: true,
    },
  },
  {
    path: '/demo/lms-powerapps',
    name: 'Lifestyle Mentor Services PowerApps',
    component: () => import('@/pages/demo/Demo_LMS_PowerApps.vue'),
    meta: {
      requiresAuth: false,
      title: 'Lifestyle Mentor Services PowerApps',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: true,
    },
  },
  {
    path: '/demo/lms-webapp',
    name: 'Lifestyle Mentor Services Webapp',
    component: () => import('@/pages/demo/Demo_LMS_Webapp.vue'),
    meta: {
      requiresAuth: false,
      title: 'Lifestyle Mentor Services Webapp',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: true,
    },
  },
  {
    path: '/auth/home',
    alias: '/auth/home',
    name: 'Auth Home',
    component: () => import('@/pages/auth/Home.vue'),
    meta: {
      requiresAuth: true,
      title: 'Auth Home',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/auth/functions',
    alias: '/auth/function',
    name: 'Functions',
    component: () => import('@/pages/auth/Functions.vue'),
    meta: {
      requiresAuth: true,
      title: 'Functions',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/auth/protected',
    alias: '/auth/protected',
    name: 'Protected',
    component: () => import('@/pages/auth/Protected.vue'),
    meta: {
      requiresAuth: true,
      title: 'Protected',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/pages/system/Page404.vue'),
    meta: {
      requiresAuth: false,
      title: '404',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/r/:id',
    name: 'RedirectHandler',
    component: RedirectHandler,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.inProgress) {
    to.matched.forEach((record) => {
      record.components.default = InProgress;
    });
  }

  if (to.meta.requiresAuth) {
    const user = store.getters.user;

    if (!user) {
      next('/login');
    } else {
      const requiredFields = ['createdAt', 'userName', 'emailAddress', 'firstName', 'lastName', 'phoneNumber', 'country', 'updatedAt'];
      const missingFields = requiredFields.filter(field => !user[field]);

      if (missingFields.length > 0) {
        sessionStorage.setItem('intendedRoute', to.fullPath);
        next('/additionalinfo');
      } else {
        next();
      }
    }
  } else {
    next();
  }

  // Handle dynamic meta tags
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
