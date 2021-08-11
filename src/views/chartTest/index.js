import { tableData } from '@/api/table'

export default {
  name: 'chartTestView',
  data() {
    return {
      tableCols: [],
      tableData: [],
      chartOpt: {}
    }
  },
  mounted() {},
  created() {
    this.chartOpt = this.$eChartFn.testBar()
  },
  methods: {
    async testMockTable() {
      const { code, result } = await tableData()
      if (code !== 0) return
      this.tableCols = result.cols
      this.tableData = result.data
    }

  },
  watch: {}
}
