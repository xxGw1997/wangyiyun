<template>
  <div class="singer">
    <div class="singer-bg">
      <div class="singer-header">
        <div class="header-back" @click="back">
          <i class="iconfont icon-back"></i>
        </div>
        <div>
          <i class="iconfont icon-zhengzaibofang" v-show="songDetail[0]" @click="playerShow"/>
        </div>
      </div>
      <div class="singer-bg-black"></div>
      <img :src="singerInfo.picUrl" alt ref="singer-bg-img">
    </div>
    <div class="scroll-list-wrap">
      <cube-sticky :pos="scrollY">
        <cube-scroll ref="scroll" @scroll="scrollHandler" :scroll-events="scrollEvents">
          <div class="singer-info">
            <div class="info-left">
              <div class="singer-name">{{singerInfo.name}}</div>
              <div class="singer-info">被收藏了11.2万次</div>
            </div>
            <div class="info-right">
              <span>+</span> 收 藏
            </div>
          </div>
          <div class="singer-content">
            <div class="singer-title">
              <cube-sticky-ele>
                <div class="singer-title-sticky">
                  <div class="singer-title-word">
                    <cube-tab-bar v-model="selectedLabel" show-slider>
                      <cube-tab
                        v-for="(item, index) in tabs"
                        :key="index"
                        :label="item"
                        :value="index"
                      ></cube-tab>
                    </cube-tab-bar>
                  </div>
                </div>
              </cube-sticky-ele>
            </div>
            <div>
              <cube-tab-panels v-model="selectedLabel">
                <cube-tab-panel label="热门单曲" :value="0">
                  <singer-hot-songs/>
                </cube-tab-panel>
                <cube-tab-panel label="专辑" :value="1">
                  <singer-albums/>
                </cube-tab-panel>
                <cube-tab-panel label="艺人信息" :value="2">
                  <singer-info/>
                </cube-tab-panel>
              </cube-tab-panels>
            </div>
          </div>
        </cube-scroll>
      </cube-sticky>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const SingerHotSongs = () => import('./ChildComps/SingerHotSongs')
const SingerAlbums = () => import('./ChildComps/SingerAlbums')
const SingerInfo = () => import('./ChildComps/SingerInfo')
export default {
  data() {
    return {
      selectedLabel: 0,
      oldLabel: 0,
      tabs: ['热门单曲', '专辑', '艺人信息'],
      scrollEvents: ['scroll'],
      scrollY: 0,
      singerData: {
        songs: {
          scrollY: 0,
          song: []
        },
        albums: {
          scrollY: 0,
          albums: []
        },
        info: {
          scrollY: 0,
          info: {}
        }
      }
    }
  },
  computed: {
    ...mapState(['singerInfo', 'songDetail'])
  },
  mounted() {
    this.$store.dispatch('getSingerInfo', this.$route.query.id)
    this.$store.dispatch('getSingerAlbums', this.$route.query.id)
  },
  watch: {
    scrollY(newVal) {
      let Multiple = 1 - newVal / 200
      if (newVal < 0) {
        this.$refs[
          'singer-bg-img'
        ].style.transform = `scale(${Multiple},${Multiple})`
      }
    },
    selectedLabel(newVal, oldVal) {
      if (this.scrollY < 240) {
        return
      }
      this.oldLabel = oldVal
      //记录切换前组件的scrollY的值
      if (oldVal == 0) {
        this.singerData.songs.scrollY = this.scrollY
      } else if (oldVal == 1) {
        this.singerData.albums.scrollY = this.scrollY
      } else {
        this.singerData.info.scrollY = this.scrollY
      }
      //更新切换后的组件的scrollY的值
      let moveTo = 0
      let obj = ''
      if (newVal == 0) {
        obj = 'songs'
      } else if (newVal == 1) {
        obj = 'albums'
      } else {
        obj = 'info'
      }
      moveTo =
        this.singerData[obj].scrollY < 240
          ? -240
          : -this.singerData[obj].scrollY
      this.$refs.scroll.scrollTo(0, moveTo, 0)
      this.scrollY = -moveTo
    }
  },
  components: {
    SingerHotSongs,
    SingerAlbums,
    SingerInfo
  },
  methods: {
    back() {
      this.$router.go(-1)
      this.$refs.scroll.scrollTo(0, 0, 0)
    },
    playerShow() {
      this.$store.dispatch('playerShow', true)
    },
    scrollHandler({ y }) {
      this.scrollY = -y
    }
  }
}
</script>

<style lang="scss" scoped>
.singer {
  background: rgb(77, 77, 77);
  height: 100vh;
  .scroll-list-wrap {
    .singer-info {
      .info-right {
        width: 25%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-right: 20px;
        border-radius: 20px;
        font-size: 15px;
        background: rgba(255, 0, 0, 0.9);
        color: white;
        span {
          font-size: 20px;
        }
      }
    }
    .singer-content {
      margin-top: 10px;
      background: rgb(255, 255, 255);
      .singer-title {
        height: 40px;
        background: tomato;
      }
    }
  }
}
.singer-bg {
  position: fixed;
  width: 100%;
  height: 45%;
  z-index: 1;
  .singer-header {
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    & > div {
      & > i {
        margin: 0 15px;
        font-size: 25px;
        color: white;
        line-height: 50px;
      }
    }
  }
  .singer-bg-black {
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
  }
  & > img {
    width: 110%;
    transform: scale(1.1, 1.1);
  }
}
.scroll-list-wrap {
  position: relative;
  top: 50px;
  height: calc(100% - 110px);
  .singer-info {
    width: 100%;
    height: 230px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .info-left {
      width: 70%;
      height: 50px;
      margin-left: 20px;
      display: flex;
      align-content: space-around;
      flex-wrap: wrap;
    }
  }
}
.singer-info {
  .info-left {
    .singer-name {
      width: 100%;
      height: 25px;
      color: white;
      font-size: 25px;
    }
    .singer-info {
      width: 100%;
      height: 15px;
      color: white;
      font-size: 12px;
    }
  }
}
.singer-title-sticky {
  height: 40px;
  background: rgb(255, 255, 255);
}
</style>

<style lang="scss">
/*覆盖原始样式*/
.singer-title-sticky {
  .singer-title-word {
    .cube-tab-bar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .cube-tab {
        padding: 10px 0px;
        color: rgb(0, 0, 0);
        font-weight: bolder;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      .cube-tab_active {
        color: red;
      }
      .cube-tab-bar-slider {
        height: 3px;
        background-color: red;
      }
    }
  }
}
</style>
