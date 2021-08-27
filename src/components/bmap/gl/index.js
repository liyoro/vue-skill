import BMapLoader from '../bmapgl-jsapi-loader'

export default {
  name: 'BmapGLView',
  props: {
    ak: {
      type: String,
      default: 'ZMVYYKDUVYZIHl5ygAaKyBhs7Gkg24SX'
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
      default: 520
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
    this.initMap()
  },
  created() {
  },
  methods: {
    initMap() {
      BMapLoader.load({
        key: this.ak,
        version: '3.0'
      }).then((BMapGL) => {
        this.map = new BMapGL.Map('bmapglcontainer')
        const point = new BMapGL.Point(this.center[0], this.center[1])
        this.map.centerAndZoom(point, this.zoom)
        this.map.enableScrollWheelZoom(true)

        // 2. 创建MapVGL图层管理器
        // const view = new mapvgl.View({
        //   map: this.map
        // })
        // var layer = new mapvgl.PointLayer({
        //   color: 'rgba(50, 50, 200, 1)',
        //   blend: 'lighter',
        //   size: 200,
        //   data: [{
        //     geometry: {
        //       type: 'Point',
        //       coordinates: this.center
        //     }
        //   }]
        // })
        // view.addLayer(layer)
      }).catch(e => {
        console.log(e)
      })
    }

  },
  watch: {}
}
