<template>
  <div class="tableTest">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="多选表格&tooltip" name="first">
        <tableCheckbox>
        </tableCheckbox>
      </el-tab-pane>
      <el-tab-pane label="展开行表格" name="second">
        <tableExpand ref="tableExpand">
        </tableExpand>
      </el-tab-pane>
      <el-tab-pane label="树形表格" name="third">
        <tableTree ref="tableTree">
        </tableTree>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
    import tableExpand from "./tableExpand";
    import tableTree from "./tableTree";
    import tableCheckbox from "./tableCheckbox";

    export default {
        name:'tableTest',
        components: {
            tableExpand,
            tableTree,
            tableCheckbox
        },
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>
<style>
  .tableTest{
    padding: 10px 20px;
  }
</style>