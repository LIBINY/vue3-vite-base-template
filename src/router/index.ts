import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/configs/routes.config'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
