<template>
    <div class="song-item">
        <div class="song-info">
            <div class="info-name" :class="isChecked?'checked':''">{{item.name}}</div>
            <div class="info-singer">{{item.ar[0].name}}</div>
        </div>
        <div class="song-more">
            <i class="iconfont icon-domore"></i>
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
       },
       isChecked:{
           type:Boolean,
           default(){
               return false
           }
       }
   }
 }
</script>

<style lang="scss" scoped>
.song-item {
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .song-info {
    max-width: 80%;
    height: 40px;
    .info-name {
      height: 60%;
      color: rgb(0, 0, 0);
      font-size: 18px;
      letter-spacing: 1px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .checked {
      color: red;
    }
    .info-singer {
      height: 40%;
      color: rgba(0, 0, 0, 0.6);
      font-size: 13px;
      letter-spacing: 1px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .song-more {
    height: 40px;
    line-height: 40px;
    & > i {
      font-size: 30px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
