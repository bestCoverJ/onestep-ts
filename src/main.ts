import { createApp } from 'vue'
import '@/assets/styles/index.scss'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import 'qweather-icons/font/qweather-icons.css'

createApp(App).use(router).use(createPinia()).mount('#app')
