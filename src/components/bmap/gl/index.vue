<template>
  <div class="bmap-gl-view">
    <div id="bmapglcontainer" :style="{ height: mapHeight }" />
    <slot />
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang='scss' scoped>
.bmap-gl-view {
  width: 100%;
  height: 100%;
}
</style>
