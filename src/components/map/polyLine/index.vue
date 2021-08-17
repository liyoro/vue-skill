<template>
  <div class="amap-view">
    <div id="amapcontainer" :style="{ height: mapHeight }" />
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
