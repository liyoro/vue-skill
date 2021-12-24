<template>
  <div class="chartTestView">
    <h2>echarts图表封装示例</h2>
    <chart-view class="chart-content" :chart-option="chartOpt" :auto-resize="true" :play-highlight="true" height="100%" />
    <h2>echarts图表封装示例2</h2>
    <chart-view class="chart-content" :chart-option="chartOpt2" :auto-resize="true" :play-highlight="true" height="100%" />
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
