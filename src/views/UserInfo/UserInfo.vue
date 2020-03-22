<template>
  <div class="userInfo">
    <div class="header">
        <div class="back">
          <i class="iconfont icon-back"></i>
        </div>
        <div class="player-show">
          <i class="iconfont icon-zhengzaibofang"></i>
        </div>
    </div>
    <scroll class="content">
      <div class="bg-img">
        <div class="bg"></div>
        <img :src="userDetail.profile.backgroundUrl" alt="">
      </div>
      <div class="base-info">
        <div class="info-avatar">
          <div class="avatar">
            <img :src="userDetail.profile.avatarUrl" alt="">
          </div>
          <div class="operation">
            <div class="operation-btn">
              <i class="iconfont icon-iconfonticonfontsousuo1"></i>编辑
            </div>
          </div>
        </div>
        <div class="info-nickname">
          {{userDetail.profile.nickname}}
        </div>
        <div class="info-follow">
          <div class="follow-item">
            关注 {{userDetail.profile.follows}}
          </div>
          <div class="follow-item">
            粉丝 {{userDetail.profile.followeds}}
          </div>
        </div>
        <div class="info-tag">
          <div class="tag">帅哥</div>
          <div class="tag">最强王者</div>
        </div>
      </div>
      <div class="music-info">
        <cube-tab-bar v-model="selectedLabel" show-slider>
            <cube-tab v-for="item in tabs" :icon="item.icon" :label="item.label" :key="item.label">
            </cube-tab>
        </cube-tab-bar>
        <cube-tab-bar v-model="selectedLabel" show-slider>
            <cube-tab-panels  class="tab-bar-content" v-model="selectedLabel">
              <cube-tab-panel :label="tabs[0].label" :key="tabs[0].label">
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
              </cube-tab-panel>
              <cube-tab-panel :label="tabs[1].label" :key="tabs[1].label">
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
              </cube-tab-panel>
              <cube-tab-panel :label="tabs[2].label" :key="tabs[2].label">
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
                <list-item class="list-item" />
              </cube-tab-panel>
            </cube-tab-panels>
        </cube-tab-bar>  
      </div>
    </scroll>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Scroll from "@/components/Scroll/Scroll";
import ListItem from "./ChildComps/ListItem"
export default {
data () {
    return {
      selectedLabel: '音乐',
      tabs: [{
        label: '音乐',
        icon: 'cubeic-like',
        heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士']
      }, {
        label: '动态',
        icon: 'cubeic-star',
        heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
      },{
        label: '关于我',
        icon: 'cubeic-star',
        heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
      }],
      avatarUrl:'',
      nickname:'',
      follows:0,
      followers:0
    }
  },
  components: {
    Scroll,
    ListItem
  },
  computed:{
    ...mapState(['userDetail'])
  },
  mounted(){
    this.avatarUrl = this.userDetail.profile.avatarUrl
    this.nickname = this.userDetail.profile.nickname
    this.follows = this.userDetail.profile.follows;
    this.followers = this.userDetail.profile.followeds;
  }
};
</script>

<style scoped>
.userInfo {
  height: 100vh;
}

.userInfo .header {
  width: 100%;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 11;
}

.userInfo .header .back{
  line-height: 50px;
  margin-left: 20px;
}

.userInfo .header .player-show{
  line-height: 50px;
  margin-right: 15px;
}

.userInfo .header i{
  color: aliceblue;
  font-size: 30px;
}


.userInfo .content {
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  overflow: hidden;
  /* background: gray; */
}

.userInfo .content .bg-img {
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: -1;
}

.userInfo .content .bg-img .bg {
  width: 150%;
  height: 50vh;
  position: absolute;
  top: -20px;
  background: black;
}

.userInfo .content .bg-img > img {
  height: 50vh;
  position: absolute;
  z-index: 99;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.9;
}

.userInfo .content .base-info {
  width: 100%;
  height: 40vh;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.userInfo .content .base-info > div {
  width: 100%;
}

.userInfo .content .base-info .info-avatar {
  height: 35%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.userInfo .content .base-info .info-avatar .avatar {
  width: 25%;
  margin-left: 20px;
}

.userInfo .content .base-info .info-avatar .avatar>img{
  width: 90%;
  border-radius: 50%;
}

.userInfo .content .base-info .info-avatar .operation {
  width: 20%;
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.userInfo .content .base-info .info-avatar .operation .operation-btn {
  width: 100%;
  height: 30px;
  letter-spacing: 5px;
  text-align: center;
  line-height: 30px;
  font-size: 13px;
  color: white;
  background: rgb(200, 200, 200, 0.5);
  border-radius: 5px;
}

.userInfo .content .base-info .info-nickname {
  height: 10%;
  font-size: 20px;
  color: aliceblue;
  padding-left: 20px;
  padding-top: 10px;
}

.userInfo .content .base-info .info-follow {
  height: 10%;
  padding-left: 20px;
  display: flex;
  font-size: 13px;
  align-items: center;
  color: aliceblue;
}

.userInfo .content .base-info .info-follow .follow-item:nth-of-type(2) {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid white;
}

.userInfo .content .base-info .info-tag {
  height: 10%;
  display: flex;
  padding-left: 20px;
}

.userInfo .content .base-info .info-tag .tag {
  display: flex;
  color: aliceblue;
  border-radius: 20px;
  height: 50%;
  font-size: 10px;
  align-items: center;
  background: rgb(200, 200, 200, 0.5);
  padding: 2px 10px;
  margin-right: 5px;
}

.userInfo .music-info{
  position: relative;
  top:-20px;
  background: gray;
}

.tab-bar-content{
  width: 100%;
}

.list-item{
  width: 100%;
  height: 50px;
}
</style>
