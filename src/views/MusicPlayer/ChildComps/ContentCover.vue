<template>
  <div class="content-cover">
    <div class="cover">
      <img :src="songCover" alt="" />
    </div>
    <div class="operation">
      <div class="operation-item">
        <i class="iconfont icon-love" />
      </div>
      <div class="operation-item">
        <i class="iconfont icon-download" />
      </div>
      <div class="operation-item"
           @click.stop="comment">
        <i class="iconfont icon-comment" />
      </div>
      <div class="operation-item">
        <i class="iconfont icon-domore" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  props: {
    songCover: {
      type: String,
      default() {
        return "";
      }
    }
  },
  computed:{
    ...mapState(["songDetail"])
  },
  methods:{
    comment(){
      let id = this.songDetail[0].id
      this.$router.push({
        path:'comment',
        query:{
          type:'song',
          id
        }
      })
      this.$store.dispatch("playerShow", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.content-cover {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .cover {
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      border-radius: 50%;
    }
  }
  .operation {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .operation-item {
      i {
        font-size: 30px;
        color: aliceblue;
      }
    }
  }
}
</style>
