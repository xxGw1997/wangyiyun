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
    component:Search,
    meta:{
      showFooter:true
    }
  },{
    path:"/video",
    name:"video",
    component: () => import('@/views/Video/Video'),
    meta:{
      showFooter:true
    }
  },{
    path:"/playlist",
    name:"playlist",
    component: () => import("@/views/PlayList/PlayList"),
    meta:{
      showFooter:true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
