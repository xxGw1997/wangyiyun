<template>
    <div class="searchKeywords">
        <div @click="$router.go(-1)">
          取消
        </div>
    </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
     
   }
 }
</script>

<style scoped>
.keywords-enter-active,
.keywords-leave-active {
  transition: all 1s linear;
}

.keywords-enter, 
.keywords-leave-to{
  opacity: 0;
}

.searchKeywords{
  height: 100vh;
  background: goldenrod;
}
 
</style>
