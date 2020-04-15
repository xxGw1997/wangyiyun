<template>
  <div class="mine">
    <header-top>
      <div slot="left" class="header_left" @click="test">
        <i class="iconfont icon-yun_l"></i>
      </div>
      <div class="header_center" slot="center">
        <span>我的音乐</span>
      </div>
    </header-top>
    <div class="test">


    <cube-scroll
      ref="scroll"
      direction="horizontal"
      class="horizontal-scroll-list-wrap">
      <ul class="list-wrapper">
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
        <li class="list-item">1231</li>
      </ul>
    </cube-scroll>
    <div class="loading">
      <loading />
    </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop";
import Scroll from "@/components/Scroll/Scroll";
import Loading from "@/components/Loading/Loading";
export default {
  data() {
    return {};
  },
  components: {
    HeaderTop,
    Scroll,
    Loading
  },
  methods:{
    test(){
      this.$createDialog({
        type:'confirm',
        title:'zzw是只🐖',
        content:'请先登录',
        confirmBtn: {
          text: '现在就去',
          // active: true,
          // disabled: false,
          // href: 'javascript:;'
        },
        cancelBtn: {
          text: '下次一定',
          // active: false,
          // disabled: false,
          // href: 'javascript:;'
        },
        onConfirm: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '点击确认按钮'
          }).show()
          this.$router.push('/dailyrecommendsongs')
        },
        onCancel: () => {
          console.log("?")
          return
        }
      }).show()
    }
  }
};
</script>


<style scoped>

.loading{
  background: white;
}

.header_center {
  color: aliceblue;
  height: 100%;
  line-height: 100%;
}

.header_center > span {
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
}

.mine {
  height: 100vh;
}

/* .content {
  background: goldenrod;
  width: 100%;
  height: calc(100% - 110px);
  top: 50px;
  overflow: hidden;
  position: relative;
} */
</style>
<style>
.test{
  margin-top: 50px;
}

.horizontal-scroll-list-wrap{
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.horizontal-scroll-list-wrap .cube-scroll-content{
  display: inline-block;
}

.horizontal-scroll-list-wrap .list-wrapper{
  padding: 0 10px;
  line-height: 60px;
  white-space: nowrap;
}

.horizontal-scroll-list-wrap .list-item{
  display: inline-block;
  margin-left: 10px;
}
</style>
