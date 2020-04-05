<template>
    <div class="album-type">
      <cube-scroll 
        ref="scroll"
        :scroll-events="['scroll']">
        <album-item/>
        <album-item/>
        <album-item/>
        <album-item/>
        <album-item/>
        <album-item/>
        <album-item/>
        <album-item/>
        <album-item/>
      </cube-scroll>
    </div>
</template>

<script>
 import AlbumItem from "@/components/TypeItem/AlbumItem"
 export default {
   data () {
     return {

     }
   },
   components: {
     AlbumItem
   }
 }
</script>

<style scoped>
.album-type{
  height: 100%;
}
 
</style>
