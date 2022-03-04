<template>
  <div class="home">
    <div>
      <router-link to="/mockdatatest">MockDataTest</router-link> |
      <router-link to="/charttest">chartTest</router-link> |
      <router-link to="/dynamictabletest">dynamicTableTest</router-link> |
      <router-link to="/polylinetest">polylineTest</router-link> |
      <!-- <router-link to="/bmaptest">bmapTest</router-link> | -->
      <router-link to="/bmapgltest">bmapGLTest</router-link> |
      <router-link to="/amaplocatest">amapLocaTest</router-link> |
      <router-link to="/videocapturetest">videoCaptureTest</router-link> |
      <!-- <router-link to="/h265test">h265Test</router-link> | -->
      <router-link to="/echartMapTest">echart地图显示测试</router-link> |
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
