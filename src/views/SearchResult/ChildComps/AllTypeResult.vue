<template>
    <div class="all-type-result">
      <cube-scroll 
        ref="scroll"
        :scroll-events="['scroll']">
        <div class="song-result container">
          <div class="container-title">
            单曲
          </div>
          <div class="container-content">
            <song-item 
              v-for="(item,index) in allTypeSong"
              :key="index"
              :item="item"
              :isChecked="currentPlay(item.id)"
              @click.native="playMusic(allTypeSong,item.id,index)"/>
          </div>
        </div>
        <div class="singer-result container">
          <div class="container-title">
            歌手
          </div>
          <div class="container-content">
            <singer-item
             v-for="(item,index) in allTypeSinger"
              :key="index"
              :item="item"/>
          </div>
        </div>
        <div class="album-result container">
          <div class="container-title">
            专辑
          </div>
          <div class="container-content">
            <album-item
             v-for="(item,index) in allTypeAlbum"
              :key="index"
              :item="item"/>
          </div>
        </div>
        <div class="musiclist-result container">
          <div class="container-title">
            歌单
          </div>
          <div class="container-content">
            <musiclist-item
             v-for="(item,index) in allTypeMusiclist"
              :key="index"
              :item="item"/>
          </div>
        </div>
      </cube-scroll>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 import SongItem from "@/components/TypeItem/SongItem"
 import SingerItem from "@/components/TypeItem/SingerItem"
 import AlbumItem from "@/components/TypeItem/AlbumItem"
 import MusiclistItem from "@/components/TypeItem/MusiclistItem"

 export default {
   data () {
     return {

     }
   },
   computed:{
     ...mapState(["songDetail","allTypeSong","allTypeSinger","allTypeAlbum","allTypeMusiclist"])
   },
   components: {
     SongItem,
     SingerItem,
     AlbumItem,
     MusiclistItem
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
    currentPlay(id) {
      if (this.songDetail.length) {
        return id == this.songDetail[0].id;
      }
      return false;
    }
   }
 }
</script>

<style scoped>
  .all-type-result{
    height: 100%;
  }

  .all-type-result .container{
    margin-bottom: 20px;
  }

  .all-type-result .container .container-title{
    color: rgb(0, 0, 0);
    font-size: 19px;
    letter-spacing: 1px;
    padding: 10px 0;
  }

 
</style>
