<template>
  <div class="music-list-rank">
    <div class="header">
      <header-top>
        <div slot="left">
          <i class="iconfont icon-back" @click="$router.go(-1)"/>
        </div>
        <div slot="center" class="center-title">
          <span>排行榜</span>
        </div>
        <div slot="right">
          <i class="iconfont icon-zhengzaibofang" v-show="songDetail[0]" @click="playerShow"/>
        </div>
      </header-top>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/Header'

import { getSongDetail } from '@/utils/cache'
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {
    HeaderTop
  },
  methods: {
    playerShow() {
      this.$store.dispatch('playerShow', true)
    }
  },
  computed: {
    songDetail() {
      return getSongDetail()
    }
  }
}
</script>

<style lang="scss" scoped>
.music-list-rank {
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
}
</style>
