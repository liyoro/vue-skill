<template>
  <div class="home">
    <div>
      <router-link to="/mockdatatest">MockDataTest</router-link> |
      <router-link to="/charttest">chartTest</router-link> |
      <router-link to="/dynamictabletest">dynamicTableTest</router-link> |
      <router-link to="/polylinetest">polylineTest</router-link> |
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
