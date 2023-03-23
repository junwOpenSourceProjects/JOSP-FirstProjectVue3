<template>
  <div>
    <!--头部-->
    <demo-header></demo-header>
    <div style="display: flex">
      <!--左侧菜单-->
      <demo-aside />
      <!--路由视图-->
      <router-view />
      <!--这里不应该直接引入路由，因为我们在main.js中已经引入了路由，所以这里直接使用即可-->
    </div>
  </div>
</template>

<style></style>
<script>
import demoHeader from "@/components/demoHeader.vue";
import DemoAside from "@/components/demoAside.vue";

export default {
  name: "layout-demo",
  components: {
    DemoAside,
    demoHeader,
  },
};
</script>
