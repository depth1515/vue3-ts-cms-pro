import * as VueRouter from 'vue-router'

const Home = () => import('@/views/Home.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
