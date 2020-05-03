<template>
    <div class="musiclist-item">
        <div class="musiclist-avatar">
            <img :src="item.coverImgUrl" alt="">
        </div>
        <div class="musiclist-info">
            <div class="musiclist-name">{{item.name}}</div>
            <div class="musiclist-singer">
                <span>{{item.trackCount}}首音乐</span>
                <span>by {{item.creator.nickname}}</span>
                <span>播放{{item.playCount}}次</span>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    }
 }
</script>

<style lang="scss" scoped>
.musiclist-item {
  height: 70px;
  margin: 10px 0;
  display: flex;
  .musiclist-avatar {
    width: 70px;
    height: 70px;
    & > img {
      width: 70px;
      height: 70px;
      border-radius: 5px;
    }
  }
  .musiclist-info {
    height: 70px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    align-items: center;
    align-content: center;
    .musiclist-name {
      width: 90%;
      height: 20px;
      font-size: 18px;
      color: rgb(0, 0, 0);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .musiclist-singer {
      width: 90%;
      height: 20px;
      margin-top: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      & > span {
        margin-right: 10px;
      }
    }
  }
} 
</style>
