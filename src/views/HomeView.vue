<template>
  <div>
    <div style="padding: 10px">
      <el-button>新增</el-button>
      <el-button>修改</el-button>
      <el-button>删除</el-button>
    </div>
    <div style="margin: 10px 0">
      <el-input v-model="search" style="width: 20%"></el-input>
      <el-button style="margin-left: 5px" @click="queryData">查询</el-button>
    </div>
    <div style="padding: 10px">
      <el-table :data="tableData" height="250" style="width: 1000px">
        <el-table-column fixed label="Date" prop="date" />
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="状态" prop="state" />
        <el-table-column label="城市" prop="city" />
        <el-table-column label="地址" prop="address" />
        <el-table-column label="压缩" prop="zip" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link size="small" type="primary" @click="handleClick"
              >Detail
            </el-button>
            <el-button link size="small" type="primary">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 10px">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :background="background"
          :disabled="disabled"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :total="400"
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

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      search: "",
      testForm: {},
      currentPage4: 4,
      pageSize4: 4,
      small: false,
      background: false,
      disabled: false,
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
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    handleClick() {},
    queryData() {
      console.log("我是请求");
      axiosRequest.post("/user", "1").then((res) => {
        // console.log("我是请求2");
        console.log(res);
      });
    },
  },
};
</script>
