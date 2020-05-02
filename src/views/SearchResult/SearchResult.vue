<template>
    <div class="search-result">
        <div class="header">
          <result-header @back="back"/>
        </div>
        <div class="tab-bar">
          <cube-tab-bar 
            v-model="selectedLabel" 
            show-slider>
            <cube-tab
              v-for="(item, index) in tabs" 
              :key="index" 
              :label="item"
              :value="index"
              @click.native="changeType(index)">
            </cube-tab>
         </cube-tab-bar>
        </div>
        <div class="result-content">
          <router-view />
        </div>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 import ResultHeader from "./ChildComps/ResultHeader"

 export default {
   data () {
     return {
       selectedLabel:0,
       oldVal:0,
       tabs: [ '综合', '单曲', '歌手','专辑','歌单'],
     }
   },
   mounted(){
     this.$store.dispatch("searchKeyword", this.$route.query.keyword)
     switch(this.$route.name){
       case 'songType':
        this.selectedLabel = 1
       break
       case 'singerType':
        this.selectedLabel = 2
       break
       case 'albumType':
        this.selectedLabel = 3
       break
       case 'musicList':
        this.selectedLabel = 4
       break
       default:
        this.selectedLabel = 0
       break
     }
   },
   components: {
     ResultHeader
   },
   watch:{
     selectedLabel(newVal,oldVal){
       this.oldVal = oldVal
     }
   },
   computed:{
     ...mapState(["typeSong","typeSinger","typeAlbum","typeMusiclist","searchKeyword"])
   },
   methods:{
     back(){
      this.selectedLabel = 0
     },
     changeType(index){
      //解决路由切换报错
       if(this.oldVal === index) return
       this.oldVal = index
       switch(index){
         case 0:
          this.$router.replace({ path: 'allTypeResult', query: { keyword:this.searchKeyword }})
         break
         case 1:
          if(this.typeSong.length === 0){
            this.$store.dispatch("searchKeywordType",{type:1,keyword:this.searchKeyword})
          }
          this.$router.replace({ path: 'songType', query: { keyword:this.searchKeyword }})
         break
         case 2:
          if(this.typeSinger.length === 0){
            this.$store.dispatch("searchKeywordType",{type:2,keyword:this.searchKeyword})
          }
          this.$router.replace({ path: 'singerType', query: { keyword:this.searchKeyword }})
         break
         case 3:
          if(this.typeAlbum.length === 0){
            this.$store.dispatch("searchKeywordType",{type:3,keyword:this.searchKeyword})
          }
          this.$router.replace({ path: 'albumType', query: { keyword:this.searchKeyword }})
         break
         case 4:
          if(this.typeMusiclist.length === 0){
            this.$store.dispatch("searchKeywordType",{type:4,keyword:this.searchKeyword})
          }
          this.$router.replace({ path: 'musicListType', query: { keyword:this.searchKeyword }})
         break
       }
     }
   }
 }
</script>



<style>
/*覆盖原生样式*/
.cube-tab-bar{
  height: 40px;
  border-bottom:1px solid rgba(0, 0, 0, 0.1);
}

.cube-tab-bar .cube-tab{
  color: rgb(0, 0, 0);
}

.cube-tab-bar .cube-tab>div{
  font-weight:bold;
  letter-spacing: 1px;
}

.cube-tab-bar .cube-tab_active{
  color: red;
} 

.cube-tab-bar-slider{
  background-color: red;
}

</style>
<style scoped>
.search-result{
  width: 100%;
  height: 100vh;
  background: rgb(255, 255, 255);
}

.tab-bar{
  height: 50px;
  color: rgba(255, 255, 255);
}

.result-content{
  margin: 15px;
  height: calc(100vh - 175px);
}

</style>