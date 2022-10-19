import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import './assets/scss/color.scss'
import './assets/scss/base.scss'
import i18n from '@/i18n/index.js' // 引入

const pinia = createPinia()

createApp(App).use(pinia).use(store).use(router).use(i18n).mount('#app')
