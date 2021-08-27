// import { polylineData } from '@/api/polyline'

export default {
  name: 'bmapTestView',
  components: {
    BmapView: () => import ('@/components/bmap/index.vue')
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {

  },
  watch: {}
}
