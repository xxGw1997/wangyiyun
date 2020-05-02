<template>
    <div class="singer-list">
        <div class="header">
            <div class="header-left" @click="back">
                <i class="iconfont icon-back"></i>
            </div>
            <div class="header-center">歌手分类</div>
            <div class="header-right">
                <i class="iconfont icon-zhengzaibofang"
                        v-show="songDetail[0]"
                        @click="playerShow"/>
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
        <div class="list-title">热门歌手</div>
        <div class="scroll-list-wrap">
            <cube-scroll 
                ref="scroll"
                :scroll-events="['scroll']"
                @scroll="scrollHandler"
                :options="options"
                @pulling-up="onPullingUp"
                >
                <singer-item v-for="(item,index) in artlist[code].list" 
                             :key="index"
                             :item="item"
                             @click.native="singerInfo(item.id)"/>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
 import {mapState} from 'vuex'

 import SingerItem from './ChildComps/SingerItem'

 import {singerCategoryCode} from '@/utils/singerCategoryCode'
 import {debounce} from '@/utils/util'
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
        currentList:[],
        pullUpLoad:true,
     }
   },
   created(){
       this.$store.dispatch('getSingerCategory',{cat:0,offset:0})
   },
   computed:{
       ...mapState(["artlist","cat","songDetail"]),
       options(){
           return{
                pullUpLoad: this.pullUpLoad
           }
       }
   },
   watch:{
       checkerLanguage(newVal){
           if(newVal.length !== 0 && this.checkerSinger.length === 0){
               this.checkerSinger = 1
           }
           //获取对应条件歌手列表...
           this.setSingerCode(this.checkerLanguage,this.checkerSinger)
           let offset = this.getCurrOffset(this.code)
           if(newVal == 1 && this.checkerSinger == 1) return
           debounce(this.firstSingerList,500)(this.code,offset)
       },
       checkerSinger(newVal){
           if(newVal.length !== 0 && this.checkerLanguage.length === 0){
               this.checkerLanguage = 1
           }
           //获取对应条件歌手列表...
           this.setSingerCode(this.checkerLanguage,this.checkerSinger)
           let offset = this.getCurrOffset(this.code)
            debounce(this.firstSingerList,500)(this.code,offset)
       }
   },
   components: {
       SingerItem
   },
   methods:{
    back(){
        this.$router.go(-1)
    },
    playerShow() {
      this.$store.dispatch("playerShow", true);
    },
    singerInfo(id){
        this.$router.push({path:'singer',query:{id}})
    },
    onPullingUp(){
        let cat = this.cat
        let offset = this.artlist[cat].offset
        console.log("cat:",cat)
        console.log("offset:",offset)
        this.getSingerList(cat,offset)
        setTimeout(() => {
            this.$refs.scroll.forceUpdate()
            this.$refs.scroll.refresh()
        }, 1000);
    },
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    getSingerCode(code1,code2){
        let code = code1 + '-' + code2
        return singerCategoryCode(code)
    },
    firstSingerList(code,offset){
        this.$store.dispatch('getSingerCategory',{cat:code,offset})
    },
    getSingerList(cat,offset=0){
        offset += 15
        this.$store.dispatch('getSingerCategory',{cat,offset})
    },
    setSingerCode(){
        this.code = this.getSingerCode(this.checkerLanguage,this.checkerSinger)
        this.$store.dispatch('updateCat',this.code)
    },
    getCurrOffset(code){
        return this.artlist[code].offset
    }
   }
 }
</script>




<style scoped>
.singer-list{
    height: 100vh;
    background: rgb(255, 255, 255);
}

.singer-list .header{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: rgb(255, 255, 255);
}

.singer-list .header .header-left,
.singer-list .header .header-right{
    width: 15%;
    color: rgb(0, 0, 0);
    line-height: 50px;
    text-align: center;
}

.singer-list .header i{
    font-size: 25px;
}

.singer-list .header .header-center{
    color: rgb(0, 0, 0);
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
    color:rgba(100, 100, 100);
    letter-spacing: 1px;
    padding-left:10px;
    background: rgb(202, 202, 202);

}

</style>


<style>
/* 覆盖cube-ui组件css样式 */
.singer-list .filter .cube-checker .cube-checker-item{
    color: rgba(0, 0, 0, 0.7);
}

.singer-list .filter .cube-checker .cube-checker-item_active{
    color: rgb(255, 0, 0);
    background: white;
}

.singer-list .filter .cube-checker .cube-checker-item:after{
    border: none;
}
</style>