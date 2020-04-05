<template>
    <div class="singer-type">
      <cube-scroll 
        ref="scroll"
        :scroll-events="['scroll']">
        <singer-item/>
        <singer-item/>
        <singer-item/>
        <singer-item/>
        <singer-item/>
        <singer-item/>
        <singer-item/>
        <singer-item/>
        <singer-item/>
      </cube-scroll>
    </div>
</template>

<script>
 import SingerItem from "@/components/TypeItem/SingerItem"
 export default {
   data () {
     return {

     }
   },
   components: {
     SingerItem
   }
 }
</script>

<style scoped>
.singer-type{
  height: 100%;
}
 
</style>
