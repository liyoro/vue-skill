/**
 *  百度地图坐标选点组件
 *
 */
<template>
  <div class="point-select-dialog">
    <el-dialog
      title="选择地图坐标"
      :visible.sync="dialogVisible"
      width="820px"
      center>
      <div v-if="dialogVisible" class="content">
        <div class="t-view">
          <span>地址名称</span>
          <el-input v-model="searchValue" class="s-input" placeholder="请输入内容" clearable size="small" />
          <el-button type="primary" size="small" @click="searchClick">查询</el-button>
          <span class="res-label">位置经纬度：{{ point.toString() }}</span>
        </div>
        <div class="tip-view">提示：可通过鼠标单击地图任意位置选取摄像机的位置</div>
        <bmap-view
          ref="bMap"
          :height="320"
          :show-navigation-control="true"
          :geo-coder="true"
          class="map-view"
          @bmap-point-select="bmapPointSelect" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="confirmCllick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PointSelectDialog',
  components: {
    BmapView: () => import ('@/components/bmap/index.vue')
  },
  props: {
  },
  data() {
    return {
      dialogVisible: false,
      point: [],
      searchValue: ''
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
    show() {
      this.dialogVisible = true
    },
    cancelClick() {
      this.dialogVisible = false
      this.$emit('cancelClick')
    },
    confirmCllick() {
      this.dialogVisible = false
      this.$emit('confirmCllick', this.point)
    },
    bmapPointSelect(res) {
      // console.log(res)
      this.point = res.point
      this.searchValue = res.address
    },
    searchClick() {
      const local = new BMap.LocalSearch(this.$refs.bMap.map, {
        renderOptions: { map: this.$refs.bMap.map }
      })
      local.search(this.searchValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.point-select-dialog {
    ::v-deep .el-dialog__body {
        padding: 12px;
    }
    ::v-deep .el-dialog__footer {
        padding: 0 10px 10px;
        text-align: right;
    }
    .map-view {
        width: 800px;
        height: 320px;
    }
    .content {
        position: relative;
        text-align: center;
        .t-view {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .s-input {
                width: 320px;
                margin: 0 10px 0 10px;
            }
        }
        .tip-view {
            font-size: 12px;
            color: rgba(255, 0, 0, 1);
            text-align: left;
            margin: 10px 0 10px 0;
        }
        .res-label {
            font-size: 12px;
            margin-left: 10px;
        }
    }
}
</style>
