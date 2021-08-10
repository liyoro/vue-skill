<!--界面代码-->
<template>
  <div class="mockDataTestView">
    本地模拟
  </div>
</template>

<!--这里引入分离的业务js代码-->
<script>
import indexjs from './index.js'
export default {
  ...indexjs,
}
</script>

<!--这里引入分离的界面样式代码-->
<style lang="scss" scoped>
@import './index.scss';
</style>