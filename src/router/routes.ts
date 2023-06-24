// 定义静态路由
export const constantRoutes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/home/index.vue")
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/404/index.vue")
  },
  {
    name: "any",
    path: "/:pathMather(.*)*",
    redirect: {
      name: "404"
    }
  },
]