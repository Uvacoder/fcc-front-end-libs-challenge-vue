import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () => import("../views/Calculator.vue"),
  },
  {
    path: "/pomodoro",
    name: "Pomodoro",
    component: () => import("../views/Pomodoro.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
