<template>
    <div class="list-music">
        <div class="music-img">
          <img :src="item.album.picUrl" alt="">
        </div>
        <div class="music-info">
          <div class="info-name" :class="currentPlay(item.id)?'music-checked':''">
            {{item.name}}
          </div>
          <div class="info-singer">
            {{item.artists[0].name}}
          </div>
        </div>
        <div class="music-video item">
          <i class="iconfont icon-video"></i>
        </div>
        <div class="music-operation item">
          <i class="iconfont icon-domore"></i>
        </div>
    </div>
</template>

<script>
 import { mapState } from "vuex";
 export default {
   props:{
     item:{
       type:Object,
       default(){
         return {}
       }
     }
   },
   data () {
     return {

     }
   },
   computed:{
     ...mapState(['songDetail'])
   },
   methods: {
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
.list-music {
  height: 50px;
  display: flex;
  margin: 10px 15px;
  .music-img {
    width: 50px;
    display: flex;
    align-items: center;
    & > img {
      width: 85%;
      border-radius: 5px;
    }
  }
  .music-info {
    flex: 1 0;
    width: 220px;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 5px;
    .info-name {
      width: 100%;
      height: 32px;
      line-height: 32px;
      font-size: 20px;
      letter-spacing: 1px;
      color: rgba(255, 255, 255,.9);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .music-checked {
      color: red;
    }
    .info-singer {
      width: 100%;
      height: 15px;
      line-height: 15px;
      font-size: 12px;
      letter-spacing: 1px;
      color: rgba(255, 255, 255,.4);
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .item {
    width: 35px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    & > i {
      font-size: 20px;
      color: rgba(255, 255, 255,.4);
    }
  }
} 
</style>
