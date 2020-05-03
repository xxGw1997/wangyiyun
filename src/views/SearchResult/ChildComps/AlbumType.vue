<template>
    <div class="album-type">
      <cube-scroll 
        ref="scroll"
        :scroll-events="['scroll']">
        <album-item
          v-for="(item,index) in typeAlbum"
          :key="index"
          :item="item"
          @click.native="AlbumClick(item.id)"/>
      </cube-scroll>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 import AlbumItem from "@/components/TypeItem/AlbumItem"
 export default {
   components: {
     AlbumItem
   },
   mounted(){
     this.$store.dispatch("searchKeywordType",{type:3,keyword: this.$route.query.keyword})
   },
   computed:{
    ...mapState(["typeAlbum"])
   },
   methods:{
     AlbumClick(id){
      this.$store.dispatch("getAlbumSongs", id);
      this.$router.push("/playlist");
     }
   }
 }
</script>

<style lang="scss" scoped>
.album-type{
  height: 100%;
}
</style>
