import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pack from '../views/PackOpener.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pack',
      name: 'pack',
      component: Pack
    }
  ]
})

export default router