import { createApp } from 'vue'
import './css/style.css'
import App from './App.vue'
import router from "./router";

import DarkModeToggle from './components/DarkModeToggle.vue';

const app = createApp(App);
app.use(router);

app.component("DarkModeToggle", DarkModeToggle);

app.mount('#app');


