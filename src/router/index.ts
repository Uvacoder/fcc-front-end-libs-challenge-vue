import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () => import(/* webpackChunkName: "about" */ "../views/Calculator.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
