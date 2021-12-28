export default {
  name: 'chartTestView',
  data() {
    return {
      chartOpt: {},
      chartOpt2: {},
      chartOpt3: {}
    }
  },
  mounted() {},
  created() {
    this.chartOpt = this.$eChartFn.testBar()
    this.chartOpt3 = this.$eChartFn.testBar2()

    this.chartOpt2 = this.$eChartFn.getPieChart([100, 23, 43, 65], ['#36CBCB', '#FAD337', '#F2637B', '#975FE4'])
  },
  methods: {
  },
  watch: {}
}
