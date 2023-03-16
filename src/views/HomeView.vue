<template>
  <div>
    <div style="padding: 10px">
      <el-button>新增</el-button>
      <el-button>导入</el-button>
      <el-button>导出</el-button>
    </div>
    <div style="margin: 10px 0">
      <el-input v-model="search" style="width: 20%"></el-input>
      <el-button style="margin-left: 5px" @click="queryData">查询</el-button>
      <!--<el-button style="margin-left: 5px" @click="queryData2"-->
      <!--  >查询所有-->
      <!--</el-button>-->
    </div>
    <div style="padding: 10px">
      <el-table :data="tableData" style="width: 1500px; min-height: 100vh">
        <el-table-column fixed label="排名" prop="rank" sortable />
        <el-table-column label="姓名" prop="studentName" sortable />
        <el-table-column label="政治" prop="scorePolite" sortable />
        <el-table-column label="英语" prop="scoreEnglish" sortable />
        <el-table-column label="专业课一" prop="scoreProfessional1" sortable />
        <el-table-column label="专业课二" prop="scoreProfessional2" sortable />
        <el-table-column label="总分" prop="scoreTotal" sortable />
        <el-table-column label="公共课总分" prop="scoreTotalPublic" sortable />
        <el-table-column
          label="专业课总分"
          prop="scoreTotalProfessional"
          sortable
        />
        <el-table-column label="红果研排名" prop="hgyRank" sortable />
        <el-table-column label="考研盒子排名" prop="kyBoxRank" sortable />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button
              link
              size="small"
              type="primary"
              @click="openDialog(scope.row)"
              >编辑
            </el-button>
            <el-button
              link
              size="small"
              type="primary"
              @click="deleteLine(scope.row.id)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 10px">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageNum"
          :background="background"
          :disabled="disabled"
          :page-sizes="pageSize4"
          :small="small"
          :total="pageTotal"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axiosRequest from "@/utils/axiosRequest";
import { ElMessage, ElMessageBox } from "element-plus";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      search: "",
      testForm: {},
      pageNum: 1,
      currentPage4: 4,
      pageTotal: 4,
      pageSize4: [100, 200, 300, 400],
      small: false,
      background: false,
      disabled: false,
      dialogData: null,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
      ],
    };
  },
  created() {
    this.queryData();
  },
  methods: {
    handleSizeChange(pageSize) {
      this.pageSize4 = pageSize;
      this.queryData(); //刷新数据
    },
    handleCurrentChange(pageNum) {
      this.currentPage4 = pageNum;
      this.queryData(); //刷新数据
    },
    queryData() {
      console.log("我是请求");
      axiosRequest
        .get("/user", {
          params: {
            // console.log("我是请求2");
            pageNum: this.pageNum,
            pageSize: this.pageSize4,
            search: this.search,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data;
        });
    },
    deleteLine(id) {
      console.log("我是id" + id);
      axiosRequest.delete("/api/user" + id).then((res) => {
        if (res.data.code === "0") {
          this.$message.success(res.data.message);
        } else {
          this.$message.error(res.data.message);
        }
        this.queryData();
      });
    },
    openDialog(row) {
      this.dialogData = JSON.parse(JSON.stringify(row)); // 深拷贝
      if (this.dialogData.id) {
        // 更新
        axiosRequest.put("/api/user", this.dialogData).then((res) => {
          console.log(res);
          if (res.data.code === "0") {
            this.$message.success(res.data.message);
          } else {
            this.$message.error(res.data.message);
          }
          this.queryData(); //更新以后刷新数据
          // this.dia 关闭弹窗
        });
      } else {
        // 新增
        axiosRequest.post("/api/user", this.dialogData).then((res) => {
          console.log(res);
          if (res.data.code === "0") {
            this.$message.success(res.data.message);
          } else {
            this.$message.error(res.data.message);
          }
        });
      }

      ElMessageBox.prompt("Please input your e-mail", "编辑数据", {
        confirmButtonText: "提交",
        cancelButtonText: "取消",
        inputPattern:
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "Invalid Email",
      })
        .then(({ value }) => {
          ElMessage({
            type: "success",
            message: `Your email is:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Input canceled",
          });
        });
    },
  },
};
</script>
