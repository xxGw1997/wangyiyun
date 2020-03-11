<template>
 <section>
   <HeaderTop>
      <div class="header_left" slot="left">
        <i class="iconfont icon-tianjiahaoyou"></i>
      </div>
      <div class="header_friends_center" slot="center">
      </div>  
    </HeaderTop>
     Mine
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
.header_friends_center{
  flex-grow: 1;
  height: 30px;
  align-self: center;
  display: flex;
}

 
</style>
