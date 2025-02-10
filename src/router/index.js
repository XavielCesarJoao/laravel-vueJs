import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import Dashboard from "@/views/auth/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/register',
      name: 'register',
      component: Register

    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
      // Minhas rotas normais
    {
      path: '/users',
      name:'users',
      component: () => import('../views/UserViews.vue')
    },
  ],
})

export default router
