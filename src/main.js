// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.css";
import { initializeAuth } from '@/auth';
import { vMaska } from 'maska';

const app = createApp(App);

app.use(router);
app.use(store);
app.directive('maska', vMaska);
initializeAuth(store);

app.mount("#app");