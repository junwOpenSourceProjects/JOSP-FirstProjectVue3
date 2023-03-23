import { createRouter, createWebHistory } from "vue-router";
import demoLayout from "@/layout/demoLayout.vue";
// import HomeView from "@/views/HomeView.vue";

const routes = [
  // {
  //   path: "/",
  //   // 一开始，所有的路径，直接访问到home页面
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    // 现在我们的首页，是一个layout，所以我们需要把layout作为根节点
    name: "demoLayout",
    redirect: "/home", // 这里就是重定向，重定向到home页面
    component: demoLayout,
    children: [
      // 这里就完成了路由的嵌套（子路由）
      {
        path: "home",
        name: "HomeView",
        component: () => import("../views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    // 这里就是自动配置的路由，设置登录页面的路由
    component: () => import("../views/demoLogin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
