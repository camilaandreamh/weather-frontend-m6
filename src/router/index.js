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
      path: '/detalle/:id', // Esta es la ruta que hace que funcione el botón de detalle
      name: 'detalle',
      
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router