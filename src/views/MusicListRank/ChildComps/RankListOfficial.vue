<template>
  <div class="rank-list-official">
    <div class="rank-item-left">
      <rank-item-cover/>
    </div>
    <div class="rank-item-right">
      <div class="item-info ellipsis">1.啊是的撒粉丝发阿斯顿撒旦撒旦热发热</div>
      <div class="item-info ellipsis">2.为分为氛围分为氛围分为</div>
      <div class="item-info ellipsis">3.为分为氛围分为氛围</div>
    </div>
  </div>
</template>

<script>
import RankItemCover from './RankItemCover'
export default {
  data() {
    return {}
  },
  components: {
    RankItemCover
  }
}
</script>

<style lang="scss" scoped>
.rank-list-official {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .rank-item-left {
    width: 30%;
  }
  .rank-item-right {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 10px;
    align-content: space-around;
    .item-info {
      width: 100%;
      border: 1px solid red;
      font-size: 16px;
      letter-spacing: 1px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
