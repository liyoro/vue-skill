import AMapLoader from '@amap/amap-jsapi-loader'

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
    // AMap.Geocoder, AMap.CustomLayer, AMap.ControlBar,
    // AMap.Heatmap, AMap.DistrictSearch, AMap.AdvancedInfoWindow,
    // AMap.MassMarks, AMap.Size, AMap.Pixel
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
  data() {
    return {
      map: ''
    }
  },
  beforeDestroy() {
    this.map && this.map.destroy()
    this.map = null
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
        this.$emit('amap-ready', this.map)
      }).catch(e => {
        console.log(e)
      })
    }

  },
  watch: {}
}
