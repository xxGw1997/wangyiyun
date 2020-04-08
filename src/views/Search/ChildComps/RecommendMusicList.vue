<template>
  <div>
    <div class="recommend-music-list">
      <div class="list-title">
        推荐歌单
      </div>
      <div class="list-content">
        <div
          class="list-item"
          v-for="(item, index) in musicList"
          :key="index"
          @click="musicListClick(item.id)"
        >
          <div class="item-img">
            <img :src="item.picUrl" alt="" @load="load" />
          </div>
          <div class="item-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    musicList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    musicListClick(id) {
      this.$emit("musicListClick", id);
    },
    load(){
      this.$emit("load")
    }
  }
};
</script>

<style scoped>
.recommend-music-list {
  margin-top: 15px;
  height: 420px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}

.list-title {
  width: 100%;
  height: 5%;
  font-size: 20px;
}

.list-content {
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}

.list-content .list-item {
  width: 31%;
  height: 45%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}

.list-content .list-item .item-img {
  width: 100%;
  height: 70%;
  border-radius: 5px;
}

.list-content .list-item .item-img img {
  width: 100%;
}

.list-content .list-item .item-name {
  height: 20%;
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 17px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
