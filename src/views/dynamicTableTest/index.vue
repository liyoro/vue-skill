<template>
  <div class="dynamicTableTest">
    <h2>动态生成表格</h2>
    <div class="content-view">
      <div class="ctl-view">
        <el-select v-model="searchColItem" clearable placeholder="请选择要搜索的列" size="small" class="ctl-select">
          <el-option
            v-for="item in searchColOption"
            :key="item.prop"
            :label="item.label"
            :value="item.prop" />
        </el-select>
        <el-input v-model="searchText" placeholder="请输入内容" size="small" clearable class="ctl-input" />
        <el-button type="primary" size="small" @click="searchClick">搜索</el-button>
        <el-button size="small" @click="resetClick">重置</el-button>
        <el-button v-if="tableShowData.length>0" type="primary" size="small" @click="handleDownload(tableCols, tableShowData, filename)">导出</el-button>
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
