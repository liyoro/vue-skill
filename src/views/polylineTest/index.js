// import { tableData } from '@/api/table'
import aMap from '@/components/map/index.vue'
import polyLine from '@/components/map/polyLine.vue'

export default {
  name: 'polylineTestView',
  components: {
    'amap-view': aMap,
    'amap-polyline': polyLine
  },
  data() {
    return {
      map: ''
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
