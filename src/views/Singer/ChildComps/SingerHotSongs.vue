<template>
    <div>
        <singer-songs 
            v-for="(item, index) in singerSongs" 
            :key="index"
            :song="item"
            :index="index"
            :id="item.id"
            @click.native="playMusic(singerSongs,item.id,index)"/>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 import SingerSongs from "./SingerSongs"
 export default {
   components: {
       SingerSongs
   },
   computed:{
       ...mapState(['singerSongs'])
   },
   methods:{
    playMusic(playlist, songId, index) {
      let list = [];
      playlist.forEach(ele => {
        list.push(ele.id);
      });
      //如果当前音乐列表id与点击音乐列表id不同，则把当前的音乐播放列表更新
      // if (this.playListId !== playlist.id) {
        this.$store.dispatch("updateMusicList", {
          id: playlist.id,
          list,
          index
        });
      // }
      //把当前播放音乐更新
      this.$store.dispatch("getSongDetail", songId);
      //更新当前播放状态
      this.$store.dispatch("updatePlayStatus", true);
      //显示player
      this.$store.dispatch("playerShow", true);
    },
   }
 }
</script>

<style>

 
</style>
