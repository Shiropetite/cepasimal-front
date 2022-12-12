import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./css/style.scss";

import ToggleButton from "./components/ToggleButton.vue";

const app = createApp(App);

app.use(router);

app.component("ToggleButton", ToggleButton);

app.mount("#app");
