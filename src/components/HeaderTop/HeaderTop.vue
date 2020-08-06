<template>
  <header class="headerTop">
    <slot name="left" class="header_left"></slot>
    <slot name="center" class="header_center"></slot>
    <div class="header_right">
      <i class="iconfont icon-zhengzaibofang" v-show="this.songDetail[0]" @click="playerShow"/>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['songDetail'])
  },
  methods: {
    playerShow() {
      this.$store.dispatch('playerShow', true)
    }
  }
}
</script>

<style lang="scss">
.headerTop {
  position: fixed;
  z-index: 9;
  display: flex;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  .header_center {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    height: 30px;
    align-self: center;
    .iconfont {
      padding-left: 30px;
      padding-right: 15px;
    }
  }
  i {
    padding-left: 15px;
    font-size: 25px;
    color: rgb(225, 225, 225);
    line-height: 50px;
    display: flex;
    align-items: center;
  }
}
.headerTop .header_left,
.headerTop .header_right {
  display: flex;
  width: 50px;
}
</style>
