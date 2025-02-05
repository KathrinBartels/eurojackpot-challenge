import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/eurojackpot',
      name: 'eurojackpot',
      component: () => import('../views/ResultView.vue')
    }
  ]
})

export default router
