<template>
    <div class="userInfo">
      <div class="header">12321321</div>
      <scroll class="content">
        <div class="bg-img">
          <img src="http://p1.music.126.net/jClmkz6uoP9RQ0FwsMZbhQ==/18885211718778019.jpg" alt="">
        </div>
        <div class="base-info">sdgvgfdsfdsgg
        </div>
        <div class="music-info">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </div>
      </scroll>
    </div>
</template>

<script>
 import Scroll from '@/components/Scroll/Scroll'
 export default {
   data () {
     return {

     }
   },
   components: {
     Scroll
   }
 }
</script>

<style scoped>
.userInfo{
  height: 100vh;
}

.userInfo .header{
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 11;
}

.userInfo .content{
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  overflow: hidden;
}

.userInfo .content .bg-img{
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: -1;
}

.userInfo .content .bg-img>img{
  height: 50vh;
  position: absolute;
  top:-20px;
  left: 50%;
  transform: translateX(-50%);
  opacity:0.9;
}

.userInfo .content .base-info{
  width: 100%;
  height: 50vh;
  padding-top: 50px;
}
 
</style>
