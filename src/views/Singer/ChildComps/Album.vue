<template>
    <div class="album">
        <div class="album-img">
            <img :src="album.picUrl">
        </div>
        <div class="album-info">
            <div class="album-name">{{album.name}}</div>
            <div class="album-time">
                <span>{{publishTime}}</span>
                <span>{{album.size}}首</span>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    props:{
        album:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        publishTime(){
            let date = new Date(this.album.publishTime)
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        }
    }
 }
</script>

<style lang="scss" scoped>
.album {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  .album-img {
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin: 0 15px;
    & > img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .album-info {
    width: 70%;
    flex: 1 0;
    margin-right: 15px;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    .album-name {
      width: 100%;
      height: 25px;
      line-height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.9);
    }
    .album-time {
      width: 100%;
      height: 15px;
      line-height: 15px;
      font-size: 12px;
      color: rgba(100, 100, 100, 0.7);
      & > span {
        margin-right: 10px;
      }
    }
  }
}
</style>
