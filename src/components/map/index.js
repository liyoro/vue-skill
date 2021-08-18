import AMapLoader from '@amap/amap-jsapi-loader'
// import polyLine from './polyLine'

export default {
  name: 'amap-view',
  props: {
    amapKey: {
      type: String,
      default: '6411e510973dc722ce416a298588ae4e'
    },
    styleId: {
      type: String,
      default: '728e2ca5c2c75aa8b26190a9e23c4687'
    },
    zoom: {
      type: Number,
      default: 12
    },
    center: {
      type: [Array, String],
      default() {
        return [113.220218, 23.404165]
      }
    },
    height: {
      type: Number | String,
      default: 420
    },
    // AMap.Geocoder,
    // AMap.CustomLayer,
    // AMap.ControlBar,
    // AMap.Heatmap,
    // AMap.DistrictSearch,
    // AMap.AdvancedInfoWindow,
    // AMap.MassMarks,
    // AMap.Size,
    // AMap.Pixel
    plugins: {
      type: Array,
      default: () => []
    },
    uis: {
      type: Array,
      default: () => ['overlay/SimpleMarker', 'misc/PathSimplifier']
    }

  },
  computed: {
    mapHeight() {
      return isNaN(this.height) ? this.height : `${this.height}px`
    }
  },
  // mixins: [polyLine],
  data() {
    return {
      map: ''
    }
  },
  beforeDestroy() {
    this.map && this.map.destroy()
  },
  mounted() {
    this.initMap()
  },
  created() {
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: this.amapKey,
        version: '2.0',
        AMapUI: {
          version: '1.1',
          plugins: this.uis
        }
      }).then((AMap) => {
        this.map = new AMap.Map('amapcontainer', {
          zoom: this.zoom, // 级别
          center: this.center, // 中心点坐标
          viewMode: '3D', // 使用3D视图
          // buildingAnimation: true, // 楼块出现是否带动画
          // expandZoomRange: true,
          // resizeEnable: true,
          // rotateEnable: true,
          // pitchEnable: true,
          // pitch: 45,
          // rotation: -15,
          mapStyle: `amap://styles/${this.styleId}`
        })
        this.initComponents(this.map)
      }).catch(e => {
        console.log(e)
      })
    },
    initComponents(map) {
      // AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {
      AMapUI.load(['ui/misc/PathSimplifier'], function(PathSimplifier) {
        if (!PathSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
          return
        }

        const pathSimplifierIns = new PathSimplifier({
          zIndex: 100,
          // autoSetFitView: false,
          map: map, // 所属的地图实例
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

        window.pathSimplifierIns = pathSimplifierIns

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

  },
  watch: {}
}
