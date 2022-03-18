import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMobileDetection from 'vue-mobile-detection'
import utils from './utils/utils.js'

import './styles/index.scss'

Vue.config.productionTip = false

// eCharts组件
import eChartFn from '@/components/chart/index.js'
import ChartPanel from '@/components/chart/index.vue'
import './plugins/element.js'
Vue.component(ChartPanel.name, ChartPanel)
Vue.prototype.$eChartFn = eChartFn

import './plugins/element.js'

Vue.use(VueMobileDetection)

/**
 * 全局方法
 * In template
 * $utils.methodname()
 * In methods
 * this.$utils.methodname()
 */
Vue.prototype.$utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
