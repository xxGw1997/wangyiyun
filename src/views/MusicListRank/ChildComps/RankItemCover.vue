<template>
  <div class="rank-item-cover">
    <div class="cover">
      <img src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt>
      <div class="update-time">每周更新</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
