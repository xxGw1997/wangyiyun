<template>
    <div class="singer-type">
      <div v-if="typeSinger.length === 0">
        加载中...
      </div>
      <cube-scroll 
        v-else
        ref="scroll"
        :scroll-events="['scroll']">
        <singer-item
          v-for="(item,index) in typeSinger"
          :key="index"
          :item="item"
          @click.native="singerInfo(item.id)"/>
      </cube-scroll>
    </div>
</template>

<script>
 import {mapState} from "vuex"
 
 import SingerItem from "@/components/TypeItem/SingerItem"
 export default {
   components: {
     SingerItem
   },
   mounted(){
     this.$store.dispatch("searchKeywordType",{type:2,keyword: this.$route.query.keyword})
   },
   computed:{
     ...mapState(["typeSinger"])
   },
   methods:{
    singerInfo(id){
      this.$store.dispatch("getSingerInfo",id)
      this.$store.dispatch("getSingerAlbums",id)
      this.$router.push("/singer");
    },
   }
 }
</script>

<style lang="scss" scoped>
.singer-type{
  height: 100%;
} 
</style>
