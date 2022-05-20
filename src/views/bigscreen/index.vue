<template>
  <div class="bs-container">
    <div class="bigscreen" :style="styleObj">
      <bs-header />
      <div class="content-view">
        <left-view :data="data" />
        <right-view :data="data" />
        <center-view :data="data" />
        <bottom-view :data="data" />
      </div>
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
