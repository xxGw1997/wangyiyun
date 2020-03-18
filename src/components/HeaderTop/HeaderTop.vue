<template>
 <header class="headerTop"> 
   <slot name="left" class="header_left"></slot>
   <slot name="center" class="header_center"></slot>
   <div class="header_right">
     <i class="iconfont icon-zhengzaibofang" 
        v-show="this.songDetail[0]"
        @click="playerShow"/>
   </div>
 </header>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(['songDetail'])
    },
    methods:{
      playerShow(){
        this.$store.dispatch('playerShow',true)
      }
    }
  }

</script>

<style>
.headerTop{
  position: fixed;
  z-index: 9;
  display: flex;
  background: rgb(45, 45, 45);
  width: 100%;
  height: 50px;
  top:0;
  left: 0;
}


.headerTop .header_left,.headerTop .header_right{
  display: flex;
  width: 50px;
}

.headerTop .header_center{
  display: flex;
  flex-grow: 1;
  justify-content: center;
  height: 30px;
  align-self: center;
}


.headerTop i{
    padding-left: 15px;
    font-size:25px;
    color: rgb(225, 225, 225);
    line-height: 50px;
    display: flex;
    align-items: center;
  } 

.headerTop .header_center .iconfont{
  padding-left: 30px;
  padding-right: 15px;
}



</style>
