import { createRouter, createWebHistory } from 'vue-router'
import VariantOnePage from '@/views/VariantOnePage.vue'
import DescriptionPage from '@/views/DescriptionPage.vue'

const routes = [
  {
    path: '/',
    name: 'variant-one-page',
    component: VariantOnePage
  },
  {
    path: '/description',
    name: 'description',
    component: DescriptionPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
