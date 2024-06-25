import { createRouter, createWebHistory } from 'vue-router';
import InProgress from '@/components/InProgress.vue';
import Home from '@/pages/Home.vue';
import Settings from '@/pages/Settings.vue';
import RedirectHandler from '@/pages/RedirectHandler.vue';
import store from './store';

const routes = [

  // -------------------------------- ROOT --------------------------------

  {
    path: '/',
    alias: ['/', '/index', '', '/home', '/Home'],
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
      title: 'Home',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome to Maso.au, the home page of our comprehensive platform offering a variety of features and services to enhance your online experience.'
        },
        {
          property: 'og:title',
          content: 'Home - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Welcome to Maso.au, the home page of our comprehensive platform offering a variety of features and services to enhance your online experience.'
        }
      ],
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
      title: 'About Us',
      metaTags: [
        {
          name: 'description',
          content: 'Learn more about Maso.au, our mission, values, and the dedicated team behind our platform.'
        },
        {
          property: 'og:title',
          content: 'About Us - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Learn more about Maso.au, our mission, values, and the dedicated team behind our platform.'
        }
      ],
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
      title: 'Contact Us',
      metaTags: [
        {
          name: 'description',
          content: 'Get in touch with the Maso.au team. We are here to help you with any questions or support you may need.'
        },
        {
          property: 'og:title',
          content: 'Contact Us - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Get in touch with the Maso.au team. We are here to help you with any questions or support you may need.'
        }
      ],
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
      metaTags: [
        {
          name: 'description',
          content: 'Explore the various websites developed by Maso.au, showcasing our expertise in web development and design.'
        },
        {
          property: 'og:title',
          content: 'Websites - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Explore the various websites developed by Maso.au, showcasing our expertise in web development and design.'
        }
      ],
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
      metaTags: [
        {
          name: 'description',
          content: 'Access your Maso.au account by logging in with your credentials.'
        },
        {
          property: 'og:title',
          content: 'Login - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Access your Maso.au account by logging in with your credentials.'
        }
      ],
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
      metaTags: [
        {
          name: 'description',
          content: 'Create a new account on Maso.au to access our exclusive features and services.'
        },
        {
          property: 'og:title',
          content: 'Sign Up - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Create a new account on Maso.au to access our exclusive features and services.'
        }
      ],
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
      metaTags: [
        {
          name: 'description',
          content: 'Provide additional information to complete your profile on Maso.au and enhance your experience.'
        },
        {
          property: 'og:title',
          content: 'Additional Info - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Provide additional information to complete your profile on Maso.au and enhance your experience.'
        }
      ],
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
      metaTags: [
        {
          name: 'description',
          content: 'View the portfolio of completed projects by Maso.au, demonstrating our skills and accomplishments.'
        },
        {
          property: 'og:title',
          content: 'Portfolio - Maso.au'
        },
        {
          property: 'og:description',
          content: 'View the portfolio of completed projects by Maso.au, demonstrating our skills and accomplishments.'
        }
      ],
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
      metaTags: [
        {
          name: 'description',
          content: 'Adjust your account settings and preferences on Maso.au to customize your experience.'
        },
        {
          property: 'og:title',
          content: 'Settings - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Adjust your account settings and preferences on Maso.au to customize your experience.'
        }
      ],
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },

  // -------------------------------- DEMO --------------------------------

  {
    path: '/demo/lcc-powerapps',
    name: 'Logan City Council PowerApps',
    component: () => import('@/pages/demo/Demo_LCC_PowerApps.vue'),
    meta: {
      requiresAuth: false,
      title: 'LCC PowerApps',
      metaTags: [
        {
          name: 'description',
          content: 'Explore the PowerApps developed for Logan City Council by Maso.au, showcasing our innovative solutions.'
        },
        {
          property: 'og:title',
          content: 'Logan City Council PowerApps - Demo - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Explore the PowerApps developed for Logan City Council by Maso.au, showcasing our innovative solutions.'
        }
      ],
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
      title: 'LMS PowerApps',
      metaTags: [
        {
          name: 'description',
          content: 'Discover the PowerApps created for Lifestyle Mentor Services by Maso.au, highlighting our expertise.'
        },
        {
          property: 'og:title',
          content: 'Lifestyle Mentor Services PowerApps - Demo - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Discover the PowerApps created for Lifestyle Mentor Services by Maso.au, highlighting our expertise.'
        }
      ],
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
      title: 'Lifestyle Mentor Services Webapp - Demo - Maso.au',
      metaTags: [
        {
          name: 'description',
          content: 'See the web application developed for Lifestyle Mentor Services by Maso.au, showcasing our capabilities.'
        },
        {
          property: 'og:title',
          content: 'Lifestyle Mentor Services Webapp - Demo - Maso.au'
        },
        {
          property: 'og:description',
          content: 'See the web application developed for Lifestyle Mentor Services by Maso.au, showcasing our capabilities.'
        }
      ],
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: true,
    },
  },

  // -------------------------------- AUTH --------------------------------
  
  {
    path: '/auth/home',
    alias: '/auth/home',
    name: 'Auth Home',
    component: () => import('@/pages/auth/Home.vue'),
    meta: {
      requiresAuth: true,
      title: 'Auth Home',
      metaTags: [
        {
          name: 'description',
          content: 'Home page for authenticated users of Maso.au, offering personalized features and services.'
        },
        {
          property: 'og:title',
          content: 'Authenticated Home - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Home page for authenticated users of Maso.au, offering personalized features and services.'
        }
      ],
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
      metaTags: [
        {
          name: 'description',
          content: 'Access various functions available to authenticated users on Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Functions - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Access various functions available to authenticated users on Maso.au.'
        }
      ],
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/auth/dashboard',
    alias: '/auth/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/auth/Dashboard.vue'),
    meta: {
      requiresAuth: true,
      title: 'Dashboard',
      metaTags: [
        {
          name: 'description',
          content: 'Dashboard page accessible only to authorized users of Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Dashboard - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Dashboard page accessible only to authorized users of Maso.au.'
        }
      ],
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },

  // -------------------------------- FUNCTIONS --------------------------------

  {
    path: '/auth/functions/url-shortener',
    alias: '/auth/functions/url-shortener',
    name: 'Url Shortener',
    component: () => import('@/pages/auth/functions/UrlShortener.vue'),
    meta: {
      requiresAuth: true,
      title: 'Url Shortener',
      metaTags: [
        {
          name: 'description',
          content: 'Url Shortener page accessible only to authorized users of Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Url Shortener - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Url Shortener page accessible only to authorized users of Maso.au.'
        }
      ],
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/auth/functions/invoice-generator',
    alias: '/auth/functions/invoice-generator',
    name: 'Invoice Generator',
    component: () => import('@/pages/auth/functions/InvoiceGenerator.vue'),
    meta: {
      requiresAuth: true,
      title: 'Invoice Generator',
      metaTags: [
        {
          name: 'description',
          content: 'Invoice Generator page accessible only to authorized users of Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Invoice Generator - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Invoice Generator page accessible only to authorized users of Maso.au.'
        }
      ],
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  
  // -------------------------------- LEARNING MANAGEMENT SYSTEM --------------------------------

  {
    path: '/auth/learning/home',
    alias: [ '/auth/learning/', '/auth/learning/home/', '/auth/learning' ],
    name: 'Learning Management System',
    component: () => import('@/pages/auth/learning/Home.vue'),
    meta: {
      requiresAuth: true,
      title: 'Learning Management System',
      metaTags: [
        {
          name: 'description',
          content: 'Learning Management System page accessible only to authorized users of Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Learning Management System - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Learning Management System page accessible only to authorized users of Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/learning/admin/addcourse',
    alias: [ '/auth/learning/admin/addcourse/', '/auth/learning/admin/add-course', '/auth/learning/admin/add-course/' ],
    name: 'LMS Admin - Add Course',
    component: () => import('@/pages/auth/learning/admin/AddCourse.vue'),
    meta: {
      requiresAuth: true,
      title: 'Learning Management System',
      metaTags: [
        {
          name: 'description',
          content: 'Learning Management System page accessible only to authorized users of Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Learning Management System - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Learning Management System page accessible only to authorized users of Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },

  // -------------------------------- SYSTEM --------------------------------

  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/pages/system/Page404.vue'),
    meta: {
      requiresAuth: false,
      title: '404 - Page Not Found',
      metaTags: [
        {
          name: 'description',
          content: 'The page you are looking for does not exist on Maso.au.'
        },
        {
          property: 'og:title',
          content: '404 - Page Not Found - Maso.au'
        },
        {
          property: 'og:description',
          content: 'The page you are looking for does not exist on Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/r/view/:id',
    name: 'View Redirect',
    component: RedirectHandler,
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
      return next('/login');
    } else {
      const requiredFields = ['createdAt', 'userName', 'emailAddress', 'firstName', 'lastName', 'phoneNumber', 'country', 'updatedAt'];
      const missingFields = requiredFields.filter(field => !user[field]);

      if (missingFields.length > 0) {
        sessionStorage.setItem('intendedRoute', to.fullPath);
        return next('/additionalinfo');
      } else {
        return next();
      }
    }
  }

  // Handle dynamic meta tags
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if (nearestWithMeta) {
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    }).forEach(tag => document.head.appendChild(tag));
  }

  next();
});

export default router;