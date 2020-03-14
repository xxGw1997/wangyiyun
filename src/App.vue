<template>
  <div id="app">
    <music-player class="music-player" v-show="playerShow"/>
    <router-view/>
    <footer-guide v-show="this.$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import MusicPlayer from '@/views/MusicPlayer/Player.vue'
  import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'

  export default{
    name:'App',
    components:{
      MusicPlayer,
      FooterGuide
    },
    computed:{
      ...mapState(['isPlay','playerShow'])
    }
  }
</script>

<style>
@import url("//at.alicdn.com/t/font_1500928_sh7hy7fw1o.css");
@import url("./assets/css/reset.css");

.music-player{
  height: 100vh;
  float: left;
}

</style>
