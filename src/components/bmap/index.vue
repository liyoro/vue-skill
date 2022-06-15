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

<style lang="css">
/*地图标题 infoWindow*/
.BMap_pop .BMap_center {
  display: none;
}
.BMap_pop .BMap_top {
  display: none;
}
.BMap_pop .BMap_bottom {
  display: none;
}
img[src="https://api.map.baidu.com/images/iw3.png"] {
  display: none;
}
img[src="https://api.map.baidu.com/images/iw_close1d3.gif"] {
  display: none;
}
.BMap_pop > div:nth-child(1) {
  display: none;
}
.BMap_pop div:nth-child(3) div {
  display: none;
}
.BMap_pop div:nth-child(5) div {
  display: none;
}
.BMap_pop div:nth-child(7) div {
  display: none;
}
</style>

<style lang='scss' scoped>

</style>
