<template>
  <div
    style="width: 100%; height: 100vh; background-color: grey; overflow: hidden"
  >
    <div style="width: 400px; margin: 150px auto">
      <div
        style="
          color: #cccccc;
          font-size: 30px;
          text-align: center;
          padding: 30px;
        "
      >
        欢迎注册
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
        <el-form-item label="再次输入密码：">
          <el-input
            v-model="loginForm.confirmPassword"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 30%" type="primary" @click="userLogin"
            >注册
          </el-button>
          <el-button style="width: 30%" type="info">取消</el-button>
          <el-button style="width: 30%" type="danger" @click="showLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axiosRequest from "@/utils/axiosRequest";

export default {
  name: "demoRegister",
  data() {
    return {
      loginForm: {
        id: "1",
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    // 用户注册方法
    userLogin() {
      // 首先校验两次密码是否一致
      if (this.loginForm.password !== this.loginForm.confirmPassword) {
        this.$message({
          message: "两次密码不一致",
          type: "error",
        });
        return;
      }
      // 发送请求，
      // 因为后台没有区分二者，所以这里直接使用登录的接口
      axiosRequest.post("/user/login", this.loginForm).then(
        (res) => {
          console.log("我是返回的结果", res);
          if (res.code === 1) {
            // 这里注意字符串和数字的区别
            this.$message({
              message: "注册成功",
              type: "success",
            });
            // 注册成功后，跳转到登录页面
            this.$router.push("/login");
          } else {
            this.$message({
              message: "注册失败",
              type: "error",
            });
          }
        },
        (err) => {
          console.log("注册错误", err);
        }
      );
    },
    showLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
