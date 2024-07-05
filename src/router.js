import { createRouter, createWebHistory } from 'vue-router';
import InProgress from '@/components/InProgress.vue';
import Home from '@/pages/Home.vue';
import Settings from '@/pages/Settings.vue';
import RedirectHandler from '@/pages/RedirectHandler.vue';
import store from './store';
import { useLoading } from '@/utils/useLoading';

const { startLoading, stopLoading } = useLoading();

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
    alias: ['/auth/home/', '/auth/', '/auth'],
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
    alias: ['/auth/function', '/auth/function/', '/auth/functions/'],
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
    alias: '/auth/dashboard/',
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
    alias: ['/auth/functions/url-shortener/', '/auth/functions/urlshortener', '/auth/functions/urlshortener/'],
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
    alias: ['/auth/functions/invoice-generator/', '/auth/functions/invoicegenerator', '/auth/functions/invoicegenerator/'],
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

  // -------------------------------- SUPER ADMIN --------------------------------

  {
    path: '/auth/admin',
    alias: '/auth/admin/',
    name: 'Super Admin',
    component: () => import('@/pages/auth/admin/SuperAdmin.vue'),
    meta: {
      requiresAuth: true,
      title: 'Super Admin',
      metaTags: [
        {
          name: 'description',
          content: 'Super Admin page accessible only to authorized users of Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Super Admin - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Super Admin page accessible only to authorized users of Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
      requiresAdmin: true,
    },
  },
  {
    path: '/auth/admin/my-settings',
    alias: ['/auth/admin/my-settings/', '/auth/admin/my-setting', '/auth/admin/my-setting/'],
    name: 'Super Admin - My Settings',
    component: () => import('@/pages/auth/admin/UserSettings.vue'),
    meta: {
      requiresAuth: true,
      title: 'Super Admin - My Settings',
      metaTags: [
        {
          name: 'description',
          content: 'Super Admin page accessible only to authorized users of Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Super Admin - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Super Admin page accessible only to authorized users of Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
      requiresAdmin: true,
    },
  },

  // -------------------------------- LEARNING MODULE --------------------------------

  {
    path: '/auth/learning/admin/dashboard',
    alias: ['/auth/learning/admin/dashboard/', '/auth/learning/admin', '/auth/learning/admin/'],
    name: 'LMS Admin - Dashboard',
    component: () => import('@/pages/auth/learning/admin/Dashboard.vue'),
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
    path: '/auth/learning/home',
    alias: ['/auth/learning/', '/auth/learning/home/', '/auth/learning'],
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
    alias: ['/auth/learning/admin/addcourse/', '/auth/learning/admin/add-course', '/auth/learning/admin/add-course/'],
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
  {
    path: '/auth/learning/admin/courses/:id/edit',
    alias: ['/auth/learning/admin/courses/:id/edit/'],
    name: 'LMS Admin - Edit Course',
    component: () => import('@/pages/auth/learning/admin/EditCourse.vue'),
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
    path: '/auth/learning/admin/courses/:id/sessions',
    alias: ['/auth/learning/admin/courses/:id/sessions/'],
    name: 'LMS Admin - Sessions',
    component: () => import('@/pages/auth/learning/admin/EditCourse.vue'),
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
    path: '/auth/learning/admin/courses/:id/sessions/edit',
    alias: ['/auth/learning/admin/courses/:id/sessions/edit/'],
    name: 'LMS Admin - Edit Sessions',
    component: () => import('@/pages/auth/learning/admin/EditCourse.vue'),
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
    path: '/auth/learning/admin/courses',
    alias: ['/auth/learning/admin/courses/', '/auth/learning/admin/course', '/auth/learning/admin/course/'],
    name: 'LMS Admin - Courses and Sessions',
    component: () => import('@/pages/auth/learning/admin/CoursesAndSessions.vue'),
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
    path: '/auth/learning/admin/addsession',
    alias: ['/auth/learning/admin/addsession/', '/auth/learning/admin/add-session', '/auth/learning/admin/add-session/'],
    name: 'LMS Admin - Add Session',
    component: () => import('@/pages/auth/learning/admin/AddSession.vue'),
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

  // -------------------------------- ACCOUNTING MODULE --------------------------------

  {
    path: '/auth/accounting/home',
    alias: ['/auth/accounting/home/', '/auth/accounting/dashboard', '/auth/accounting/dashboard/', '/auth/accounting/', '/auth/accounting'],
    name: 'Accounting - Dashboard',
    component: () => import('@/pages/auth/accounting/AccountingHome.vue'),
    meta: {
      requiresAuth: true,
      title: 'Accounting Dashboard',
      metaTags: [
        {
          name: 'description',
          content: 'Accounting dashboard accessible only to authorized users of Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Accounting Dashboard - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Accounting dashboard accessible only to authorized users of Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/contacts',
    alias: ['/auth/accounting/contacts/', '/auth/accounting/contact/', '/auth/accounting/contact'],
    name: 'Accounting - Contacts',
    component: () => import('@/pages/auth/accounting/AccountingContacts.vue'),
    meta: {
      requiresAuth: true,
      title: 'Accounting Contacts',
      metaTags: [
        {
          name: 'description',
          content: 'Manage accounting contacts for Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Accounting Contacts - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Manage accounting contacts for Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/quotes',
    alias: ['/auth/accounting/quotes/', '/auth/accounting/quote/', '/auth/accounting/quote'],
    name: 'Accounting - Quotes',
    component: () => import('@/components/authenticated/accounting/QuoteCreator.vue'),
    meta: {
      requiresAuth: true,
      title: 'Create Quote',
      metaTags: [
        {
          name: 'description',
          content: 'Create and manage quotes for Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Create Quote - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Create and manage quotes for Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/invoices',
    alias: ['/auth/accounting/invoices/', '/auth/accounting/invoice/', '/auth/accounting/invoice'],
    name: 'Accounting - Invoices',
    component: () => import('@/components/authenticated/accounting/InvoiceCreator.vue'),
    meta: {
      requiresAuth: true,
      title: 'Create Invoice',
      metaTags: [
        {
          name: 'description',
          content: 'Create and manage invoices for Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Create Invoice - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Create and manage invoices for Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/receipts',
    alias: ['/auth/accounting/receipts/', '/auth/accounting/receipt/', '/auth/accounting/receipt'],
    name: 'Accounting - Receipts',
    component: () => import('@/components/authenticated/accounting/ReceiptCreator.vue'),
    meta: {
      requiresAuth: true,
      title: 'Create Receipt',
      metaTags: [
        {
          name: 'description',
          content: 'Create and manage receipts for Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Create Receipt - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Create and manage receipts for Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/documents',
    alias: ['/auth/accounting/documents/', '/auth/accounting/document/', '/auth/accounting/document'],
    name: 'Accounting - Documents',
    component: () => import('@/components/authenticated/accounting/FinancialDocuments.vue'),
    meta: {
      requiresAuth: true,
      title: 'Financial Documents',
      metaTags: [
        {
          name: 'description',
          content: 'View and manage all financial documents for Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Financial Documents - Maso.au'
        },
        {
          property: 'og:description',
          content: 'View and manage all financial documents for Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/settings',
    alias: ['/auth/accounting/settings/', '/auth/accounting/setting/', '/auth/accounting/setting'],
    name: 'Accounting - Settings',
    component: () => import('@/pages/auth/accounting/AccountingSettings.vue'),
    meta: {
      requiresAuth: true,
      title: 'Accounting Settings',
      metaTags: [
        {
          name: 'description',
          content: 'Manage accounting settings for Maso.au.'
        },
        {
          property: 'og:title',
          content: 'Accounting Settings - Maso.au'
        },
        {
          property: 'og:description',
          content: 'Manage accounting settings for Maso.au.'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/transactions',
    alias: ['/auth/accounting/transactions/', '/auth/accounting/transaction/', '/auth/accounting/transaction'],
    name: 'Accounting - Transactions',
    component: () => import('@/pages/auth/accounting/TransactionHistory.vue'),
    meta: {
      requiresAuth: true,
      title: 'Transaction History',
      metaTags: [
        {
          name: 'description',
          content: 'View and manage transaction history for Maso.au'
        },
        {
          property: 'og:title',
          content: 'Transaction History - Maso.au'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/transactions/:id',
    alias: ['/auth/accounting/transactions/:id/', '/auth/accounting/transaction/:id', '/auth/accounting/transaction/:id/'],
    name: 'Accounting - Transaction Details',
    component: () => import('@/components/authenticated/accounting/TransactionDetails.vue'),
    meta: {
      requiresAuth: true,
      title: 'Transaction Details',
      metaTags: [
        {
          name: 'description',
          content: 'View transaction details for Maso.au'
        },
        {
          property: 'og:title',
          content: 'Transaction Details - Maso.au'
        }
      ],
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/auth/accounting/clients/:id',
    alias: ['/auth/accounting/clients/:id/', '/auth/accounting/client/:id', '/auth/accounting/client/:id/'],
    name: 'Accounting - Client Detail',
    component: () => import('@/components/authenticated/accounting/ClientDetails.vue'),
    meta: {
      requiresAuth: true,
      title: 'Client Detail',
      metaTags: [
        {
          name: 'description',
          content: 'View client details and transactions for Maso.au'
        },
        {
          property: 'og:title',
          content: 'Client Detail - Maso.au'
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
  startLoading();

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

  if (to.meta.requiresAdmin) {
    const user = store.getters.user;

    if (!user && !user.isAdmin) {
      return next('/login');
    } else {
      return next();
    }
  }

  next();
});

router.afterEach(() => {
  stopLoading();
});

export default router;