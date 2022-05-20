export default {
  name: 'LeftView',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  mounted() {},
  created() {
    this.initData()
  },
  methods: {
    initData() {
    }
  },
  watch: {}
}
