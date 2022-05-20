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
  },
  {
    path: '/bmaptest',
    name: 'bmapTest',
    meta: { title: '百度地图测试' },
    component: () => import('@/views/bmapTest/index.vue')
  },
  {
    path: '/bmapgltest',
    name: 'bmapGLTest',
    meta: { title: '百度地图GL测试' },
    component: () => import('@/views/bmapGLTest/index.vue')
  },
  {
    path: '/amaplocatest',
    name: 'amapLocaTest',
    meta: { title: '百度地图GL测试' },
    component: () => import('@/views/amapLocaTest/index.vue')
  },
  {
    path: '/videocapturetest',
    name: 'videoCaptureTest',
    meta: { title: 'video视频截图+水印' },
    component: () => import('@/views/videoCaptureTest/index.vue')
  },
  {
    path: '/somethingtest',
    name: 'somethingTest',
    meta: { title: 'somethingTestView' },
    component: () => import('@/views/somethingTest/index.vue')
  },
  {
    path: '/echartMapTest',
    name: 'echartMap',
    meta: { title: 'echart省市地图显示测试' },
    component: () => import('@/views/echartMapTest/index.vue')
  },
  {
    path: '/bigscreen',
    name: 'bigscreen',
    component: () => import('@/views/bigscreen/index.vue'),
    meta: {
      title: '大屏',
      icon: 'el-icon-s-platform'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
