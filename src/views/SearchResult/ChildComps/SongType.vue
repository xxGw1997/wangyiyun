<template>
    <div class="song-type">
      <cube-scroll 
        ref="scroll"
        :scroll-events="['scroll']">
        <song-item/>
        <song-item/>
        <song-item/>
        <song-item/>
        <song-item/>
        <song-item/>
        <song-item/>
        <song-item/>
        <song-item/>
      </cube-scroll>
    </div>
</template>

<script>
 import SongItem from "@/components/TypeItem/SongItem"
 export default {
   data () {
     return {

     }
   },
   components: {
     SongItem
   }
 }
</script>

<style scoped>
.song-type{
  height: 100%;
}
 
</style>
