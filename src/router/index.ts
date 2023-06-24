import {createRouter, createWebHashHistory} from "vue-router";
import {constantRoutes} from "@/router/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    // 切换页面路由时始终滚动到页面顶部
    return {
      top: 0
    }
  }
})

export default router;