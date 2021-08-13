import { tableData } from '@/api/table'

export default {
  name: 'dynamicTableTest',
  data() {
    return {
      tableCols: [],
      tableData: [],
      tableShowData: [],
      filename: '',
      searchColOption: [],
      searchColItem: '',
      searchText: ''
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

      const temp = result.searchcols
      if (temp.length > 0) {
        this.searchColOption = temp
        this.searchColItem = temp[0].prop
      }
      this.tableData = result.data
      this.filename = result.filename
      this.tableShowData = this.tableData
    },
    // 列值筛选
    filterTag(value, row) {
      return row.type === value
    },
    // 导出Excel
    handleDownload(tableCols, tableData, filename) {
      const tempname = this.formatDate('yyyy-MM-dd HH:mm:ss')
      const tHeader = []
      const filterVal = []

      tableCols.forEach(item => {
        tHeader.push(item.label)
        filterVal.push(item.prop)
      })
      import('@/utils/Export2Excel').then(excel => {
        const list = tableData
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: filename + tempname,
          autoWidth: true,
          bookType: 'xlsx'
        })
      })
    },
    // 方便对数据特殊处理
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    },
    // 返回格式化时间
    formatDate(fmt) {
      const nowDate = new Date()
      var o = {
        'M+': nowDate.getMonth() + 1, // 月份
        'd+': nowDate.getDate(), // 日
        'H+': nowDate.getHours(), // 小时
        'm+': nowDate.getMinutes(), // 分
        's+': nowDate.getSeconds(), // 秒
        'q+': Math.floor((nowDate.getMonth() + 3) / 3), // 季度
        'S': nowDate.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (nowDate.getFullYear() + '').substr(4 - RegExp.$1.length))
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
      return fmt
    },
    searchClick() {
      if (this.searchText) {
        const searchRes = this.filterOne(this.tableData, this.searchText, [
          this.searchColItem
        ])
        this.tableShowData = searchRes
      } else {
        this.tableShowData = this.tableData
      }
    },
    resetClick() {
      this.searchText = ''

      if (this.searchColOption.length > 0) {
        this.searchColItem = this.searchColOption[0].prop
      }
      this.searchClick()
    },
    filterOne(dataList, value, type) {
      var s = dataList.filter(function(item, index, arr) {
        for (let j = 0; j < type.length; j++) {
          if (item[type[j]] !== undefined || item[type[j]] != null) {
            if (item[type[j]].indexOf(value) >= 0) {
              return item
            }
          }
        }
      })
      return s
    }
  },
  watch: {
  }
}
