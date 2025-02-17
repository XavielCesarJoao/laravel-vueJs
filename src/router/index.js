import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import Dashboard from "@/views/auth/Dashboard.vue";
import {userAuthStore} from "@/store/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {requiresAuth: true}
      
    },

    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {requiresGuest: true},

    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {requiresGuest: true},
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {requiresAuth: true},
    },
    {
      path: '/users',
      name:'users',
      component: () => import('../views/UserViews.vue')
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = userAuthStore();
  if (to.matched.some((record)=> record.meta.requiresAuth) && !auth.isLoggedIn){
    next({name: "Login"})
  }
  if(to.matched.some((record) => record.meta.re))
  else if (to.matched.some((record) => record.meta.requiresGuest) && auth.isLoggedIn){
    next({name: "Dashboard"})
  }
  else next();
});

export default router
