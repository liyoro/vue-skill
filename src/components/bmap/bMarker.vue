<template>
  <div />
</template>

<script>
import Vue from 'vue'

export default {
  name: 'BmapMarker',
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
      bmap: ''
    }
  },
  computed: {
    newdata: {
      get() {
        return this.data
      },
      set(val) {
        this.$emit('update:data', val)
      }
    }
  },
  watch: {
    newdata() {
      this.addMarkers()
    }
  },
  beforeDestroy() {
    if (this.bmap) {
      this.bmap.clearOverlays()
    }
  },
  mounted() {
  },
  created() {
    this.$parent.$on('bmap-ready', this.initComponents)
  },
  methods: {
    initComponents(bmap) {
      this.bmap = bmap
      if (this.data.length > 0) {
        this.addMarkers()
      } else {
        bmap.clearOverlays()
      }
    },
    /**
     * Point(lng: Number, lat: Number)
     */
    addMarkers() {
      const vm = this

      const icon1 = new BMap.Icon('/images/map-ic.png', new BMap.Size(60, 90))
      if (this.bmap && this.data.length > 0) {
        this.data.forEach((item) => {
          const lng = item.lng
          const lat = item.lat
          const point = new BMap.Point(lng, lat)
          const marker = new BMap.Marker(point, { icon: icon1 })

          // 自定义信息窗体样式
          const html = `<div style="width:332px;height:275px;background-color:rgba(31, 41, 86, 1);box-shadow: 0px 0px 12px 0px rgba(0,119,255,0.8);text-align:left;border-radius: 6px;">
            <div style="height:32px;line-height:32px;font-size:15px;font-weight:600;color:#fff;display:flex;justify-content:space-between;align-items:center;padding-left:16px;padding-right:16px;">
            <div>标题</div><img @click="closePopWindow" src="/images/close.png" style="width:12px;height:12px;cursor:pointer;" /></div>
            <div style="height:28px;line-height:28px;font-size:12px;font-weight:400;color:#fff;padding-left:16px;">
            内容</div>
            <div style="width:300px;height:200px;border-radius:4px;border:1px solid #0D6EBE;margin-left:16px;"></div></div>`

          const Profile = Vue.extend({
            methods: {
              closePopWindow() {
                vm.bmap.closeInfoWindow()
              }
            },
            template: html
          })
          const infoWindow = new BMap.InfoWindow(new Profile().$mount('').$el, {
            width: 332,
            height: 300,
            offset: new BMap.Size(-20, 20),
            enableAutoPan: true,
            enableMessage: false,
            title: ''
          })
          marker.addEventListener('click', () => {
            marker.openInfoWindow(infoWindow)
          })
          this.bmap.addOverlay(marker)
        })
      }
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
