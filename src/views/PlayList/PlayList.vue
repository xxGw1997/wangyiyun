<template>
  <div>
    <div class="playlist">
      <header-top class="header-top">
        <div class="header_left" slot="left" @click="$router.go(-1)">
          <i class="iconfont icon-back"></i>
        </div>
        <div class="header_center" slot="center">
          歌单
        </div>
      </header-top>
      <scroll class="content">
        <play-info :playListDetail="playListDetail" />
        <music-list :playlist="playListDetail" />
      </scroll>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import HeaderTop from "@/components/HeaderTop/HeaderTop";
import Scroll from "@/components/Scroll/Scroll";

import PlayInfo from "./ChildComps/PlayInfo";
import MusicList from "./ChildComps/MusicList";

export default {
  components: {
    HeaderTop,
    Scroll,
    PlayInfo,
    MusicList
  },
  computed: {
    ...mapState(["playListDetail"])
  },
  created() {}
};
</script>

<style scoped>
/* .playlist-enter-active, .playlist-leave-active{
        transition: all 2s;
    }

    .playlist-enter, .playlist-leave-active{
        transition: all 2s;
    } */

.playlist {
  height: 100vh;
  background: rgb(60, 60, 60);
}

.header_center {
  text-align: center;
  line-height: 30px;
  color: aliceblue;
}

.content {
  width: 95%;
  height: calc(100% - 110px);
  overflow: hidden;
  position: relative;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
