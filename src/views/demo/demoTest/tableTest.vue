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
      <el-tab-pane label="单选/多选" name="fourth">
        <el-checkbox v-model="checked.name" :true-label="name" @change="handleChange">备选项</el-checkbox>
        <el-radio-group v-model="checked.name">
          <el-radio :label="name">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
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
                activeName: 'first',
                checked: {
                    name:'1111'
                },
                name: '1111',
                radio: 3
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleChange(newVal){
                console.log(this.checked)
                console.log(newVal)
            }
        }
    }
</script>
<style>
  .tableTest{
    padding: 10px 20px;
  }
</style>