<template>
  <div class="rank-item">
    <div class="item">
      <rank-item-cover
        :coverImgUrl="rankItem.coverImgUrl"
        :updateFrequency="rankItem.updateFrequency"
        @imgLoad="imgLoad"
      />
      <div class="item-title">{{rankItem.name}}</div>
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
    // imgLoad: {
    //   type: Function,
    //   default() {
    //     return () => {}
    //   }
    // }
  },
  data() {
    return {}
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
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
      line-height: 18px;
      letter-spacing: 1px;
    }
  }
}
</style>
