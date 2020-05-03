<template>
    <div class="song-type">
      <div v-if="typeSong.length === 0">
        加载中...
      </div>
      <cube-scroll 
        v-else
        ref="scroll"
        :scroll-events="['scroll']">
        <song-item 
          v-for="(item,index) in song()"
          :key="index"
          :item="item"
          :isChecked="currentPlay(item.id)"
          @click.native="playMusic(list,item.id,index)"/>
      </cube-scroll>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 import {transToSongItem} from "@/utils/util"

 import SongItem from "@/components/TypeItem/SongItem"
 export default {
   components: {
     SongItem
   },
   mounted(){
     this.$store.dispatch("searchKeywordType",{type:1,keyword: this.$route.query.keyword})
   },
   computed:{
    ...mapState(["typeSong","songDetail"])
   },
   methods:{
    song(){
      let list = []
      this.typeSong.forEach(ele=>{
        list.push(transToSongItem(ele))
      })
      return list
    },
    playMusic(playlist, songId, index) {
      let list = [];
      playlist.forEach(ele => {
        list.push(ele.id);
      });
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
    currentPlay(id) {
      if (this.songDetail.length) {
        return id == this.songDetail[0].id;
      }
      return false;
    }
   }
 }
</script>

<style lang="scss" scoped>
.song-type{
  height: 100%;
} 
</style>
