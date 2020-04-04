<template>
    <div class="searchKeywords">
        <div class="header">
          <div class="search-input">
            <cube-input
              v-model="value"
              clearable
              :autofocus="true"
              placeholder="杨文轩属你最优秀"
              @keyup.enter.native="searchKeyword(value)">
              <div slot="prepend">
                <i class="iconfont icon-iconfonticonfontsousuo1"></i>
              </div>
            </cube-input>
          </div>
          <div class="cancel" @click="back">取消</div>
          <div class="singer" @click="$router.push('/singerlist')">
            <i class="iconfont icon-singer"/>
          </div>
        </div>
        <div class="search-suggest" v-show="suggestShow">
          <div class="search-content" 
            @click="searchKeyword(value)">
            搜索  “{{value}}”
          </div>
          <div class="suggests">
            <div class="suggest" 
              v-for="(item, index) in searchSuggest" 
              :key="index"
              @click="searchKeyword(item)">
              <i class="iconfont icon-iconfonticonfontsousuo1"></i>
              <div>{{item}}</div>
            </div>
          </div>
        </div>
        <div class="search-hot" v-show="!suggestShow">
          <cube-scroll
            ref="scroll">
            <div class="search-history" v-show="searchHistoryShow">
              <div class="history-title">
                <div>搜索历史</div>
                <div @click="clearHistory">
                  <i class="iconfont icon-delete"></i>
                </div>
              </div>
              <history-item :searchHistory="historyItem"/>
            </div>
            <div class="search-recommend">
              <div class="recommend-title">
                热搜榜
              </div>
              <div class="recommend-item">
                <recommend-item/>
              </div>
            </div>
          </cube-scroll>
        </div>
    </div>
</template>

<script>
 import {mapState, mapGetters} from "vuex"
 import {getSearchHistory,clearSearchHistory} from "@/utils/cache"
 import HistoryItem from "./ChildComps/HistoryItem"
 import RecommendItem from "./ChildComps/RecommendItem"

 export default {
   data () {
     return {
       value:'',
       suggestShow:false,
       searchHistoryShow:getSearchHistory().length > 0,
       historyItem:getSearchHistory()
     }
   },
   watch:{
     value(newVal,oldVal){
       this.suggestShow = this.value.length !== 0 ? true : false
       if(this.value.length===0) return
       this.$store.dispatch("getSearchSuggest",this.value)
     },
     searchHistoryUpdateTime(){
      let data = getSearchHistory()
      if(data.length>0){
        this.searchHistoryShow = true
      }
      this.historyItem = data
     }
   },
   computed:{
     ...mapState(["searchSuggest","searchHistory","searchHistoryUpdateTime"]),
   },
   components: {
     HistoryItem,
     RecommendItem
   },
   methods:{
     back(){
       this.value = ''
       this.$router.go(-1)
     },
     searchKeyword(keyword){
       this.$store.dispatch("searchKeyword",keyword)
     },
     clearHistory(){
       this.$createDialog({
          type:'confirm',
          title:'艾欧尼亚搜早点睡咯，一起打LOL',
          content:'确认清空全部历史记录',
          confirmBtn: {
            text: '确定',
          },
          cancelBtn: {
            text: '下次一定',
          },
          onConfirm:() => {
            clearSearchHistory()
            this.$router.go(0)
            return
          },
          onCancel: () => {
            return
          }
        }).show()
     }
   }
 }
</script>

<style scoped>
/* .keywords-enter-active,
.keywords-leave-active {
  transition: all 1s linear;
}

.keywords-enter, 
.keywords-leave-to{
  opacity: 0;
} */

.searchKeywords{
  width: 100%;
  height: 100vh;
  background: rgb(100, 100, 100);
}

.searchKeywords .header{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(40, 40, 40, 0.8);
}

.searchKeywords .header .search-input{
  margin-left: 15px;
  width: 70%;
  height: 35px;

}

.searchKeywords .header .cancel{
  width: 12%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  font-size: 18px;
}

.searchKeywords .header .singer{
  width: 12%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
}

.searchKeywords .header .singer>i{
  font-size: 25px;
}

.searchKeywords .search-suggest{
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background: gray;
}

.searchKeywords .search-suggest .search-content{
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: rgb(0, 172, 240);
  margin: 0px 0px 5px 15px;
  letter-spacing: 1px;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255,.2);
}

.searchKeywords .search-suggest .suggests{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.searchKeywords .search-suggest .suggests .suggest{
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 0px 0px 5px 15px;
  display: flex;
}

.searchKeywords .search-suggest .suggests .suggest>i{
  color: rgba(255, 255, 255,.7);
  font-size: 16px;
}

.searchKeywords .search-suggest .suggests .suggest>div{
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255,.1);
  margin-left: 5px;
  color: white;
}

.searchKeywords .search-hot{
  height: calc(100vh - 110px);
  margin: 0 15px;
}

.searchKeywords .search-hot .search-history{
  width: 100%;
  height: 120px;
}

.searchKeywords .search-hot .search-history .history-title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  letter-spacing: 1px;
}

.searchKeywords .search-hot .search-history .history-title i{
  color: rgba(255, 255, 255,.7);
  font-size: 18px;
}

.searchKeywords .search-hot .search-recommend{
  padding: 20px 0;
}

.searchKeywords .search-hot .search-recommend .recommend-title{
  width: 100%;
  color: white;
  font-size: 15px;
  letter-spacing: 1px;
}
</style>


<style>
/*覆盖原始样式*/
.cube-input{
  border-radius: 40px;
  background: rgba(122, 122, 122);
}

.cube-input .cube-input-field{
  border-radius: 40px;
  padding: 0px 5px;
  height: 35px;
  color:white;
  letter-spacing: 1px;
}

.cube-input:after{
  border: none;
}

.cube-input .cube-input-prepend i{
  margin-left: 15px;
  font-size: 20px;
  color: rgba(255, 255, 255,.8);
}
</style>
