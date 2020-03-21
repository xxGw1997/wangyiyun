<template>
  <section>
    <HeaderTop>
      <div class="header_left" slot="left">
        <i class="iconfont icon-live_icon"></i>
      </div>
      <div class="header_center" slot="center">
        <i class="iconfont icon-iconfonticonfontsousuo1"></i>
        <input type="text" name="" placeholder="搜索歌曲、歌手" />
      </div>
    </HeaderTop>
    <cube-page type="tab-composite-view" title="tab-composite">
      <div slot="content">
        <cube-tab-bar v-model="selectedLabel"
                      show-slider
                      :use-transition="disabled"
                      ref="tabNav"
                      :data="tabLabels">
        </cube-tab-bar>
        <div class="tab-slide-container">
          <cube-slide
            ref="slide"
            :loop="loop"
            :initial-index="initialIndex"
            :auto-play="autoPlay"
            :show-dots="showDots"
            :options="slideOptions"
            @scroll="scroll"
            @change="changePage"
          >
            <!-- 关注 -->
            <cube-slide-item>
              <cube-scroll :data="followersData" :options="scrollOptions">
                <ul class="list-wrapper">
                  <li v-for="(item, index) in followersData" class="list-item" :key="index">
                    <div class="top">
                      <img :src="item.avatar" class="avatar">
                      <span class="time">{{resolveTitle(item)}}</span>
                    </div>
                    <div class="middle is-bold line-height">{{item.question}}</div>
                    <div>{{resolveQuestionFollowers(item)}}</div>
                  </li>
                </ul>
              </cube-scroll>
            </cube-slide-item>
            <!-- 推荐 -->
            <cube-slide-item>
              <cube-scroll :data="recommendData" :options="scrollOptions">
                <ul class="list-wrapper">
                  <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                    <div class="top is-black is-bold line-height">
                      {{item.question}}
                    </div>
                    <div class="middle is-grey line-height">{{item.content}}</div>
                    <div>{{resolveQuestionFollowers(item)}}</div>
                  </li>
                </ul>
              </cube-scroll>
            </cube-slide-item>
            <cube-slide-item>
              <cube-scroll :data="hotData" :options="scrollOptions">
                <ul class="list-wrapper">
                  <li v-for="(item, index) in hotData" class="list-item" :key="index">
                    <div class="hot-title">
                      <span class="hot-sequence">{{item.sequence}}</span>
                      <span></span>
                      {{item.label}}
                    </div>
                    <div class="hot-content is-bold is-black">{{item.question}}</div>
                  </li>
                </ul>
              </cube-scroll>
            </cube-slide-item>
          </cube-slide>
        </div>
      </div>
    </cube-page>
  </section>
</template>

<script>
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import BScroll from "better-scroll";
import HeaderTop from "@/components/HeaderTop/HeaderTop";

export default {
  data() {
    return {
      scroll: null
    };
  },
  components: {
    HeaderTop,
    ProgressBar,
    CubePage
  }
};
</script>

<style scoped>
.header_center {
  border-radius: 20px;
  background: rgb(78, 78, 78);
}

.header_center input {
  background: rgb(78, 78, 78);
  border-radius: 15px;
  border: none;
  outline: none;
  color: rgb(184, 184, 184);
}

input::-webkit-input-placeholder {
  text-align: center;
}

.test {
  width: 200px;
  margin-top: 200px;
}
</style>
