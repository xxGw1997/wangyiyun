<template>
    <div class="singer-item">
        <div class="singer-avatar">
            <img :src="item.picUrl" alt="">
        </div>
        <div class="singer-name">
            {{item.name}}
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
.singer-item {
  height: 70px;
  margin: 10px 0;
  display: flex;
  .singer-avatar {
    width: 70px;
    height: 70px;
    text-align: center;
    & > img {
      position: relative;
      width: 60px;
      height: 60px;
      top: 5px;
      border-radius: 60px;
    }
  }
  .singer-name {
    height: 70px;
    line-height: 70px;
    margin-left: 10px;
    color: rgb(0, 0, 0);
  }
}
</style>
