<template>
  <div>
    <div class="search-category">
      <div class="category-item" @click="recommentSongs">
        <div class="item-i">
          <i class="iconfont icon-rili" />
        </div>
        <div>每日推荐</div>
      </div>
      <div class="category-item">
        <div class="item-i">
          <i class="iconfont icon-gedan" />
        </div>
        <div>歌单</div>
      </div>
      <div class="category-item">
        <div class="item-i">
          <i class="iconfont icon-paixingbang" />
        </div>
        <div>排行榜</div>
      </div>
      <div class="category-item">
        <div class="item-i">
          <i class="iconfont icon-diantai" />
        </div>
        <div>电台</div>
      </div>
      <div class="category-item">
        <div class="item-i">
          <i class="iconfont icon-live_icon" />
        </div>
        <div>直播</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed:{
    ...mapState(['token'])
  },
  methods:{
    recommentSongs(){
      this.$createDialog({
        type:'confirm',
        title:'zzw是只🐖',
        content:'请先登录',
        confirmBtn: {
          text: '现在就去',
        },
        cancelBtn: {
          text: '下次一定',
        },
        onConfirm:() => {
          this.$router.push('/dailyrecommendsongs')
        },
        onCancel: () => {
          return
        }
      }).show()
    }
  }
};
</script>

<style scoped>
.search-category {
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  margin-top: 5px;
}

.search-category .category-item {
  width: 20%;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  justify-content: center;
  align-items: center;
}

.search-category .category-item div {
  width: 100%;
  text-align: center;
}

.search-category .category-item .item-i i {
  font-size: 35px;
}
</style>
