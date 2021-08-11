<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/mockdatatest">MockDataTest</router-link> |
      <router-link to="/charttest">chartTest</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
