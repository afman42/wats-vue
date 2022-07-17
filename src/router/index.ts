import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import $eventHub from '../eventHub'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "about" */ '../views/HistoryView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
    $eventHub.$emit('asyncComponentLoading', to) // Start progress bar
    setTimeout(() => {
        next();
      }, 500)
})

router.beforeResolve((to, from, next) => {
    $eventHub.$emit('asyncComponentLoaded') // Stop progress bar
    next()
})
export default router
