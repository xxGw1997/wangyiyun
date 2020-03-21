<template>
  <div id="app">
    <transition name="player">
      <music-player class="music-player" v-show="playerShow" />
    </transition>
    <keep-alive>
      <router-view />
    </keep-alive>
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

/* .player-enter-active, .player-leave-active{
  transition: all .5s ease;
}

.player-enter, .player-leave-to{
  transform: translateX(50px);
  opacity:0;
} */

.music-player {
  height: 100vh;
  float: left;
}
</style>
