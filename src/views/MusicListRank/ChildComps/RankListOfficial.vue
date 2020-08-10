<template>
  <div class="rank-list-official">
    <div class="rank-item-left">
      <rank-item-cover
        :coverImgUrl="rankItem.coverImgUrl"
        :updateFrequency="rankItem.updateFrequency"
      />
    </div>
    <div class="rank-item-right">
      <div
        class="item-info ellipsis"
        v-for="(item,index) in rankItem.tracks"
        :key="index"
      >{{index +1 }}.{{item.first}} - {{item.second}}</div>
    </div>
  </div>
</template>

<script>
import RankItemCover from './RankItemCover'
export default {
  props: {
    rankItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
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
  margin-top: 15px;
  .rank-item-left {
    width: 30%;
  }
  .rank-item-right {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    align-content: space-around;
    .item-info {
      width: 100%;
      font-size: 16px;
      letter-spacing: 1px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
