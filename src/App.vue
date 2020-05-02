<template>
  <div id="app">
    <transition name="player">
      <music-player class="music-player" v-show="playerShow" />
    </transition>
    <transition name="page">
      <router-view />
    </transition>
    <footer-guide v-show="this.$route.meta.showFooter" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import MusicPlayer from "@/views/MusicPlayer/Player.vue";
import FooterGuide from "@/components/FooterGuide/FooterGuide.vue";


export default {
  name: "App",
  components: {
    MusicPlayer,
    FooterGuide
  },
  computed: {
    ...mapState(["isPlay", "playerShow"])
  }
};
</script>

<style>
@import url("//at.alicdn.com/t/font_1500928_ia21gdtuuk9.css");
@import url("./assets/css/reset.css");
.music-player {
  height: 100vh;
  float: left;
}

/* .player-enter,
.player-leave-to{
  transform: translate3d(0,100%,0);
} 

.player-enter-to,
.player-leave{
  transform: translate3d(0,0,0);
}

.player-enter-active, 
.player-leave-active{
  transition: all 1s;
} */

.page-enter,
.page-leave-to{
  opacity: 0;
}

.page-leave,
.page-enter-to{
  opacity: 1;
}

.page-enter-active,
.page-leave-active{
  transition: all .2s;
}
</style>
