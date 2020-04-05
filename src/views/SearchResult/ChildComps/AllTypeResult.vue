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
            <song-item/>
            <song-item/>
            <song-item/>
            <song-item/>
            <song-item/>
          </div>
        </div>
        <div class="singer-result container">
          <div class="container-title">
            歌手
          </div>
          <div class="container-content">
            <singer-item/>
            <singer-item/>
            <singer-item/>
            <singer-item/>
            <singer-item/>
          </div>
        </div>
        <div class="album-result container">
          <div class="container-title">
            专辑
          </div>
          <div class="container-content">
            <album-item/>
            <album-item/>
            <album-item/>
          </div>
        </div>
        <div class="musiclist-result container">
          <div class="container-title">
            歌单
          </div>
          <div class="container-content">
            <musiclist-item/>
            <musiclist-item/>
            <musiclist-item/>
          </div>
        </div>
      </cube-scroll>
    </div>
</template>

<script>
 import SongItem from "@/components/TypeItem/SongItem"
 import SingerItem from "@/components/TypeItem/SingerItem"
 import AlbumItem from "@/components/TypeItem/AlbumItem"
 import MusiclistItem from "@/components/TypeItem/MusiclistItem"

 export default {
   data () {
     return {

     }
   },
   components: {
     SongItem,
     SingerItem,
     AlbumItem,
     MusiclistItem
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
    color: rgb(255, 255, 255);
    font-size: 19px;
    letter-spacing: 1px;
    padding: 10px 0;
    /* border-bottom: 1px solid rgba(255, 255, 255,.2); */
  }

 
</style>
