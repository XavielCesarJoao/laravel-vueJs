import './assets/style.css'
import '@formkit/themes/genesis'
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'

import config from './../formkit.config'

import App from './App.vue'
import router from './router'
import './assets/style.css'
import {createPinia} from "pinia";
import {use} from "@formkit/core";

const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(plugin, defaultConfig(config));
app.use(pinia);


app.mount('#app')
