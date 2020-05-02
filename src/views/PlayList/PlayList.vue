<template>
  <div>
    <div class="playlist">
      <div class="backgroundImg">
        <img :src="playListDetail.coverImgUrl" alt="">
      </div>
      <header-top class="header-top">
        <div class="header_left" slot="left" @click="$router.go(-1)">
          <i class="iconfont icon-back"></i>
        </div>
        <div class="header_center" slot="center">
          {{playListDetail.type?'专辑':'歌单'}}
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
  mounted() {
    if(this.$route.query.type == 'album'){
      this.$store.dispatch("getAlbumSongs", this.$route.query.id)
      return
    }
    this.$store.dispatch("getPlayListDetail", this.$route.query.id)
  }
};
</script>

<style scoped>
.playlist {
  height: 100vh;
}

.backgroundImg {
  height: 60%;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  background: rgb(0, 0, 0);
}

.backgroundImg > img {
  width: 200%;
  height: 200%;
  opacity: 0.6;
  filter: blur(50px);
  position: relative;
  left: -50%;
  top: -50%;
}

.header_center {
  text-align: center;
  line-height: 30px;
  color: aliceblue;
}

.content {
  width: 100%;
  height: calc(100% - 110px);
  overflow: hidden;
  position: relative;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
