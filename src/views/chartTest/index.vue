<template>
  <div class="chartTestView">
    <h2>echarts图表封装示例</h2>
    <div>
      <chart-panel class="chart-content" :chart-option="chartOpt" height="100%" />
    </div>
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang='scss' scoped>
@import './index.scss'
</style>
