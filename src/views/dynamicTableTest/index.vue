<template>
  <div class="dynamicTableTest">
    <h2>动态生成表格</h2>
    <div class="content-view">
      <div class="ctl-view">
        <el-button v-if="tableShowData.length>0" @click="handleDownload(tableCols, tableShowData, filename)" type="primary" size="small">导出</el-button>
      </div>
      <el-table :data="tableShowData" :border="true" height="420" style="width: 100%">
        <el-table-column
          v-for="col in tableCols"
          :key="col.prop"
          :prop="col.prop"
          :label="col.label"
          :filters="col.filters"
          filter-placement="bottom-end"
          :filter-method="filterTag"
          :sortable="col.sortable"
          :class-name="col.filters.length==0?'hide-filter':'show-filter'">
          <template slot-scope="scope">
            <el-popover
              placement="left"
              title=""
              width="auto"
              trigger="click"
              :content="scope.row[col.prop]">
              <div slot="reference" class="overtext">{{ scope.row[col.prop] }}</div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang='scss' scoped>
@import './index.scss'
</style>
