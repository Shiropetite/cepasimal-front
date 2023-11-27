import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './css/index.scss';

import CepButton from './components/CepButton.vue';
import CepDropdownButton from './components/CepDropdownButton.vue';

const app = createApp(App);

app.use(router);

app.component('CepButton', CepButton);
app.component('CepDropdownButton', CepDropdownButton);

app.mount('#app');
