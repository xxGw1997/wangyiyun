<template>
  <div>
    <div class="search-category">
      <div class="category-item" @click="recommentSongs">
        <div class="item-i">
          <i class="iconfont icon-rili"/>
        </div>
        <div>每日推荐</div>
      </div>
      <div class="category-item" @click="playlist">
        <div class="item-i">
          <i class="iconfont icon-gedan"/>
        </div>
        <div>歌单</div>
      </div>
      <div class="category-item" @click="rank">
        <div class="item-i">
          <i class="iconfont icon-paixingbang"/>
        </div>
        <div>排行榜</div>
      </div>
      <div class="category-item" @click="singer">
        <div class="item-i">
          <i class="iconfont icon-singer"/>
        </div>
        <div>歌手</div>
      </div>
      <!-- <div class="category-item">
        <div class="item-i">
          <i class="iconfont icon-live_icon" />
        </div>
        <div>直播</div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['token'])
  },
  methods: {
    recommentSongs() {
      if (this.token === '') {
        this.$createDialog({
          type: 'confirm',
          title: '艾欧尼亚搜早点睡咯，一起打LOL',
          content: '请先登录',
          confirmBtn: {
            text: '现在就去'
          },
          cancelBtn: {
            text: '下次一定'
          },
          onConfirm: () => {
            this.$router.push('/dailyrecommendsongs')
            return
          },
          onCancel: () => {
            return
          }
        }).show()
      } else {
        this.$router.push('/dailyrecommendsongs')
      }
    },
    playlist() {
      this.$createToast({
        type: 'txt',
        txt: '这个还没做'
      }).show()
      this.$router.push('/musiclists')
    },
    rank() {
      //将排行榜页面高度重置为0
      this.$store.dispatch('updateRankScrollTop', 0)
      this.$router.push('/musiclistrank')
    },
    singer() {
      this.$router.push('/singerlist')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-category {
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  margin-top: 5px;
  .category-item {
    width: 20%;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    flex: auto;
    justify-content: center;
    align-items: center;
    div {
      width: 100%;
      text-align: center;
    }
    .item-i {
      i {
        font-size: 35px;
      }
    }
  }
}
</style>
