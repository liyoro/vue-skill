
import { somethingData } from '@/api/something'
// import Vue from 'vue'
import son from './component/son.vue'

export default {
  name: 'somethingTestView',
  components: { son },
  data() {
    return {
      showText: '',
      test1: {},
      test2: [],
      test3: [],
      includetest: 0,
      msg: '子组件访问父数据测试'
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
      this.test3 = result.test3

      // 可枚举键值对的值
      // const values = Object.values(this.test1)

      // 可枚举键值对的键值数组
      // const entries = Object.entries(this.test1)

      // 异步迭代，不能保证马上获取到数据的情景，保证是顺序执行
      // for await (const item of this.test2) {
      //   console.log(111, item)
      // }

      // 数组降维，默认1，默认去除空项（空值不去除，例如: ''、 ""）
      // const flatRes = this.test3.flat()
      // 数组嵌套3层了
      // const flatRes = this.test3.flat(2)
      // 无穷降维，多维-->一维，可不关注数组嵌套多少层了
      // const flatRes = this.test3.flat(Infinity)

      // includes
      // const includesRes = this.test3.includes(3)

      // 空值合并运算符
      // const a = 0
      // const b = a ?? 2

      // globalThis

      // 获取vue版本
      /**
      const version = Number(Vue.version.split('.')[0])

      if (version === 2) {
        // Vue v2.x.x
      } else if (version === 1) {
        // Vue v1.x.x
      } else {
        // Unsupported versions of Vue
      }
       */

      // this.showText = version
    },
    // includes 测试
    includeClick() {
      this.includetest = this.$utils.randomIntR(3)
    }
  },
  watch: {}
}
