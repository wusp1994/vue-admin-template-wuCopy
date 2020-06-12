<template>
  <div>
    树形数据预加载
    <p class="doc-tip">
      default-expand-all  是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效,默认 false
    </p>
    <p class="doc-tip">
      支持树类型的数据的显示。当 row 中包含 children 字段时，被视为树形数据。渲染树形数据时，必须要指定 row-key
    </p>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    树形数据懒加载
    <p class="doc-tip">
      设置 Table 的 lazy 属性为 true 与加载函数 load 。通过指定 row 中的 hasChildren 字段来指定哪些行是包含子节点。
    </p>
    <p class="doc-tip">
      属性: tree-props 	渲染嵌套数据的配置选项	Object.	默认	{ hasChildren: 'hasChildren', children: 'children' }
    </p>
    <el-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import { tableDataTree,tableDataTree1 } from "./dataTest";

  export default {
        data() {
            return {
                tableData: tableDataTree,
                tableData1: tableDataTree1
            }
        },
        methods: {
            /**
             * 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息
             * @param row      当前节点的数据
             * @param treeNode 节点的层级信息
             * @param resolve 加数据的函数,接受数组
             */
            load(row, treeNode, resolve) {
                console.log(row,'tree', treeNode,'treeNode', resolve,'resolve')
                setTimeout(() => {
                    resolve([
                        {
                            id: 31,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 32,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }
                    ])
                }, 1000)
            }
        },
    }
</script>