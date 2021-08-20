<template>
  <div class="amap-view">
    <div id="amapcontainer" :style="{ height: mapHeight }" />
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
.amap-view {
  ::v-deep .amap-logo, ::v-deep .amap-copyright {
    display: none !important;
  }
}
</style>
