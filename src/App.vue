<template>
  <div>
    <!--&lt;!&ndash;头部&ndash;&gt;-->
    <!--<demo-header></demo-header>-->
    <!--<div style="display: flex">-->
    <!--  &lt;!&ndash;左侧菜单&ndash;&gt;-->
    <!--  <demo-aside />-->
    <!--  &lt;!&ndash;路由视图&ndash;&gt;-->
    <!--<router-view />-->
    <!--  &lt;!&ndash;这里不应该直接引入路由，因为我们在main.js中已经引入了路由，所以这里直接使用即可&ndash;&gt;-->
    <!--</div>-->
    <!--把上面的所有代码直接迁移到Layout中-->
    <!--然后再layout就替代了这里的功能-->
    <!--才算是比较规范的开发-->
    <router-view />
    <!--这里保留一个router-view，-->
    <!--保证所有的内容通过路由来展示-->
    <!--实际上是做了一个路由的嵌套-->
  </div>
</template>

<style></style>
<script>
// import demoHeader from "@/components/demoHeader.vue";
// import DemoAside from "@/components/demoAside.vue";

export default {
  name: "app",
  components: {
    // DemoAside,
    // demoHeader,
  },
};
</script>
