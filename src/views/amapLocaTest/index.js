
export default {
  name: 'amapLocaTestView',
  components: {
    AmapView: () => import ('@/components/map/index.vue'),
    AmapLocaPoint: () => import ('@/components/map/locaPoint.vue')
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
