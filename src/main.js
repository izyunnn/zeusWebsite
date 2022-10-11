import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import './assets/scss/color.scss'
import './assets/scss/base.scss'
const pinia = createPinia()

createApp(App).use(pinia).use(store).use(router).mount('#app')
