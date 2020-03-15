<template>
    <div class="player-header">
        <div class="header-left" @click="back">
            <i class="iconfont icon-back"/>
        </div>
        <div class="header-center">
            <div class="music-name">{{songName}}</div>
            <div class="music-author">{{songSinger}}</div>
        </div>
        <div class="header-right">
            <i class="iconfont icon-share"/>
        </div>
    </div>
</template>

<script>
 export default {
   props:{
     songName:{
       type:String,
       default(){
         return 'xxGw'
       }
     },
     songSinger:{
         type:String,
         default(){
             return 'xxGw'
         }
     }
   },
   methods:{
       back(){
           this.$store.dispatch('playerShow',false)
       }
   }
 }
</script>

<style scoped>
    .player-header{
        height: 8%;
        display: flex;
    }

    .player .player-header .header-left,
    .player .player-header .header-right{
        flex:0 0 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .player .player-header i{
        font-size: 30px;
        color: aliceblue;
    }


    .player .player-header .header-center{
        flex:1 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: space-around;
    }

    .player .player-header .header-center .music-name{
        width: 100%;
        text-align: center;
        color: aliceblue;
        font-size: 18px;
    }

    .player .player-header .header-center .music-author{
        width: 100%;
        text-align: center;
        color: aliceblue;
        font-size: 15px;
    }
 
</style>
