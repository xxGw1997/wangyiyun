<template>
    <div class="musiclist-type">
      <cube-scroll 
        ref="scroll"
        :scroll-events="['scroll']">
          <musiclist-item
            v-for="(item,index) in typeMusiclist"
            :key="index"
            :item="item"
            @click.native="musicListClick(item.id)"/>
      </cube-scroll>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 import MusiclistItem from "@/components/TypeItem/MusiclistItem"
 export default {
   components: {
     MusiclistItem
   },
   mounted(){
     this.$store.dispatch("searchKeywordType",{type:4,keyword: this.$route.query.keyword})
   },
   computed:{
     ...mapState(["typeMusiclist"])
   },
   methods:{
    musicListClick(id) {
      this.$store.dispatch("getPlayListDetail", id);
      this.$router.push("/playlist");
    },
   }
 }
</script>

<style lang="scss" scoped>
.musiclist-type{
  height: 100%;
}
</style>
