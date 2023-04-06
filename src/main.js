import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import router from './router'
import axios from 'axios'
import { MotionPlugin } from '@vueuse/motion'

import './assets/style.css'



createApp(App).use(router).use(MotionPlugin).mount('#app')