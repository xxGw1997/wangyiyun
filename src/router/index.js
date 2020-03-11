import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search/Search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    redirect:'/search'
  },{
    path:"/search",
    name:"search",
    component:Search
  },{
    path:"/video",
    name:"video",
    component: () => import('@/views/Video/Video')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
