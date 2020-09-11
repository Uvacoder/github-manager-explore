import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Home } from '../views/Home'
import { Login } from '../views/Login'
import { Profile } from '../plugins/types/interfaces'
import { VulnerabilityAlerts } from '../views/pages/VulnerabilityAlerts'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/vulnerabilityalerts'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requerAuth: true,
      title: 'Home Page'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/vulnerabilityalerts',
    name: 'Vulnerability Alerts',
    component: VulnerabilityAlerts,
    meta: {
      requerAuth: true,
      title: 'Vulnerability Alerts'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const authorization = to.matched.some((record) => record.meta.requerAuth)
  const profile: Profile = window.$cookies.get('profile')

  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (authorization) {
    if (profile !== null) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
