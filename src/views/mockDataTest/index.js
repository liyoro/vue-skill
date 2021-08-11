import { tableData } from '@/api/table'

export default {
  name: 'mockDataTestView',
  data() {
    return {
      tableCols: [],
      tableData: []
    }
  },
  mounted() {},
  created() {
    this.testMockTable()
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
