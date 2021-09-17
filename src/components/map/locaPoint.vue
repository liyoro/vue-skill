<template>
  <div />
</template>

<script>
import defaultSettings from '@/settings'
const { publicPath } = defaultSettings

export default {
  name: 'AmapLocaPoint',
  props: {
    // data: {
    //   type: Array,
    //   default() {
    //     return []
    //   },
    //   required: true
    // }
  },
  data() {
    return {
      geoLevelF: '',
      pLineSource: '',
      loca: '',
      breathPoint: '',
      pLinelayer: ''
    }
  },
  computed: {
  },
  watch: {},
  beforeDestroy() {
    if (this.breathPoint) {
      this.loca.remove(this.breathPoint)
      this.breathPoint = null
    }
    if (this.pLinelayer) {
      this.loca.remove(this.pLinelayer)
      this.pLinelayer = null
    }
    if (this.loca) {
      this.loca.destroy()
      this.loca = null
    }
    if (this.geoLevelF) {
      this.geoLevelF.destroy()
    }
    if (this.pLineSource) {
      this.pLineSource.destroy()
    }
  },
  mounted() {
  },
  created() {
    this.$parent.$on('amap-ready', this.initComponents)
  },
  methods: {
    initData() {
      this.geoLevelF = new Loca.GeoJSONSource({
        url: publicPath + `/data/huadu.geojson`
      })

      this.pLineSource = new Loca.GeoJSONSource({
        url: publicPath + '/data/huadu_line.geojson'
      })
    },
    initComponents(amap) {
      this.loca = new Loca.Container({
        map: amap
      })
      this.initData()

      // 呼吸点
      this.initBreathPoint()

      // 脉冲线
      // this.initPulseLine()

      // 连接线
      // this.initLink()

      // 飞线
      this.initPulseLink()

      this.loca.animate.start()
    },
    // 呼吸点
    initBreathPoint() {
      this.breathPoint = new Loca.ScatterLayer({
        loca: this.loca,
        zIndex: 113,
        opacity: 1,
        visible: true,
        zooms: [2, 22]
      })
      this.breathPoint.setSource(this.geoLevelF)
      this.breathPoint.setStyle({
        unit: 'meter',
        size: [520, 520],
        borderWidth: 520,
        borderColor: 'rgba(250,250,250,1)',
        duration: 500,
        animate: true,
        texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_yellow.png',
        color: 'rgba(200,200,200,1)'
      })
    },
    // 脉冲线
    initPulseLine() {
      this.pLinelayer = new Loca.PulseLineLayer({
        // loca,
        zIndex: 11,
        opacity: 1,
        visible: true,
        zooms: [2, 22]
      })
      const headColors = ['#ECFFB1', '#146968', '#146968', '#146968', '#146968', '#146968', '#146968', '#146968']
      const trailColors = [
        'rgba(255,178,6, 0.2)',
        'rgba(255,178,6, 0.2)',
        'rgba(20,105,104, 0.2)',
        'rgba(20,105,104, 0.2)',
        'rgba(20,105,104, 0.2)',
        'rgba(20,105,104, 0.2)',
        'rgba(20,105,104, 0.2)',
        'rgba(20,105,104, 0.2)'
      ]

      this.pLinelayer.setStyle({
        altitude: 0,
        lineWidth: (_, feature) => feature.properties.lineWidthRatio * 1 + 3,
        headColor: (_, feature) => headColors[feature.properties.type],
        trailColor: (_, feature) => trailColors[feature.properties.type],
        interval: 0.25,
        duration: 5000
      })
      this.pLinelayer.setSource(this.pLineSource)
      this.loca.add(this.pLinelayer)
    },
    // 连接线
    initLink() {
      const linkLayer = new Loca.LinkLayer({
        zIndex: 20,
        opacity: 1,
        visible: true,
        zooms: [2, 22]
      })

      linkLayer.setSource(this.pLineSource)
      linkLayer.setStyle({
        lineColors: function(index, item) {
          return item.link.properties.type === 0 ? ['#25CDEA', '#12BFBF'] : ['#FFD87B', '#FF4F00']
        },
        height: function(index, item) {
          return item.distance / 3
        },
        smoothSteps: function(index, item) {
          return 200
        }
      })
      this.loca.add(linkLayer)
    },
    // 飞线
    initPulseLink() {
      const linkLayer = new Loca.PulseLinkLayer({
        loca: this.loca,
        zooms: [2, 22],
        zIndex: 115,
        visible: true,
        opacity: 1,
        depth: true
      })

      linkLayer.setSource(this.pLineSource)
      linkLayer.setStyle({
        unit: 'meter',
        dash: [300, 0, 300, 0],
        lineWidth: function() {
          return [20, 20]
        },
        height: function(index, feat) {
          return feat.distance / 3 + 10
        },
        smoothSteps: 200,
        speed: function(index, prop) {
          return 50 * index + Math.random() * 200
          // return index * 10
        },
        lineColors: function(index, feat) {
          return ['rgba(104, 68, 254, 0.0)', 'rgba(104, 68, 254, 1.0)', '#0089FF']
        },
        maxHeightScale: 0.5, // 弧顶位置比例
        flowLength: 500,
        headColor: 'rgba(255, 255, 204, 1)', //
        trailColor: 'rgba(255, 255, 255, 1.0)'
      })
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
