import { mapRequest } from '@/api/map'

export default {
  name: 'echartMapTestView',
  data() {
    return {
      mapOpt: {},
      mapName: '广州市',
      mapPopData: [] // 地图数据
    }
  },
  mounted() {},
  created() {
    this.initData()
  },
  methods: {
    // 地图点击事件
    handleMapClick(params) {
      const { name, seriesType } = params
      if (seriesType !== 'map') return
      const { data } = params
      const code = data.mapProperty.adcode
      console.log(11111, data)
      console.log(22222, name, code)
    },
    initData() {
      mapRequest('mapdata').then((result) => {
        const res = result.data

        this.mapPopData = res

        this.initMap('4401')
      })
    },
    initMap(url) {
      mapRequest(url).then((res) => {
        const mapData = res.data
        const jsonMap = { mark: this.mapName, json: mapData }

        const data = mapData.features.map((item) => {
          const { name, adcode } = item.properties

          let hoverObj = {}

          const objIndex = this.$utils.findElem(this.mapPopData, 'adcode', adcode)
          if (objIndex !== -1) {
            hoverObj = this.mapPopData[objIndex]
          } else {
            hoverObj = null
          }
          return {
            name,
            hoverObj: hoverObj
          }
        })
        this.mapOpt = this.$eChartFn.getSimpleMap(jsonMap, data)
      }).catch((err) => {
        console.log(err, '加载地图失败')
      })
    }
  },
  watch: {}
}

