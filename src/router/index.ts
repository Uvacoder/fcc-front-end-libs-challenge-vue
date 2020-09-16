import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Component } from "vue";
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
    component: (): Component => import("../views/Calculator.vue"),
  },
  {
    path: "/pomodoro",
    name: "Pomodoro",
    component: (): Component => import("../views/Pomodoro.vue"),
  },
  {
    path: "/drum-machine",
    name: "DrumMachine",
    component: (): Component => import("../views/DrumMachine.vue"),
  },
  {
    path: "/random-quote-machine",
    name: "Pomodoro",
    component: (): Component => import("../views/RandomQuoteMachine.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
