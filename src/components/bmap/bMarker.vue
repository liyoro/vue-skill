<template>
  <div />
</template>

<script>
export default {
  name: 'AmapLocaPoint',
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {},
  beforeDestroy() {
  },
  mounted() {
  },
  created() {
    this.$parent.$on('bmap-ready', this.initComponents)
  },
  methods: {
    initComponents(amap) {
      this.loca = new Loca.Container({
        map: amap
      })
      this.initData()
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
