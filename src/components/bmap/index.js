/**
 * showNavigationControl 开启页面缩放、平移控件
 * geoCoder 开启点击地图获取坐标功能 回调 @bmap-point-select
 * customStyle 方便自定义弹窗的自定义样式
 */
import BMapLoader from './bmap-jsapi-loader'

export default {
  name: 'BmapView',
  props: {
    ak: {
      type: String,
      default: 'ZMVYYKDUVYZIHl5ygAaKyBhs7Gkg24SX'
    },
    styleId: {
      type: String,
      default: '41d153e7e9e7bcda9541996853046c93'
    },
    zoom: {
      type: Number,
      default: 15
    },
    center: {
      type: [Array, String],
      default() {
        return [113.22682, 23.410167]
      }
    },
    height: {
      type: Number | String,
      default: 520
    },
    showNavigationControl: {
      type: Boolean,
      default: false
    },
    geoCoder: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Boolean,
      default: false
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
    this.map = null
  },
  mounted() {
  },
  created() {
    this.initMap()
  },
  methods: {
    initMap() {
      BMapLoader.load({
        key: this.ak,
        version: '3.0'
      }).then((BMap) => {
        this.map = new BMap.Map('bmapcontainer')
        const point = new BMap.Point(this.center[0], this.center[1])
        this.map.centerAndZoom(point, this.zoom)
        // 开启鼠标滚轮缩放
        this.map.enableScrollWheelZoom(true)
        this.map.setMapStyleV2({
          styleId: this.styleId
        })
        // 左上角，添加默认缩放平移控件
        if (this.showNavigationControl) {
          const top_left_navigation = new BMap.NavigationControl()
          this.map.addControl(top_left_navigation)
        }
        // 地图选点
        if (this.geoCoder) {
          const geoc = new BMap.Geocoder()
          this.map.addEventListener('click', (e) => {
            const pt = e.point
            const respoint = [pt.lng, pt.lat]
            geoc.getLocation(pt, (res) => {
              if (res) {
                this.$emit('bmap-point-select', { point: respoint, address: res.address })
              } else {
                this.$emit('bmap-point-select', { point: respoint })
              }
            })
          })
        }
        this.$emit('bmap-ready', this.map)
      }).catch(e => {
        console.log(e)
      })
    }
  },
  watch: {}
}
