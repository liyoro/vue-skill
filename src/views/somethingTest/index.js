
import { somethingData } from '@/api/something'

export default {
  name: 'somethingTestView',
  components: { },
  data() {
    return {
      showText: '',
      test1: {},
      test2: []
    }
  },
  mounted() {
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      const { code, result } = await somethingData()
      if (code !== 0) return
      this.test1 = result.test1
      this.test2 = result.test2

      // 可枚举键值对的值
      // const values = Object.values(this.test1)

      // 可枚举键值对的键值数组
      // const entries = Object.entries(this.test1)

      // 异步迭代，不能保证马上获取到数据的情景，保证是顺序执行
      for await (const item of this.test2) {
        console.log(111, item)
      }

      // this.showText = entries
    }
  },
  watch: {}
}
