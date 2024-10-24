import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from './route'
import './style.css'
import App from './App.vue'

import 'leaflet/dist/leaflet.css';
import 'vue-map-ui/dist/normalize.css';
import 'vue-map-ui/dist/style.css';
import 'vue-map-ui/dist/theme-all.css';

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
