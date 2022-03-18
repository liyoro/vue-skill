<template>
  <div class="somethingTestView">
    <div>{{ showText }}</div>
    <div v-pre>{{ v-pre不编译,原样输出 }}</div>
    <img src="@/assets/logo.png">
    <div v-if="$isMobile()">判断当前为：手机端</div>
    <div v-else>判断当前为：桌面端</div>
    <div class="line">
      <el-button @click="includeClick">includes测试{{ includetest }}</el-button>
      <div :class="{'color1':[2].includes(includetest)}">includes测试</div>
    </div>
    <son />
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
