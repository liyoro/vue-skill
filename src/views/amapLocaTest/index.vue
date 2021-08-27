<template>
  <div class="amapLocaTestView">
    <h2>高德地图Loca测试</h2>
    <!-- eslint-disable-next-line vue/attribute-hyphenation -->
    <amap-view styleId="dccd1c0abf29ebdf05fed63ff309a804" :zoom="13">
      <amap-loca-point />
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
