<template>
    <div class="musiclist-type">
      <cube-scroll 
        ref="scroll"
        :scroll-events="['scroll']">
        <musiclist-item/>
        <musiclist-item/>
        <musiclist-item/>
        <musiclist-item/>
        <musiclist-item/>
        <musiclist-item/>
        <musiclist-item/>
        <musiclist-item/>
        <musiclist-item/>
      </cube-scroll>
    </div>
</template>

<script>
 import MusiclistItem from "@/components/TypeItem/MusiclistItem"
 export default {
   data () {
     return {

     }
   },
   components: {
     MusiclistItem
   }
 }
</script>

<style scoped>
.musiclist-type{
  height: 100%;
}
 
</style>
