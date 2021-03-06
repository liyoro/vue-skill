// import { polylineData } from '@/api/polyline'

export default {
  name: 'bmapTestView',
  components: {
    BmapView: () => import ('@/components/bmap/index.vue'),
    BmapMarker: () => import ('@/components/bmap/bMarker.vue')
  },
  data() {
    return {
      data: [],
      markers: [],
      center: [113.240159, 23.433257]
    }
  },
  mounted() {
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      // 融创茂 113.240159,23.433257
      // 花都湖 113.238146,23.388154
      // 圆玄道观 113.186404,23.405666
      // 白云机场 113.31231,23.403013
      // 花都广场 113.226483,23.406326
      this.markers = [
        { 'lng': 113.240159, 'lat': 23.433257, 'code': 1 },
        { 'lng': 113.238146, 'lat': 23.388154, 'code': 2 },
        { 'lng': 113.186404, 'lat': 23.405666, 'code': 3 },
        { 'lng': 113.31231, 'lat': 23.403013, 'code': 4 },
        { 'lng': 113.226483, 'lat': 23.406326, 'code': 5 }
      ]
    }
  },
  watch: {}
}
