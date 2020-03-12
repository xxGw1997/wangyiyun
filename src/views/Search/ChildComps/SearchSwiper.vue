<template>
 <div class="search-swiper">
    <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
            <img :src="item.imageUrl" alt="">
        </swiper-item>
    </swiper>
 </div>
</template>

<script>
 import {Swiper, SwiperItem} from '@/components/swiper'

 export default {
   props:{
       banner:{
           type:Array,
           default(){
               return []
           }
       }
   },
   components: {
       Swiper,
       SwiperItem
   }
 }
</script>

<style scoped>
    .search-swiper{
        padding-top: 10px;
    }
</style>
