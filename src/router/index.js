import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页' },
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
    meta: { title: '假数据测试' },
    component: () => import('@/views/mockDataTest/index.vue')
  },
  {
    path: '/charttest',
    name: 'chartTest',
    meta: { title: '图表测试' },
    component: () => import('@/views/chartTest/index.vue')
  },
  {
    path: '/dynamictabletest',
    name: 'dynamicTableTest',
    meta: { title: '动态生成表格测试' },
    component: () => import('@/views/dynamicTableTest/index.vue')
  },
  {
    path: '/polylinetest',
    name: 'polylineTest',
    meta: { title: '人员轨迹测试' },
    component: () => import('@/views/polylineTest/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
