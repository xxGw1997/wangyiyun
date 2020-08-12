<template>
  <div class="music-lists">
    <div class="header">
      <header-top>
        <div slot="left">
          <i class="iconfont icon-back" @click="$router.go(-1)"/>
        </div>
        <div slot="center" class="center-title">
          <span>歌单广场</span>
        </div>
        <div slot="right">
          <i class="iconfont icon-zhengzaibofang" v-show="songDetail[0]" @click="playerShow"/>
        </div>
      </header-top>
    </div>
    <div class="nav-bar-type">
      <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler"/>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/Header'
import mapState from 'vuex'
import { getSongDetail } from '@/utils/cache'

export default {
  data() {
    return {
      current: '快车',
      labels: [
        '快车',
        '小巴',
        '专车',
        '顺风车',
        '代驾',
        '公交',
        '自驾租车',
        '豪华车',
        '二手车',
        '出租车'
      ]
    }
  },
  components: {
    HeaderTop
  },
  methods: {
    playerShow() {
      this.$store.dispatch('playerShow', true)
    },
    changeHandler(cur) {
      this.current = cur
    }
  },
  computed: {
    songDetail() {
      return getSongDetail()
    }
  }
}
</script>

<style lang="scss">
.music-lists {
  .cube-scroll-nav-bar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .cube-scroll-nav-bar-item {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 0 5px;
  }
  .cube-scroll-nav-bar-item:first-child {
    margin: 0 10px;
  }
  .cube-scroll-nav-bar-item_active {
    color: red;
    border-bottom: 2px solid red;
  }
}
</style>


<style lang="scss" scoped>
.music-lists {
  .header {
    width: 100%;
    height: 50px;
    .iconfont {
      color: rgba(0, 0, 0, 0.8);
      font-size: 25px;
    }
    .center-title {
      font-size: 16px;
      letter-spacing: 1px;
      color: rgba(0, 0, 0, 0.9);
    }
  }
  .nav-bar-type {
    width: 100%;
    height: 45px;
    line-height: 25px;
    padding-top: 5px;
  }
}
</style>
