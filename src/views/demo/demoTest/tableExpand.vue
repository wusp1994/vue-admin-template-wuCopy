<template>
  <div>
    <el-table
      :data="tableData"
      ref="table_expand1"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
        <template slot-scope="props">
          <el-button @click="handleExpend(props.row)">
            展开
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      ref="table_expand"
      :data="tableData1"
      @expand-change="handleExpandChange"
      style="width: 100%">
      <el-table-column fixed type="expand">
        <template v-if="props.row.currentChildren.length !== 0" slot-scope="props">
          <div class="twoLevel-table">
            <el-table
              :data="props.row.currentChildren"
              :key="props.row.id"
              style="width: 100%">
              <el-table-column
                fixed
                prop="id"
                label="id"
                width="180">
              </el-table-column>
              <el-table-column
                fixed
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
                v-for="(item,index) in 50"
                :key="index"
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
            <div class="loading"
                 v-if="props.row.total > props.row.currentChildren.length"
                 v-loading="twoLevelLoading"
                 @click="loadingMore(props.row,props.$index)">
              点击加载更多
            </div>
            <div class="loading"
                 v-else>
              没有更多了
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        fixed
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        v-for="(item,index) in 50"
        :key="index"
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    import {tableDataTree} from "./dataTest";
    //每次加载多少数据
    const pageSize = 2;

    export default {
        data() {
            return {
                tableData: [
                    {
                        id: '12987122',
                        name: '好滋好味鸡蛋仔',
                        category: '江浙小吃、小吃零食',
                        desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',
                        shop: '王小虎夫妻店',
                        shopId: '10333'
                    }, {
                        id: '12987123',
                        name: '好滋好味鸡蛋仔',
                        category: '江浙小吃、小吃零食',
                        desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',
                        shop: '王小虎夫妻店',
                        shopId: '10333'
                    }, {
                        id: '12987125',
                        name: '好滋好味鸡蛋仔',
                        category: '江浙小吃、小吃零食',
                        desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',
                        shop: '王小虎夫妻店',
                        shopId: '10333'
                    }, {
                        id: '12987126',
                        name: '好滋好味鸡蛋仔',
                        category: '江浙小吃、小吃零食',
                        desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',
                        shop: '王小虎夫妻店',
                        shopId: '10333'
                    }],
                tableData1: [...tableDataTree],
                twoLevelLoading: false,
            }
        },
        mounted() {
            this.initTableData();
        },
        methods:{
            /**
             * @description 初始化 table 数据
             */
            initTableData(){
                let currentPage = 1;
                this.tableData1.forEach(item=>{
                    item.pageSize = pageSize;//每页显示
                    item.currentPage = currentPage;//当前页码
                    item.pageCount = Math.ceil(item.children.length/pageSize);//总页数
                    item.total = item.children.length;//总数
                    item.currentChildren = [];//当前 children 数据
                })
                console.log(this.tableData1,"tableData1")
            },
            /**
             * @description 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）
             */
            handleExpandChange(row, expandedRows){
                console.log(row,"行",expandedRows,"所有展开的值")
                if(row.currentChildren.length === 0){
                    this.tableData1.forEach(item=>{
                        item.currentChildren = item.children.slice(0,pageSize);//当前 children 数据
                    })
                }
            },
            /**
             * @description 加载更多,前端分页
             * @param row
             * @param $index
             */
            loadingMore(row,$index){
                this.twoLevelLoading = true;
                let { children,pageSize,pageCount,total } = row;
                row.currentPage +=1;
                let end = row.currentPage * pageSize;
                if(row.currentPage === pageCount){//最后一页
                    row.currentChildren = children.slice(
                        0,
                        total
                    );
                }else{//非最后一页
                    row.currentChildren = children.slice(
                        0,
                        end
                    );
                }
                console.log(this.tableData1,"tableData1")
                this.$set(this.tableData1,$index,row);//vue不能检测到数组更新,需要手动set
                setTimeout(()=>{
                  this.twoLevelLoading = false;
                },500)
                this.$nextTick(()=>{
                  this.$refs['table_expand'].toggleRowExpansion(row, true)//设置展开
                })
            },
            handleExpend(row){
                this.$refs['table_expand1'].toggleRowExpansion(row, true)
            }
        }
    }
</script>

<style scoped lang="scss">
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  //二级table样式
  .twoLevel-table{
    width: 100%;
    /deep/ .el-table__header-wrapper{
      display: none;
    }
    /deep/.el-table__expanded-cell{
      padding-top: 0;
      padding-bottom: 0;
    }
    .loading{
      width: 200px;
      padding: 20px 0 0 20px;
      cursor: pointer;
      -moz-user-select:none; /* Firefox私有属性 */
      -webkit-user-select:none; /* WebKit内核私有属性 */
      -ms-user-select:none; /* IE私有属性(IE10及以后) */
      -khtml-user-select:none; /* KHTML内核私有属性 */
      -o-user-select:none; /* Opera私有属性 */
      user-select:none; /* CSS3属性 */
    }
    /deep/ .el-table--scrollable-x .el-table__body-wrapper {
       overflow-x: hidden;
    }
  }

</style>
