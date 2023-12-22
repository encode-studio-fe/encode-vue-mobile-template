import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { createRouter, createWebHistory } from "vue-router";

// 导入路由组件
import charts from "@/views/charts/index.vue";
import main from "@/views/index.vue";
import mock from "@/views/mock/index.vue";

NProgress.configure({ showSpinner: true, parent: "#app" });

const routes = [
  {
    path: "/",
    name: "main",
    component: main
  },
  {
    path: "/mock",
    name: "mock",
    component: mock
  },
  {
    path: "/charts",
    name: "charts",
    component: charts
  }
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes
});

router.beforeEach((_to, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
