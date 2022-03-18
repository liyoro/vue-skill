<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    // 切换路由，自动滚动到顶部
    // $route() {
    //   window.scrollTo(0, 0)
    // }
  }
}
</script>

<style>
</style>
