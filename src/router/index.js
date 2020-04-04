import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search/Search";
import AllTypeResult from "@/views/SearchResult/ChildComps/AllTypeResult"

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/searchKeywords",
    name: "searchKeywords",
    component: () => import("@/views/SearchKeywords/SearchKeywords"),
    meta: {
      showFooter: true
    }
  },
  {
    path: "/searchResult",
    component: () => import("@/views/SearchResult/SearchResult"),
    redirect:"/searchResult/allTypeResult",
    children:[
      {
        path:"allTypeResult",
        component:AllTypeResult
      },
      {
        path:"songType",
        name:"songType",
        component:()=>import("@/views/SearchResult/ChildComps/SongType")
      },
      {
        path:"singerType",
        name:"singerType",
        component:()=>import("@/views/SearchResult/ChildComps/SingerType")
      },
      {
        path:"albumType",
        name:"albumType",
        component:()=>import("@/views/SearchResult/ChildComps/AlbumType")
      },
      {
        path:"musicListType",
        name:"musicListType",
        component:()=>import("@/views/SearchResult/ChildComps/MusicListType")
      },
    ],
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
    // redirect:{name:"hotsongs"},
    // children:[
    //   {
    //     path:"hotsongs",
    //     name:"hotsongs",
    //     commponent:() => import("@/views/Singer/ChildComps/SingerHotSongs"),
    //     meta:{
    //       showFooter:true
    //     }
    //   },
    //   {
    //     path:"album",
    //     name:"album",
    //     commponent:() => import("@/views/Singer/ChildComps/SingerAlbums"),
    //     meta:{
    //       showFooter:true
    //     }
    //   },
    //   {
    //     path:"info",
    //     name:"info",
    //     commponent:() => import("@/views/Singer/ChildComps/SingerInfo"),
    //     meta:{
    //       showFooter:true
    //     }
    //   }
    // ],
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
