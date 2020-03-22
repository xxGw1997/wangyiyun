import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search/Search";
import DailyRecommendSongs from "../views/DailyRecommendSongs/DailyRecommendSongs";

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
    component: DailyRecommendSongs,
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
      showFooter: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
