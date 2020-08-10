<template>
  <div class="rank-item-cover">
    <div class="cover">
      <img :src="coverImgUrl" @load="imgLoad">
      <div class="update-time">{{updateFrequency}}</div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils/util'
export default {
  props: {
    updateFrequency: {
      type: String,
      default() {
        return ''
      }
    },
    coverImgUrl: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    imgLoad: debounce(function() {
      this.$emit('imgLoad')
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
.rank-item-cover {
  .cover {
    width: 100%;
    img {
      width: 100%;
      border-radius: 5px;
    }
    .update-time {
      height: 0;
      color: white;
      font-size: 12px;
      position: relative;
      top: -23px;
      left: 7px;
      letter-spacing: 1px;
    }
  }
}
</style>
