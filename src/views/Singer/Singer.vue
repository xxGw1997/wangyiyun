<template>
    <div>
        {{singerInfo?singerInfo.name:''}}
    </div>
</template>

<script>
 import {mapState} from 'vuex'

 export default {
   data () {
     return {

     }
   },
   computed:{
     ...mapState(['singerInfo'])
   },
   components: {

   }
 }
</script>

<style>

 
</style>
