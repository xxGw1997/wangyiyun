<template>
    <div class="album-item">
        <div class="album-avatar">
            <img :src="item.picUrl" alt="">
        </div>
        <div class="album-info">
            <div class="album-name">{{item.name}}</div>
            <div class="album-singer">
                <span>{{item.artist.name}}</span>
                <span>{{publishTime}}</span>
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
   },
    computed:{
        publishTime(){
            let date = new Date(this.item.publishTime)
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        }
    }
 }
</script>

<style lang="scss" scoped>
.album-item {
  height: 70px;
  margin: 10px 0;
  display: flex;
  .album-avatar {
    width: 70px;
    height: 70px;
    & > img {
      width: 70px;
      height: 70px;
      border-radius: 5px;
    }
  }
  .album-info {
    height: 70px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    align-items: center;
    align-content: center;
    .album-name {
      width: 100%;
      height: 20px;
      font-size: 18px;
      color: rgb(0, 0, 0);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .album-singer {
      width: 100%;
      height: 20px;
      margin-top: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      & > span {
        margin-right: 10px;
      }
    }
  }
}
</style>
