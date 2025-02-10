import './assets/style.css'
import '@formkit/themes/genesis'
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'

import config from './../formkit.config'

import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig(config));

app.mount('#app')
