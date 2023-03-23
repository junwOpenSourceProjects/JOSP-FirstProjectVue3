<template>
  <div
    style="width: 100%; height: 100vh; background-color: grey; overflow: hidden"
  >
    <!--overflow: hidden-->
    <!--用来删除空白-->
    <div style="width: 400px; margin: 150px auto">
      <div
        style="
          color: #cccccc;
          font-size: 30px;
          text-align: center;
          padding: 30px;
        "
      >
        登录
      </div>
      <el-form ref="form" :model="loginForm" label-width="150px">
        <el-form-item label="用户名：">
          <el-input
            v-model="loginForm.username"
            icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            v-model="loginForm.password"
            icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 30%" type="primary" @click="userLogin"
            >登录
          </el-button>
          <el-button style="width: 30%" type="info">取消</el-button>
          <el-button style="width: 30%" type="danger" @click="showRegister"
            >注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axiosRequest from "@/utils/axiosRequest";

export default {
  name: "demoLogin",
  data() {
    return {
      loginForm: {
        id: "1",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 用户登录方法
    userLogin() {
      axiosRequest.post("/user/login", this.loginForm).then(
        // 注意一下，上面是需要同时提交表单的
        // this.loginForm
        (res) => {
          console.log("我是返回的结果", res);
          if (res.code === 1) {
            // 这里注意字符串和数字的区别
            this.$message({
              message: "登录成功",
              type: "success",
            });
            // 登录成功后，将token存储到sessionStorage中
            sessionStorage.setItem("token", JSON.stringify(res.data));
            // 登录成功后，跳转到首页
            this.$router.push("/");
          } else {
            this.$message({
              message: "登录失败",
              type: "error",
            });
          }
        },
        (err) => {
          console.log("登录错误", err);
        }
      );
    },
    // 直接跳转到注册页面
    showRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped></style>
