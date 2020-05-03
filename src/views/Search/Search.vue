<template>
  <div class="search">
    <header-top>
      <div slot="left" class="header_left" @click="mic">
        <i class="iconfont icon-maikefeng-xue"></i>
      </div>
      <div class="header_center" slot="center">
        <i class="iconfont icon-iconfonticonfontsousuo1"></i>
        <div @click="searchKeywords">
          搜索歌曲、歌手
        </div>
      </div>
    </header-top>
    <div v-if="recommendMusicList.length === 0" class="loading">
      <loading/>
    </div>
    <scroll class="content" ref="search_scroll" v-else>
      <search-swiper :banner="searchBanner" class="search-swiper" />
      <search-category class="search-category" />
      <recommend-music-list
        :musicList="recommendMusicList"
        class="recommend-music-list"
        @musicListClick="musicListClick"
        @load="load"
      />
    </scroll>
  </div>
</template>

<script>
import { mapState } from "vuex";

import HeaderTop from "@/components/HeaderTop/HeaderTop";
import Scroll from "@/components/Scroll/Scroll";
import Loading from "@/components/Loading/Loading";

import SearchSwiper from "./ChildComps/SearchSwiper";
import SearchCategory from "./ChildComps/SearchCategory";
import RecommendMusicList from "./ChildComps/RecommendMusicList";

export default {
  data() {
    return {};
  },
  components: {
    HeaderTop,
    Scroll,
    Loading,
    SearchSwiper,
    SearchCategory,
    RecommendMusicList
  },
  created() {
    this.$store.dispatch("getSearchBanner");
    this.$store.dispatch("getRecommendMusicList");
  },
  computed: {
    ...mapState([
      "searchBanner",
      "recommendMusicList",
      "playListId",
      "playListDetail"
    ])
  },
  methods: {
    musicListClick(id) {
      this.$router.push({ path: 'playlist', query: { id }})
    },
    searchKeywords(){
      this.$router.push("/searchKeywords")
    },
    load(){
      this.$refs.search_scroll.refresh()
    },
    mic(){
      this.$createToast({
        type: 'txt',
        txt: '这个做不了'
      }).show()
    }
  }
};
</script>

<style scoped>
/*
.loading{
  position: absolute;
  top:25%;
}

.iconfont{
  color: rgb(99, 99, 99);
  font-size: 20px;
}

.header_center {
  border-radius: 20px;
  height: 30px;
  line-height: 30px;
  background: rgb(240, 240, 240);
}

.header_center div {
  border-radius: 15px;
  border: none;
  color: rgb(184, 184, 184);
}

input::-webkit-input-placeholder {
  text-align: center;
}

.search {
  height: 100vh;
}

.content {
  width: 95%;
  height: calc(100% - 110px);
  position: relative;
  top: 50px;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
}

.search-swiper{
  border-radius: 20px;
  overflow: hidden;
}*/

</style>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 25%;
}
.iconfont {
  color: rgb(99, 99, 99);
  font-size: 20px;
}
.header_center {
  border-radius: 20px;
  height: 30px;
  line-height: 30px;
  background: rgb(240, 240, 240);
  div {
    border-radius: 15px;
    border: none;
    color: rgb(184, 184, 184);
  }
}
input {
  &::-webkit-input-placeholder {
    text-align: center;
  }
}
.search {
  height: 100vh;
}
.content {
  width: 95%;
  height: calc(100% - 110px);
  position: relative;
  top: 50px;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
}
.search-swiper {
  border-radius: 20px;
  overflow: hidden;
}

</style>

