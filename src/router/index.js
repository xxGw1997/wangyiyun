import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search/Search.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
