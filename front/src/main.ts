import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import DarkModeToggle from './components/DarkModeToggle.vue';

const app = createApp(App);

app.component("DarkModeToggle", DarkModeToggle);

app.mount('#app');


