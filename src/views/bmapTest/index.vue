<template>
  <div class="bmapTestView">
    <h2>百度地图测试</h2>
    <bmap-view ref="bMap">
      <bmap-marker :data="markers" />
    </bmap-view>
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
