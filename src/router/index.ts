import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main/home"
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/Index.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "tomato",
        name: "tomato",
        component: () => import("@/views/tomato/Index.vue")
      },
      {
        path: "report",
        name: "report",
        component: () => import("@/views/report/Index.vue")
      },
      {
        path: "mine",
        name: "mine",
        component: () => import("@/views/mine/Index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
