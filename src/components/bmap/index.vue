<template>
  <div class="bmap-view">
    <div id="bmapcontainer" :style="{ height: mapHeight }" :class="customStyle?'custom-map':''" />
    <slot />
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang="css">
  .anchorBL {
    display: none;
  }
</style>

<style lang='scss' scoped>
.bmap-view {
  width: 100%;
  height: 100%;
}
.custom-map {
  /* 地图标题 infoWindow */
  ::v-deep .BMap_pop .BMap_center {
    display: none;
  }
  ::v-deep .BMap_pop .BMap_top {
    display: none;
  }
  ::v-deep .BMap_pop .BMap_bottom {
    display: none;
  }
  ::v-deep img[src="https://api.map.baidu.com/images/iw3.png"] {
    display: none;
  }
  ::v-deep img[src="https://api.map.baidu.com/images/iw_close1d3.gif"] {
    display: none;
  }
  ::v-deep .BMap_pop > div:nth-child(1) {
    display: none;
  }
  // ::v-deep .BMap_pop div:nth-child(3) div {
  //   display: none;
  // }
  ::v-deep .BMap_pop div:nth-child(5) div {
    display: none;
  }
  ::v-deep .BMap_pop div:nth-child(7) div {
    display: none;
  }
}
</style>
