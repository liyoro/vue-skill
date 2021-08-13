import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/mockdatatest',
    name: 'mockDataTest',
    component: () => import('@/views/mockDataTest/index.vue')
  },
  {
    path: '/charttest',
    name: 'chartTest',
    component: () => import('@/views/chartTest/index.vue')
  },
  {
    path: '/dynamictabletest',
    name: 'dynamicTableTest',
    component: () => import('@/views/dynamicTableTest/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
