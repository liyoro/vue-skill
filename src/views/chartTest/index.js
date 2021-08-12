export default {
  name: 'chartTestView',
  data() {
    return {
      chartOpt: {}
    }
  },
  mounted() {},
  created() {
    this.chartOpt = this.$eChartFn.testBar()
  },
  methods: {
  },
  watch: {}
}
