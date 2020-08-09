<template>
  <div class="rank-item">
    <div class="item">
      <rank-item-cover/>
      <div class="item-title">这是一啊实打实adasdsad</div>
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
.rank-item {
  width: 30%;
  .item {
    margin-top: 15px;
    .item-title {
      margin-top: 5px;
      margin-left: 3px;
      width: 100%;
      font-size: 14px;
    }
  }
}
</style>
