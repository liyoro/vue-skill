<template>
  <div />
</template>

<script>
export default {
  name: 'AmapPolyline',
  props: {
    linePath: {
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
    this.$parent.$on('amap-ready', this.initComponents)
  },
  methods: {
    initComponents(amap) {
      AMapUI.load(['ui/misc/PathSimplifier'], (PathSimplifier) => {
        if (!PathSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
          return
        }

        const pathSimplifierIns = new PathSimplifier({
          zIndex: 100,
          // autoSetFitView: false,
          map: amap, // 所属的地图实例
          getPath: function(pathData, pathIndex) {
            return pathData.path
          },
          getHoverTitle: function(pathData, pathIndex, pointIndex) {
            if (pointIndex >= 0) {
              return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length
            }
            return pathData.name + '，点数量' + pathData.path.length
          },
          renderOptions: {
            renderAllPointsIfNumberBelow: 100 // 绘制路线节点，如不需要可设置为-1
          }
        })

        // 设置数据
        pathSimplifierIns.setData([{
          name: '路线0',
          path: this.linePath
        }])

        // 对第一条线路（即索引 0）创建一个巡航器
        const navg1 = pathSimplifierIns.createPathNavigator(0, {
          loop: true, // 循环播放
          speed: 100 // 巡航速度，单位千米/小时
        })
        navg1.start()
      })
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
