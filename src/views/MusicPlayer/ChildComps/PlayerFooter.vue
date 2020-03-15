<template>
 <div class="player-footer">
    <div class="progess-bar">
        <div class="bar-left">{{format(currentTime)}}</div>
        <div class="bar-center"></div>
        <div class="bar-right">{{format(duration)}}</div>
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
   props:{
        currentTime:{
           type:Number,
           default(){
               return 0
           }
        },
        duration:{
            type:Number,
            default(){
                return 0
            }
        }
   },
   methods:{
       format(time){
            time = time | 0
            let minute = time / 60 | 0
            if(minute < 10){
                minute = '0' + minute
            }
            let second = time % 60
            if (second < 10) {
                second = '0' + second
            }
            return minute + ':' + second
       }
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
