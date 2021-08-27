<template>
  <div class="bmap-view">
    <div id="bmapcontainer" :style="{ height: mapHeight }" />
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
// .bmap-view {
// }
</style>
