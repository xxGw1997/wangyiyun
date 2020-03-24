<template>
    <div class="daily-recommend-songs">
        <div class="drs-bg">
            <div class="drs-header">
                <div class="header-back">
                    <i class="iconfont icon-back"></i>
                </div>
                <div>
                    <i class="iconfont icon-zhengzaibofang"></i>
                </div>
            </div>
            <div class="drs-bg-black"></div>
            <img :src="recommendSongs[0].album.picUrl" alt="" ref="daily-recommend-songs-bg-img">
        </div>
        <div class="scroll-list-wrap">
            <cube-sticky :pos="scrollY">
                <cube-scroll 
                    ref="scroll"
                    @scroll="scrollHandler"
                    :scroll-events="scrollEvents">
                    <div class="drs-title">
                        <div class="title-up">
                            <span>{{dateDay}}</span>
                            <span>/{{dateMonth}}</span>
                        </div>
                        <div class="title-down">
                            <div class="recommend-word">根据你的音乐口味，为你推荐好音乐、好朋友</div>
                            <div class="recommend-user">
                                <div @click="test"><img :src="img" alt=""></div>
                                <div><img :src="img" alt=""></div>
                                <div><img :src="img" alt=""></div>
                            </div>
                        </div>
                    </div>
                    <div class="drs-content">
                        <div class="content-title">
                            <cube-sticky-ele>
                                <div>
                                    <div class="title-sticky">
                                        <div class="title-icon">
                                            <i class="iconfont icon-zhengzaibofang"></i>
                                        </div>
                                        <div class="title-word">
                                            播放全部
                                        </div>
                                    </div>
                                </div>
                            </cube-sticky-ele>
                        </div>
                        <div class="content-list">
                            <div>
                                <list-music v-for="(item,index) in recommendSongs" :key="index" :item="item"/>
                            </div>
                        </div>
                    </div>
                </cube-scroll>
            </cube-sticky>
        </div>
    </div>
</template>

<script>
 import {mapState,mapGetters} from 'vuex'
 import ListMusic from "./ChildComps/ListMusic"
 export default {
   data () {
     return {
        scrollEvents: ['scroll'],
        scrollY:0,
        img:'http://p2.music.126.net/UI_5fJZa9AHRfJ1AywjSog==/78065325577772.jpg'
     }
   },
   created(){
       
   },
   computed:{
    //    ...mapGetters(['recommendSongs']),
       ...mapState(['recommendSongs']),
       dateMonth(){
           let month = new Date().getMonth() + 1
           if(month < 10){
               month = '0' + month
           }
           return month
       },
       dateDay(){
           let day = new Date().getDate()
           if(day<10){
               day = '0' + day
           }
           return day
       }
   },
   watch:{
       recommendSongs(newVal){

       },
       scrollY(newVal){
           let Multiple = 1 - newVal/100
           if(newVal<0){
               this.$refs['daily-recommend-songs-bg-img'].style.transform = `scale(${Multiple},${Multiple})`
           }
       }
   },
   components: {
       ListMusic
   },
   methods:{
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    test(){
        this.$store.dispatch('getRecommendSongs')
    }
   }
 }
</script>

<style scoped>
.daily-recommend-songs{
    height: 100vh;
}

.scroll-list-wrap{
    position: relative;
    top:50px;
    height: calc(100% - 110px);
}

.drs-bg{
    position: fixed;
    width: 100%;
    height: 30%;
    z-index: -1;
}

.drs-bg .drs-header{
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-between;
}

.drs-bg .drs-header>div>i{
    margin: 0 15px;
    font-size: 25px;
    color: white;
    line-height: 50px;
}

.drs-bg .drs-bg-black{
    position: absolute;
    background: rgb(0, 0, 0,.2);
    width: 100%;
    height: 100%;
}

.drs-bg>img{
    width: 100%;
    height: 100%;
    transform: scale(1,1);
}

.scroll-list-wrap .drs-title{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    margin-left: 20px;
    height: 120px;
}

.scroll-list-wrap .drs-title .title-up{
    width: 100%;
    height: 40px;
    color: white;
    font-size: 30px;
}

.scroll-list-wrap .drs-title .title-up>span:nth-of-type(2){
    font-size: 20px;
}

.scroll-list-wrap .drs-title .title-down{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 25px;
    color: rgb(255, 255, 255,.8);
    letter-spacing: 1px;
    font-size: 10px;
}

.scroll-list-wrap .drs-title .title-down .recommend-word{
    line-height: 25px;
}

.scroll-list-wrap .drs-title .title-down .recommend-user{
    display: flex;
    width: 25%;
    line-height: 25px;
    margin-right: 20px;
}

.scroll-list-wrap .drs-title .title-down .recommend-user>div{
    width: 33%;
}

.scroll-list-wrap .drs-title .title-down .recommend-user>div>img{
    width: 90%;
    border-radius: 50%;
}

.scroll-list-wrap .drs-content{
    margin-top: 15px;
    background: rgb(66, 66, 66);
}

.title-sticky{
    width: 100%;
    height: 50px;
    background: rgb(66, 66, 66);
    display: flex;
    align-items: center;
}

.title-sticky .title-icon{
    width: 10%;
    margin-left: 15px;
}

.title-sticky .title-icon>i{
    font-size: 20px;
    color: white;
}

.title-sticky .title-word{
    font-size: 20px;
    color: white;
    letter-spacing: 1px;
}

.content-list{

}
</style>
