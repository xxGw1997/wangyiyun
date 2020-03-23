<template>
    <div class="list-music">
        <div class="music-img">
          <img src="http://p2.music.126.net/UI_5fJZa9AHRfJ1AywjSog==/78065325577772.jpg" alt="">
        </div>
        <div class="music-info">
          <div class="info-name">
            惺惺惜惺惺
          </div>
          <div class="info-singer">
            xxgwasdsadsadsadsadsadsadsadsadasadsad
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
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
.list-music{
  height: 50px;
  display: flex;
  margin: 10px 15px;
}

.list-music .music-img{
  width: 50px;
  display: flex;
  align-items: center;
}

.list-music .music-img>img{
  width: 85%;
  border-radius: 5px;
}

.list-music .music-info{
  flex: 1 0;
  width: 220px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 5px;
}

.list-music .music-info .info-name{
  width: 100%;
  height: 32px;
  line-height: 32px;
  font-size: 20px;
  letter-spacing: 1px;
  color: rgb(255, 255, 255,.9);
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-music .music-info .info-singer{
  width: 100%;
  height:18px;
  line-height: 10px;
  font-size: 15px;
  letter-spacing: 1px;
  color: rgb(255, 255, 255,.4);
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-music .item{
  width: 35px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.list-music .item>i{
  font-size: 20px;
  color: rgb(255, 255, 255,.4);
}
 
</style>
