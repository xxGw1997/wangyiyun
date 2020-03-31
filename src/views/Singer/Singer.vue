<template>
    <div class="singer">
        <div class="singer-bg">
            <div class="singer-header">
                <div class="header-back">
                    <i class="iconfont icon-back"></i>
                </div>
                <div>
                    <i class="iconfont icon-zhengzaibofang"></i>
                </div>
            </div>
            <div class="singer-bg-black"></div>
            <img src="http://p2.music.126.net/UI_5fJZa9AHRfJ1AywjSog==/78065325577772.jpg" alt="" ref="daily-recommend-songs-bg-img">
        </div>
        <div class="scroll-list-wrap">
          <cube-sticky :pos="scrollY">
               <cube-scroll
                    ref="scroll"
                    @scroll="scrollHandler"
                    :scroll-events="scrollEvents">
                    <div class="singer-info">
                        <div class="info-left">
                            <div class="singer-name">赵小棠</div>
                            <div class="singer-info">被收藏了11.2万次</div>
                        </div>
                        <div class="info-right">
                            <span>+</span> 收 藏
                        </div>
                    </div>
                    <div class="singer-content">
                        <div class="singer-title">
                            <cube-sticky-ele>
                                    <div class="singer-title-sticky">
                                        <div class="singer-title-word">
                                             <cube-tab-bar 
                                                v-model="selectedLabel" 
                                                show-slider                        
                                                >
                                                <cube-tab 
                                                    v-for="(item, index) in tabs" 
                                                    :key="index" 
                                                    :label="item"
                                                    :value="index"
                                                    >
                                                </cube-tab>
                                            </cube-tab-bar>
                                        </div>
                                    </div>
                            </cube-sticky-ele>
                        </div>
                        <div>
                            <cube-tab-panels v-model="selectedLabel">
                                    <cube-tab-panel label="热门单曲" :value="0">
                                        <singer-hot-songs/>
                                    </cube-tab-panel>
                                    <cube-tab-panel label="专辑" :value="1">
                                        <singer-albums/>
                                    </cube-tab-panel>
                                    <cube-tab-panel label="艺人信息" :value="2">
                                        <singer-info/>
                                    </cube-tab-panel>
                            </cube-tab-panels>
                        </div>
                    </div>  
                </cube-scroll>
          </cube-sticky>
        </div>
    </div>
</template>

<script>
 import {mapState} from 'vuex'
 
 const SingerHotSongs = () => import("./ChildComps/SingerHotSongs")
 const SingerAlbums = () => import("./ChildComps/SingerAlbums")
 const SingerInfo = () => import("./ChildComps/SingerInfo")
 export default {
   data () {
     return {
        selectedLabel: 0,
        oldLabel:0,
        tabs: [ '热门单曲', '专辑', '艺人信息'],
        scrollEvents: ['scroll'],
        scrollY:0,
        singerData:{
            songs:{
                scrollY:0,
                song:[]
            },
            albums:{
                scrollY:0,
                albums:[]
            },
            info:{
                scrollY:0,
                info:{}
            }
        }
     }
   },
   computed:{
     ...mapState(['singerInfo'])
   },
   watch:{
       scrollY(){
           console.log(this.scrollY)
       },
       selectedLabel(newVal,oldVal){
           console.log(oldVal + "--------->" + newVal)
           this.oldLabel = oldVal
           //记录切换前组件的scrollY的值
           console.log("当前scrollY:",this.scrollY)
           if(oldVal==0){
               this.singerData.songs.scrollY = this.scrollY
           }else if(oldVal==1){
               this.singerData.albums.scrollY = this.scrollY
           }else{
               this.singerData.info.scrollY = this.scrollY
           }
           //更新切换后的组件的scrollY的值
           if(newVal==0){
           }else if(newVal==1){
               this.singerData.albums.scrollY = this.scrollY
           }else{
               this.singerData.info.scrollY = this.scrollY
           }
       }
   },
   components: {
       SingerHotSongs,
       SingerAlbums,
       SingerInfo
    //    SingerSongs
   },
   methods:{
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    // toggle(v){
    //     //记录切换前组件当前的scrollY的值
    //     console.log("当前scrollY:",this.scrollY)
    //     console.log("之前label:",this.oldLabel)
    //     console.log("当前label:",this.selectedLabel)
    //     console.log("点击:",v)
    // }
   }
 }
</script>

<style scoped>
.singer{
  background: aquamarine;
  height: 100vh;
}

.singer-bg{
    position: fixed;
    width: 100%;
    height: 45%;
    z-index: 1;
}

.singer-bg .singer-header{
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-between;
}

.singer-bg .singer-header>div>i{
    margin: 0 15px;
    font-size: 25px;
    color: white;
    line-height: 50px;
}

.singer-bg .singer-bg-black{
    position: absolute;
    background: rgb(0, 0, 0,.9);
    width: 100%;
    height: 100%;
}

.singer-bg>img{
    width: 110%;
    height: 100%;
    transform: scale(1.1,1.1);
}

.scroll-list-wrap{
    position: relative;
    top:50px;
    height: calc(100% - 110px);
}

.scroll-list-wrap .singer-info{
    width: 100%;
    height: 230px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.scroll-list-wrap .singer-info .info-left{
    width: 70%;
    height: 50px;
    margin-left: 20px;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
}

.singer-info .info-left .singer-name{
    width: 100%;
    height: 25px;
    color: white;
    font-size: 25px;
}

.singer-info .info-left .singer-info{
    width: 100%;
    height: 15px;
    color: white;
    font-size: 12px;
}

.singer .scroll-list-wrap .singer-info .info-right{
    width: 25%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 20px;
    border-radius: 20px;
    font-size: 15px;
    background: rgba(255, 0, 0,.9);
    color: white;
}

.singer .scroll-list-wrap .singer-info .info-right span{
    font-size: 20px;
}

.singer .scroll-list-wrap .singer-content{
    margin-top: 10px;
    background:rgb(77, 77, 77);
}

.singer .scroll-list-wrap .singer-content .singer-title{
    height: 40px;
    background: tomato;
}

.singer-title-sticky{
    height: 40px;
    background: rgb(77, 77, 77);
}
 
</style>

<style>
/*覆盖原始样式*/
.singer-title-sticky .singer-title-word .cube-tab-bar{
    width:100%;
    display: flex;
    justify-content: space-between;
}

.singer-title-sticky .singer-title-word .cube-tab-bar .cube-tab{
    padding:10px 0px;
    color:white;
    font-weight: bolder;
    border-bottom:1px solid rgba(255, 255, 255,.2);
}

.singer-title-sticky .singer-title-word .cube-tab-bar .cube-tab_active{
    color:red;
}

.singer-title-sticky .singer-title-word .cube-tab-bar .cube-tab-bar-slider{
    height:3px;
    background-color:red;
}

/* .singer-title-sticky .singer-title-word .cube-tab-bar .cube-tab>div{
    width:80%;
    text-align: center;
} */
</style>
