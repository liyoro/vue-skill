<template>
  <div />
</template>

<script>
// import indexMap from './index.vue'

export default {
  name: 'AmapPolyline',
  //   mixins: [indexMap],
  props: {
    linePath: {
      type: Array,
      default() {
        return []
      }
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
      AMapUI.load(['ui/misc/PathSimplifier'], function(PathSimplifier) {
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
          path: [
            [113.216516, 23.405735],
            [113.217037, 23.40572],
            [113.217809, 23.405696],
            [113.218491, 23.405661],
            [113.218458, 23.40512],
            [113.218405, 23.404617],
            [113.218421, 23.402387],
            [113.218356, 23.401531],
            [113.218635, 23.401314],
            [113.220127, 23.401353],
            [113.221178, 23.401363],
            [113.222616, 23.401452]
          ]
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
