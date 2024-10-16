import { createRouter, createWebHistory } from 'vue-router'
import GeneralPage from '@/views/GeneralPage.vue'
import AboutPage from '@/views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'general-page',
    component: GeneralPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
})

export default router
