<template>
 <section>
   <HeaderTop>
      <div class="header_left" slot="left">
        <i class="iconfont icon-saoyisao"></i>
      </div>
      <div class="header_account_center" slot="center">
      </div>  
    </HeaderTop>
    <router-link to='/login'>
      <span>立即登录</span>
    </router-link>
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
.header_account_center{
  flex-grow: 1;
  height: 30px;
  align-self: center;
  display: flex;
}
 
</style>
