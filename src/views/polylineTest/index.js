import { polylineData } from '@/api/polyline'

export default {
  name: 'polylineTestView',
  components: {
    AmapView: () => import ('@/components/map/index.vue'),
    AmapPolyline: () => import ('@/components/map/polyLine.vue')
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
  },
  created() {
    this.testData()
  },
  methods: {
    async testData() {
      const { code, result } = await polylineData()
      if (code !== 0) return
      this.data = result.data
    }

  },
  watch: {}
}
