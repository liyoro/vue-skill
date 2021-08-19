<template>
  <div class="polylineTestView">
    <h2>人员轨迹测试</h2>
    <amap-view ref="aMap">
      <amap-polyline />
    </amap-view>
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
