<template>
  <div class="footer">
    <div class="footer-guide">
      <router-link
        to="/search"
        tag="div"
        class="guide-item"
        :class="{ active: isActive('/search') }"
      >
        <div><i class="iconfont icon-search"></i></div>
        <div><span>发现</span></div>
      </router-link>
      <router-link
        to="/video"
        tag="div"
        class="guide-item"
        :class="{ active: isActive('/video') }"
      >
        <div><i class="iconfont icon-video"></i></div>
        <div><span>视频</span></div>
      </router-link>
      <router-link
        to="/mine"
        tag="div"
        class="guide-item"
        :class="{ active: isActive('/mine') }"
      >
        <div><i class="iconfont icon-mine"></i></div>
        <div><span>我的</span></div>
      </router-link>
      <router-link
        to="/friends"
        tag="div"
        class="guide-item"
        :class="{ active: isActive('/friends') }"
      >
        <div><i class="iconfont icon-friends"></i></div>
        <div><span>朋友</span></div>
      </router-link>
      <router-link
        to="/account"
        tag="div"
        class="guide-item"
        :class="{ active: isActive('/account') }"
      >
        <div><i class="iconfont icon-account"></i></div>
        <div><span>账号</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      footerPath:'/search'
    }
  },
  computed:{
    path(){
      return this.$route.path
    }
  },
  watch:{
    path(newVal){
      switch(newVal){
        case '/search':this.footerPath = newVal
        break
        case '/video':this.footerPath = newVal
        break
        case '/mine':this.footerPath = newVal
        break
        case '/friends':this.footerPath = newVal
        break
        case '/account':this.footerPath = newVal
        break
      }
    }
  },
  methods: {
    isActive(currentPath) {
      return this.footerPath === currentPath;
    }
  }
};
</script>

<style lang="scss">
.footer-guide {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: black solid 1px;
  height: 60px;
  display: flex;
  flex: 1;
  background: rgb(240, 240, 240);
  .guide-item {
    display: flex;
    flex-wrap: wrap;
    flex: auto;
    color: rgb(100, 100, 100);
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 25px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  .active {
    color: red;
  }
}
</style>
