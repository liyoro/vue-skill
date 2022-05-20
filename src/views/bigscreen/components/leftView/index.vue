<template>
  <div class="left-view">
    <div class="box-1 box-1-bg box-margin">
      <div class="box-title">数据1</div>
      <div class="box-content">
        {{ data.a }}
      </div>
    </div>
    <div class="box-2 box-2-bg box-margin">
      <div class="box-title">数据2</div>
    </div>
    <div class="box-3 box-3-bg box-margin">
      <div class="box-title">数据3</div>
    </div>
    <div class="box-4 box-4-bg">
      <div class="box-title">数据4</div>
    </div>
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
