import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from '@/layout/index.vue'
import HomePage from '@/views/Home.vue'
import WhatPage from '@/views/WhatPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import VerifyPage from '@/views/VerifyPage.vue'
const routes = [
  {
    path: '/',
    name: 'LayOut',
    component: LayOut,
    children: [
      {
        path: '/home',
        name: 'HomePage',
        component: HomePage
      },
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
