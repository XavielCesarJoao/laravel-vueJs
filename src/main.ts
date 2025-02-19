import './assets/style.css'
import "vue-toastification/dist/index.css";
import '@formkit/themes/genesis';
import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import config from './../formkit.config';
import Toast, { PluginOptions } from "vue-toastification";
import App from './App.vue';
import router from './router';
import './assets/style.css';
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';




const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(router)
app.use(plugin, defaultConfig(config));
app.use(Toast);
app.use(pinia);
app.mount('#app')
