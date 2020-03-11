<template>
 <section>
   <HeaderTop>
      <div class="header_left" slot="left">
        <i class="iconfont icon-yun_l"></i>
      </div>
      <div class="header_mine_center" slot="center">
        <span>我的音乐</span>
      </div>  
    </HeaderTop>
 </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
 export default {
   data () {
     return {

     }
   },
   components: {
     HeaderTop
   }
 }
</script>

<style>
 .header_mine_center{
  flex-grow: 1;
  height: 30px;
  align-self: center;
  display: flex;
}

.header_mine_center span{
  color:whitesmoke;

}
</style>
