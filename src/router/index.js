import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search/Search";
import SingerList from "../views/SingerList/SingerList";

import {getUserInfo} from "@/utils/cache"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/search"
  },
  {
    path: "/search",
    name: "search",
    component: SingerList,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/video",
    name: "video",
    component: () => import("@/views/Video/Video"),
    meta: {
      showFooter: true
    }
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/Mine/Mine"),
    meta: {
      showFooter: true
    }
  },
  {
    path: "/account",
    name: "account",
    component: () => import("@/views/Account/Account"),
    meta: {
      showFooter: true
    }
  },
  {
    path: "/playlist",
    name: "playlist",
    component: () => import("@/views/PlayList/PlayList"),
    meta: {
      showFooter: true
    }
  },
  {
    path: "/userinfo",
    name: "userinfo",
    component: () => import("@/views/UserInfo/UserInfo"),
    meta: {
      showFooter: true
    }
  },
  {
    path: "/dailyrecommendsongs",
    name: "dailyrecommendsongs",
    component: () => import("@/views/DailyRecommendSongs/DailyRecommendSongs"),
    meta: {
      showFooter: true,
      needLogin:true
    }
  },
  {
    path:"/singer",
    name:"singer",
    component: () => import("@/views/Singer/Singer"),
    meta:{
      showFooter:true
    }
  },
  {
    path:"/singerlist",
    name:"singerlist",
    component: () => import("@/views/SingerList/SingerList"),
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

router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    if(getUserInfo().token !== ''){
      next()
    }else{
      // next({
      //   path:'/account'
      // },()=>{})
      router.push('/account')
    }
  }else{
    next()
  }
})

export default router;
