import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// eCharts组件
import eChartFn from '@/components/chart/index.js'
import ChartPanel from '@/components/chart/index.vue'
import './plugins/element.js'
Vue.component(ChartPanel.name, ChartPanel)
Vue.prototype.$eChartFn = eChartFn

import './plugins/element.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
