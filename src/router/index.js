import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import WhatPage from '@/components/WhatPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import VerifyPage from '@/components/VerifyPage.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomeView,
    children: [
      {
        path: '/what',
        name: 'WhatPage',
        component: WhatPage
      },
      {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
      },
      {
        path: '/verify',
        name: 'VerifyPage',
        component: VerifyPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
