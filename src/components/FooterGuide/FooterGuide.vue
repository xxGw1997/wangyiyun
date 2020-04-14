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
  methods: {
    isActive(currentPath) {
      return this.$route.path === currentPath;
    }
  }
};
</script>

<style>
.footer-guide {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: black solid 1px;
  height: 60px;
  display: flex;
  flex: 1;
  background: rgb(240, 240, 240);
}

.footer-guide .guide-item {
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  color: rgb(100, 100, 100);
}

.footer-guide .active {
  color: red;
}

.footer-guide .guide-item div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-guide .guide-item div i {
  font-size: 25px;
}

.footer-guide .guide-item div span {
  font-size: 12px;
}
</style>
