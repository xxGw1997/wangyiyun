<template>
    <div>
        <album
          v-for="(item, index) in singerAlbums" 
          :key="index"
          :album="item"
          @click.native="musicListClick(item.id)"/>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 import Album from "./Album"
 export default {
   components: {
    Album
   },
   computed:{
     ...mapState(["singerAlbums"])
   },
   methods:{
     musicListClick(id){
      this.$store.dispatch("getAlbumSongs", id);
      this.$router.push("/playlist");
     }
   }
 }
</script>

<style>

 
</style>
