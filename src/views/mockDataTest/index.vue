<!--界面代码-->
<template>
  <div class="mockDataTestView">
    <h2>本地模拟数据显示</h2>
    <div>{{ tableData }}</div>
    <img src="/images/cat.png">
  </div>
</template>

<!--这里引入分离的业务js代码-->
<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<!--这里引入分离的界面样式代码-->
<style lang='scss' scoped>
@import './index.scss'
</style>
