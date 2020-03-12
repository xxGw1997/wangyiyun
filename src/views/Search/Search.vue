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
        <recommend-music-list 
        :musicList="recommendMusicList" 
        class="recommend-music-list" @musicListClick="musicListClick"/>
    </scroll>
  </div>
</template>

<script>
 import {mapState} from 'vuex'

 import HeaderTop from '@/components/HeaderTop/HeaderTop'
 import Scroll from '@/components/Scroll/Scroll'
 
 import SearchSwiper from './ChildComps/SearchSwiper'
 import SearchCategory from './ChildComps/SearchCategory'
 import RecommendMusicList from './ChildComps/RecommendMusicList'


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
     ...mapState(['searchBanner','recommendMusicList','playListId'])
   },
   methods:{
     musicListClick(id){
       this.$store.dispatch('getPlayListDetail',id)
       this.$router.push('/playlist')
     }
   }
 }
</script>

<style scoped>
.header_center{
  border-radius: 20px;
  background: rgb(78, 78, 78);
}

.header_center input{
  background: rgb(78, 78, 78);
  border-radius: 15px;
  border: none;
  outline: none;
  color: rgb(184, 184, 184);
}

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
