import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> {
      return import('../views/home.vue')
    }
  },
  {
    path: '/home',
    name: 'home',
    component: ()=> {
      return import('../views/home.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> {
      return import('../views/login.vue')
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: ()=> {
      return import('../views/signup.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
