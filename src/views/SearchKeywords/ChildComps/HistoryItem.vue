<template>
    <div class="history-item">
        <cube-scroll
            ref="scroll"
            direction="horizontal"
            class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
                <li class="list-item" 
                  v-for="(item,index) in searchHistory"
                  :key="index"
                  @click="searchKeyword(item)">
                  {{item}}
                </li>                 
            </ul>
        </cube-scroll>
    </div>
</template>

<script>
 import {mapState} from 'vuex'
 export default {
   props:{
     searchHistory:{
      type:Array,
      default(){
        return []
      }
     }
   },
   methods:{
     searchKeyword(keyword){
       this.$emit("searchKeyword",keyword)
     }
   }
 }
</script>

<style lang="scss">
.history-item {
  width: 100%;
  height: 50px;
  line-height: 50px;
  .horizontal-scroll-list-wrap {
    border: none;
    .cube-scroll-content {
      display: inline-block;
    }
    .list-wrapper {
      line-height: 30px;
      white-space: nowrap;
    }
    .list-item {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      margin: 0 10px 0 0;
      background: rgb(223, 223, 223);
      color: rgb(0, 0, 0);
      border-radius: 30px;
      font-size: 13px;
    }
  }
}

 
</style>
