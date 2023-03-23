<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <div
            style="
              height: 50px;
              line-height: 50px;
              border-bottom: 1px solid #ccc;
              display: flex;
            "
          >
            <div
              style="
                width: 200px;
                padding-left: 30px;
                font-weight: bold;
                color: dodgerblue;
              "
            >
              后台管理
            </div>
            <div style="flex: 1"></div>
            <div style="width: 100px">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <!--当前用户-->
                  {{ userToken }}
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item @click="logout"
                      >退出系统
                    </el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <!--<el-main> </el-main>-->
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  userName: "demoHeader",
  created() {
    console.log("我是结果", this.$store.state.userToken);
    // const userToken = JSON.parse(window.sessionStorage.getItem("userToken"));
  },
  data() {
    return {
      // 获取对话中拿到的token用户信息
      userToken: JSON.parse(window.sessionStorage.getItem("token")),
    };
  },
  methods: {
    logout() {
      // 按理来说要清除token，但是这里没有token，所以先不写
      this.$router.push("/login");
    },
  },
  mounted() {
    console.log("我是结果", this.userToken);
  },
};
</script>

<style scoped></style>
