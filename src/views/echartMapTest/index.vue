<template>
  <div class="echartMapTestView">
    <h2>echarts省市地图封装示例</h2>
    <chart-view
      class="map-view"
      :chart-option="mapOpt"
      height="100%"
      @click="handleMapClick" />
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>
