import { createApp } from 'vue'
import './css/style.css'
import App from './App.vue'
import router from "./router";

import ToggleButton from './components/ToggleButton.vue';

const app = createApp(App);
app.use(router);

app.component("ToggleButton", ToggleButton);

app.mount('#app');


