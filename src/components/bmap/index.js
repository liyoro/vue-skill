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
        this.map = new BMap.Map('bmapcontainer', {
          enableBizAuthLogo: false
        })
        const point = new BMap.Point(this.center[0], this.center[1])
        this.map.centerAndZoom(point, this.zoom)
        this.map.setMapStyleV2({
          styleId: this.styleId
        })

        this.$emit('bmap-ready', this.map)
      }).catch(e => {
        console.log(e)
      })
    }

  },
  watch: {}
}
