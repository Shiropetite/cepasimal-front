import { createApp } from "vue";
import { createPinia } from "pinia";

import "./css/style.scss";
import "./css/variables.scss";

import App from "./App.vue";
import router from "./router";

import ToggleButton from "./components/ToggleButton.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("ToggleButton", ToggleButton);

app.mount("#app");
