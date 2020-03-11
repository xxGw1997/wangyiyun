<template>
  <div>
    <header-top>
      <div slot="left" class="header_left">
        <i class="iconfont icon-maikefeng-xue"></i>
      </div>
      <div class="header_center" slot="center">
        <i class="iconfont icon-iconfonticonfontsousuo1"></i>
        <input type="text" name="" placeholder="搜索歌曲、歌手">
      </div>
    </header-top>
    <div class="test">1</div>
  </div>
</template>

<script>
 import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
 export default {
   data () {
     return {

     }
   },
   components: {
     HeaderTop,
   }
 }
</script>

<style>
input::-webkit-input-placeholder{text-align: center;}
 
.test{
  height: 1000px;
}
</style>
