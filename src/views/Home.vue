<template>
  <div class="home">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/mockdatatest">MockDataTest</router-link> |
      <router-link to="/charttest">chartTest</router-link> |
      <router-link to="/dynamictabletest">dynamicTableTest</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
