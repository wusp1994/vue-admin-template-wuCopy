<template>
  <div>
    <template>
      <el-table
        :data="currentPageData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;line-height: 50px;">
        <el-table-column
          label="ID"
          prop="filmId">
        </el-table-column>

        <el-table-column
          label="预览图"
          prop="imageId">
        </el-table-column>

        <el-table-column
          label="电影名称"
          prop="filmName">
        </el-table-column>

        <el-table-column
          label="导演"
          prop="director">
        </el-table-column>

        <el-table-column
          label="电影时长（分）"
          prop="duration">
        </el-table-column>

        <el-table-column
          label="电影价格（元）"
          prop="price">
        </el-table-column>

        <el-table-column
          label="上映时间"
          prop="date">
        </el-table-column>


        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="small"
              placeholder="搜索">
            </el-input>
          </template>
          <template slot-scope="scope">
            <el-button type="primary" round
                       size="small "
                       @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button type="danger" round
                       size="small "
                       @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <!--分页代码-->
    <div class="block">

      <!--<el-select v-model="pageSize" placeholder="每页显示" size="mini" style="width: 120px" @blur="show(pageSize)">
         <el-option>5条</el-option>
         <el-option>10条</el-option>
         <el-option>15条</el-option>
         <el-option>20条</el-option>
      </el-select>-->

      <el-button type="primary" size="mini" @click="prevPage()">
        上一页
      </el-button>
      <span>第{{currentPage}}页/共{{totalPage}}页</span>
      <el-button type="primary" size="mini" @click="nextPage()">
        下一页
      </el-button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a>共<i>{{totalPage}}</i>页</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="info" size="mini" @click="turn(currentPage)">跳转至</el-button><a>第</a>
      <label><input type="text" style="width: 30px;" v-model="currentPage" @keyup.enter="turn(currentPage)"></label><a>页</a>

    </div>


  </div>
</template>

<script>
    export default {
        name: 'FilmManage',
        data () {
            return {
                search: '',
                tableData: [],  //所有数据
                totalPage: 0, // 统共页数，默认为1
                currentPage: 1, //当前页数 ，默认为1
                pageSize: 7, // 每页显示数量
                currentPageData: [] //当前页显示内容
            }
        },
        components: {},
        mounted(){},
        created: function () {
            var arr = this
            arr.axios.get('film/listFilm')
            .then((response) => {
                console.log(response.data)//请求的返回体
                arr.tableData = response.data
            })
            .catch((error) => {
                console.log(error)//异常
            })
            arr.axios.get('film/count')
            .then((response) => {
                console.log(response.data)//请求的返回体
                // 计算一共有几页
                this.totalPage = Math.ceil(response.data/this.pageSize);
                console.log(this.totalPage)

                this.getCurrentPageData();
            })
            .catch((error) => {
                console.log(error)//异常
            })

        },

        methods: {
            /*编辑和删除*/
            handleEdit (index, row) {
                console.log(index, row)
            },
            handleDelete (index, row) {
                console.log(index, row)
            },
            /*分页操作*/
            // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
            // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
            getCurrentPageData() {
                let begin = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                this.currentPageData = this.tableData.slice(
                    begin,
                    end
                );
            },
            //上一页
            prevPage() {
                console.log(this.currentPage);
                if (this.currentPage === 1) {
                    return false;
                } else {
                    this.currentPage--;
                    this.getCurrentPageData();
                }
            },
            // 下一页
            nextPage() {
                if (this.currentPage === this.totalPage) {
                    return false;
                } else {
                    this.currentPage++;
                    this.getCurrentPageData();
                }
            },
            /*跳转*/
            turn(currentPage) {
                let begin = (currentPage - 1) * this.pageSize;
                let end = currentPage * this.pageSize;
                this.currentPageData = this.tableData.slice(
                    begin,
                    end
                );
            },
            /*每页显示*/
            show(size) {
                let begin = (this.currentPage - 1) * size;
                let end = this.currentPage * size;
                this.currentPageData = this.tableData.slice(
                    begin,
                    end
                );
            },
        },
    }
</script>

<style scoped>

</style>