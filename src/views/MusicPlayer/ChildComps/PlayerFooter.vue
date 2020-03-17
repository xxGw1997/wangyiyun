<template>
 <div class="player-footer">
    <div class="progess-bar">
        <div class="bar-left">{{format(currentTime)}}</div>
        <div class="bar-center">
            <progress-bar 
                :percent="percent" 
                progressBarName="music"
                @music_updateProgress="updateProgress"/>
        </div>
        <div class="bar-right">{{format(duration)}}</div>
    </div>
    <div class="music-operation">
        <div class="operation-item music-mode" @click="toggleMode">
            <i class="iconfont icon-share"/>
        </div>
        <div class="operation-item last" @click="prev">
            <i class="iconfont icon-last"/>
        </div>
        <div class="operation-item play" @click="togglePlay">
            <i class="iconfont icon-play"/>
        </div>
        <div class="operation-item next" @click="next">
            <i class="iconfont icon-next"/>
        </div>
        <div class="operation-item gedan" @clic="showMusicList">
            <i class="iconfont icon-gedan"/>
        </div>
    </div>
 </div>
</template>

<script>
 import {mapState} from 'vuex'

 import ProgressBar from '@/components/ProgressBar/ProgressBar'

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
        },
        percent:{
            type:Number,
            default(){
                return 0
            }
        }
   },
   computed:{
       ...mapState(['musicList','currentMusicIndex'])
   },
   components:{
       ProgressBar
   },
   methods:{
       updateProgress(percent){
           this.$emit('changeProgressBar',percent)
       },
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
       },

       /*操作 */

       toggleMode(){

       },

       prev(){
           console.log('abvc:',this.musicList)
           console.log('index:',this.currentMusicIndex)
       },

       togglePlay(){

       },

       next(){
           
       },

       showMusicList(){

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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .player-footer .progess-bar .bar-center{
        flex:0 0 70%;
        width: 100px;
        display: flex;
        align-items: center;
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
