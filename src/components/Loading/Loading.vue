<template>
    <div class="loading">
      <div class="wrap">
        <img src="@/assets/img/loading.gif" alt="">
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

   }
 }
</script>

<style lang="scss" scoped>
.loading {
  width: 100px;
  height: 150px;
}
.wrap {
  width: 100%;
  height: 100%;
  border: 1px solid sandybrown;
  overflow: hidden;
  & > img {
    width: 600%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
  }
}
</style>
