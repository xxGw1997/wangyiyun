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
    <div class="rank-content">
      <cube-scroll ref="refresh" :scroll-events="['scroll']" @scroll="onScrollHandle">
        <div class="recommend-rank type-item">
          <span class="title">榜单推荐</span>
          <div class="rank-list">
            <rank-item
              v-for="(item,index) in recommendRank"
              :key="index"
              :rankItem="item"
              @click.native="MusciListClick(item.id)"
            />
          </div>
        </div>
        <div class="official-rank type-item">
          <span class="title">官方榜</span>
          <div class="official-rank-list">
            <rank-list-official
              v-for="(item,index) in officialRank"
              :key="index"
              :rankItem="item"
              @click.native="MusciListClick(item.id)"
            />
          </div>
        </div>
        <div class="characteristic-rank type-item">
          <span class="title">特色榜</span>
          <div class="rank-list">
            <rank-item
              v-for="(item,index) in characteristicRank"
              :key="index"
              :rankItem="item"
              @click.native="MusciListClick(item.id)"
            />
          </div>
        </div>
        <div class="global-rank type-item">
          <span class="title">全球榜</span>
          <div class="rank-list">
            <rank-item
              v-for="(item,index) in globalRank"
              :key="index"
              :rankItem="item"
              @click.native="MusciListClick(item.id)"
            />
          </div>
        </div>
        <div class="region-rank type-item">
          <span class="title">地区榜</span>
          <div class="rank-list">
            <rank-item
              v-for="(item,index) in regionRank"
              :key="index"
              :rankItem="item"
              @click.native="MusciListClick(item.id)"
            />
          </div>
        </div>
        <div class="style-rank type-item">
          <span class="title">曲风榜</span>
          <div class="rank-list">
            <rank-item
              v-for="(item,index) in styleRank"
              :key="index"
              :rankItem="item"
              @click.native="MusciListClick(item.id)"
            />
          </div>
        </div>
        <div class="more-rank type-item">
          <span class="title">更多榜单</span>
          <div class="rank-list">
            <rank-item
              v-for="(item,index) in moreRank"
              :key="index"
              :rankItem="item"
              @imgLoad="imgLoad"
              @click.native="MusciListClick(item.id)"
            />
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/Header'
import RankItemCover from './ChildComps/RankItemCover'
import RankItem from './ChildComps/RankItem'
import RankListOfficial from './ChildComps/RankListOfficial'

import { getSongDetail } from '@/utils/cache'
import { debounce } from '@/utils/util'
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      recommendRankList: []
    }
  },
  components: {
    HeaderTop,
    RankItemCover,
    RankItem,
    RankListOfficial
  },
  mounted() {
    this.$store.dispatch('getRankList')
    this.$nextTick(() => {
      this.$refs.refresh.scrollTo(0, this.scrollTop, 0)
    })
  },
  computed: {
    ...mapState([
      'recommendRank',
      'officialRank',
      'characteristicRank',
      'globalRank',
      'regionRank',
      'styleRank',
      'moreRank',
      'scrollTop'
    ]),
    songDetail() {
      return getSongDetail()
    }
  },
  methods: {
    onScrollHandle: debounce(function({ y }) {
      this.$store.dispatch('updateRankScrollTop', y)
    }, 100),

    playerShow() {
      this.$store.dispatch('playerShow', true)
    },
    MusciListClick(id) {
      this.$router.push({ path: 'playlist', query: { id } })
    },
    imgLoad() {
      this.$nextTick(() => {
        this.$refs.refresh.refresh()
      })
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
  .rank-content {
    height: calc(100vh - 110px);
    margin: 0 15px;
    .type-item {
      margin: 50px 0;
    }
    .recommend-rank {
      margin-top: 15px;
    }
    .title {
      font-size: 20px;
    }
    .official-rank {
      .official-rank-list {
        width: 100%;
      }
    }
  }
  .rank-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
