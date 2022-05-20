<!--
 * @Author: liyoro
 * @since: 2022-05-10 11:01:05
 * @lastTime: 2022-05-20 10:29:55
-->
<template>
  <div class="bs-header">
    <div class="manage" @click="homeClick">
      进入管理系统
    </div>
  </div>
</template>

<script>
export default {
  name: 'BsHeader',
  data() {
    return {
    }
  },
  mounted() {},
  created() {
  },
  methods: {
    homeClick() {
      this.$router.push({ path: 'home' })
    }
  }
}
</script>

<style scoped lang="scss">
.bs-header {
  width: 1920px;
  height: 72px;
  // background-image: url("~@/assets/images/header.png");
  // background-size: 100% 100%;
  background-color: #46abfe;
  .manage {
    float: left;
    padding-left: 24px;
    line-height: 72px;
    font-size: 16px;
    font-weight: 400;
    color: #AEF3FF;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
