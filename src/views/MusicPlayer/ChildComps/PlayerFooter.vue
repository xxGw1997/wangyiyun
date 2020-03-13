<template>
 <div class="player-footer">
    <div class="progess-bar">
        <div class="bar-left">0:12</div>
        <div class="bar-center"></div>
        <div class="bar-right">1:11</div>
    </div>
    <div class="music-operation">
        <div class="operation-item music-mode">
            <i class="iconfont icon-share"/>
        </div>
        <div class="operation-item last">
            <i class="iconfont icon-last"/>
        </div>
        <div class="operation-item play">
            <i class="iconfont icon-play"/>
        </div>
        <div class="operation-item next">
            <i class="iconfont icon-next"/>
        </div>
        <div class="operation-item gedan">
            <i class="iconfont icon-gedan"/>
        </div>
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
    .player-footer{
        height: 15%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .player-footer .progess-bar{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-around;
        color: aliceblue;
    }

    .player-footer .progess-bar .bar-left,
    .player-footer .progess-bar .bar-right{
        flex:0 0 15%;
        font-size: 12px;
        text-align: center;
    }

    .player-footer .progess-bar .bar-center{
        flex:1 0;
    }

    .player-footer .music-operation{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .player-footer .music-operation .operation-item i{
        font-size: 30px;
        color: aliceblue;
    }

    .player-footer .music-operation .play>i{
        font-size: 60px;
    }
  
</style>
