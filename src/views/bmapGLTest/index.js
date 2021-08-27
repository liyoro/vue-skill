// import { polylineData } from '@/api/polyline'

export default {
  name: 'bmapGLTestView',
  components: {
    'bmap-gl-view': () => import ('@/components/bmap/gl/index.vue')
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
