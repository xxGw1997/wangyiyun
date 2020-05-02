<template>
  <section>
    <HeaderTop>
      <div class="header_left" slot="left">
        <i class="iconfont icon-live_icon"></i>
      </div>
      <div class="header_center" slot="center">
        <i class="iconfont icon-iconfonticonfontsousuo1"></i>
        <input type="text" name="" placeholder="搜索歌曲、歌手" />
      </div>
    </HeaderTop>
  </section>
</template>

<script>
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import BScroll from "better-scroll";
import HeaderTop from "@/components/HeaderTop/HeaderTop";

export default {
  data() {
    return {
      scroll: null
    };
  },
  components: {
    HeaderTop,
    ProgressBar,
  }
};
</script>

<style scoped>
.header_center {
  border-radius: 20px;
  background: rgb(78, 78, 78);
}

.header_center input {
  background: rgb(78, 78, 78);
  border-radius: 15px;
  border: none;
  outline: none;
  color: rgb(184, 184, 184);
}

input::-webkit-input-placeholder {
  text-align: center;
}

.test {
  width: 200px;
  margin-top: 200px;
}
</style>
