// src/main.js
import { createApp,  } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.css";
import { initializeAuth } from '@/auth';

const app = createApp(App);

app.use(router);
app.use(store);
initializeAuth(store);

app.mount("#app");