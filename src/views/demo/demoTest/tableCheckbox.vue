<template>
<div>
  <!--超出部分隐藏,显示 tooltip-->
  <el-table
    ref="multipleTable"
    :data="tableData"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55" fixed="left">
    </el-table-column>
    <el-table-column
      type="index"
      width="70"
      align="center"
      label="序號"
      fixed="left">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="date"
      label="日期"
      width="120">
      <!--        <template slot-scope="scope">-->
      <!--          <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">-->
      <!--            {{ scope.row.date }}-->
      <!--          </el-tooltip>-->
      <!--        </template>-->
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      label="测试表格tooltip">
      <template slot-scope="scope">
        <el-tooltip class="item" effect="dark" :content="scope.row.address" placement="top-start">
              <span>
                {{ scope.row.address }}
              </span>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
</div>
</template>

<script>
    import {tableData} from "./dataTest";

    export default {
        name: "tableCheckbox",
        data(){
            return {
                tableData: tableData,
                multipleSelection: [],
            }
        },
        methods:{
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
        }
    }
</script>

<style scoped>

</style>