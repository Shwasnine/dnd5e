import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(createPinia()).use(router).mount('#app');