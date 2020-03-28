<template>
    <div class="singer-list">
        <div class="header">
            <div class="header-left">
                <i class="iconfont icon-back"></i>
            </div>
            <div class="header-center">歌手分类</div>
            <div class="header-right">
                <i class="iconfont icon-back"></i>
            </div>
        </div>
        <div class="filter">
            <cube-checker
            v-model="checkerLanguage"
            :options="optionsLanguage"
            type="radio"/>
            <cube-checker
            v-model="checkerSinger"
            :options="optionsSinger"
            type="radio"/>
        </div>
        <div class="list-title" @click="test">热门歌手</div>
        <div class="scroll-list-wrap">
            <cube-scroll 
                ref="scroll"
                :scroll-events="['scroll']"
                @scroll="scrollHandler"
                >
                <singer-item v-for="(item,index) in artlist[code].list" 
                             :key="index"
                             :item="item"/>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
 import {mapState,mapGetters} from 'vuex'

 import SingerItem from './ChildComps/SingerItem'

 import {singerCategoryCode} from '@/utils/singerCategoryCode'
 export default {
   data () {
     return {
        scrollY: 0,
        checkerLanguage: [],
        optionsLanguage: [
            {
                value: 1,
                text: '华语'
            },
            {
                value: 2,
                text: '欧美'
            },
            {
                value: 3,
                text: '日本'
            },
            {
                value: 4,
                text: '韩国'
            },
            {
                value: 5,
                text: '其他'
            }
        ],
        checkerSinger: [],
        optionsSinger:[
            {
                value:1,
                text:'男'
            },
            {
                value:2,
                text:'女'
            },
            {
                value:3,
                text:'乐队/组合'
            }
        ],
        code:0,
        currentList:[]
     }
   },
   created(){
       //第一次进入时,获取热门歌手列表
    //    this.getSingerList(0)
    //    let obj = this.artlist
    //    this.currentList = this.singerList
    //    this.currentList = this.artlist[0]
       this.$store.dispatch('getSingerCategory',{cat:0,offset:0})

   },
   mounted(){
        //   console.log("mounted:",this.singerList)
       //    this.currentList = this.artlist[0]
       },
   computed:{
       ...mapState(["artlist"]),
    //    ...mapGetters(["singerList"])
    //    currentList(){
        //        let code = this.getSingerCode(this.checkerLanguage,this.checkerSinger)
    //     //    console.log('code',code)
    //     //    console.log('b',this.artlist)
    //     //    console.log('a',this.artlist[code])
    //        return this.artlist[code]
    //    }
   },
   watch:{
       checkerLanguage(newVal){
           if(newVal.length !== 0 && this.checkerSinger.length === 0){
               this.checkerSinger = 1
           }
           //获取对应条件歌手列表...
           this.$store.dispatch('updateCat')
       },
       checkerSinger(newVal){
           if(newVal.length !== 0 && this.checkerLanguage.length === 0){
               this.checkerLanguage = 1
           }
           //获取对应条件歌手列表...
       }
   },
   components: {
       SingerItem
   },
   methods:{
    test(){
        console.log("this.artlist",this.artlist)
    },
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    getSingerCode(code1,code2){
        let code = code1 + '-' + code2
        return singerCategoryCode(code)
    },
    getSingerList(cat,offset=0){
        console.log("method:",cat+'-'+offset)
        this.$store.dispatch('getSingerCategory',{cat,offset})
    }
   }
 }
</script>

<style>
/* 覆盖cube-ui组件css样式 */
.singer-list .filter .cube-checker .cube-checker-item{
    background: goldenrod;
    color: rgb(255, 255, 255,.3);
}

.singer-list .filter .cube-checker .cube-checker-item_active{
    color: rgb(255, 0, 0,.8);
}

.singer-list .filter .cube-checker .cube-checker-item:after{
    border: none;
}
</style>


<style scoped>
.singer-list{
    height: 100vh;
    background: goldenrod;
}

.singer-list .header{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: rgb(45, 45, 45);
}

.singer-list .header .header-left,
.singer-list .header .header-right{
    width: 15%;
    color: aliceblue;
    line-height: 50px;
    text-align: center;
}

.singer-list .header i{
    font-size: 25px;
}

.singer-list .header .header-center{
    color: aliceblue;
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 1px;
    line-height: 50px;
}
 
.singer-list .filter{
    height: 60px;
}

.singer-list .scroll-list-wrap{
    height: calc(100% - 205px);
}

.singer-list .list-title{
    margin-top:10px;
    height: 25px;
    line-height:25px;
    font-size:12px;
    color:rgb(255, 255, 255,.3);
    padding-left:10px;
    background: gray;
}

</style>
