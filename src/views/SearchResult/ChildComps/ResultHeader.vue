<template>
    <div class="header">
        <div class="back" @click="back">
            <i class="iconfont icon-back"/>
        </div>
        <div class="search-keyword" @click="back">
            <i class="iconfont icon-iconfonticonfontsousuo1"/>
            <span>{{searchKeyword}}</span>
        </div>
    </div>
</template>

<script>
 import {mapState} from "vuex"
 export default {
   computed:{
     ...mapState(["searchKeyword"])
   },
   methods:{
       back(){
        this.$store.commit("clear_search_keyword_by_type")
        this.$emit('back')
        this.$router.go(-1)
       }
   }
 }
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(255, 255, 255);
  .back {
    width: 10%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: rgb(0, 0, 0);
    & > i {
      font-size: 25px;
    }
  }
  .search-keyword {
    width: 80%;
    height: 35px;
    line-height: 35px;
    border-radius: 35px;
    background: rgb(226, 226, 226);
    & > i {
      margin-left: 15px;
      vertical-align: text-bottom;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.3);
    }
    & > span {
      margin-left: 10px;
      vertical-align: text-bottom;
      color: rgba(0, 0, 0, 0.7);
      letter-spacing: 1px;
    }
  }
}
</style>
