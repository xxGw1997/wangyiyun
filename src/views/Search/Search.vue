<template>
  <div class="search">
    <header-top>
      <div slot="left" class="header_left">
        <i class="iconfont icon-maikefeng-xue"></i>
      </div>
      <div class="header_center" slot="center">
        <i class="iconfont icon-iconfonticonfontsousuo1"></i>
        <input type="text" name="" placeholder="搜索歌曲、歌手">
      </div>
    </header-top>
    <scroll class="content">
        <search-swiper :banner="searchBanner" class="search-swiper"/>
        <search-category class="search-category"/>
        <recommend-music-list :musicList="recommendMusicList" class="recommend-music-list"/>
        
    </scroll>
  </div>
</template>

<script>
 import {mapState} from 'vuex'

 import HeaderTop from '@/components/HeaderTop/HeaderTop'
 import SearchSwiper from './ChildComps/SearchSwiper'
 import SearchCategory from './ChildComps/SearchCategory'
 import RecommendMusicList from './ChildComps/RecommendMusicList'

 import Scroll from '@/components/Scroll/Scroll'

 export default {
   data () {
     return {

     }
   },
   components: {
     HeaderTop,
     Scroll,
     SearchSwiper,
     SearchCategory,
     RecommendMusicList
   },
   created(){
     this.$store.dispatch('getSearchBanner')
     this.$store.dispatch('getRecommendMusicList')
   },
   computed:{
     ...mapState(['searchBanner','recommendMusicList'])
   }
 }
</script>

<style scoped>
.search{
  height: 100vh;
  padding-top: 50px;
}
input::-webkit-input-placeholder{text-align: center;}
 
.content{
  width: 95%;
  height: calc(100% - 110px);
  overflow: hidden;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.recommend-music-list{

}



</style>
