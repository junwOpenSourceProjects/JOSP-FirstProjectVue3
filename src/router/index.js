import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    // 所有的路径，直接访问到home页面
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    // 这里就是自动配置的路由，设置登录页面的路由
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/demoLogin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
