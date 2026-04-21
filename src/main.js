import { createApp } from "vue";
import app from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

createApp(app)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: zhCn })
  .mount("#app");
