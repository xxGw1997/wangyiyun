<template>
    <div class="comment">
        <div class="header">
            <header-top>
                <div slot="left">
                    <i  class="iconfont icon-back"
                        @click="$router.go(-1)"/>
                </div>
                <div slot="center" class="center-title">
                    <span>评论(1234)</span>
                </div>
                <div slot="right">
                    <i  class="iconfont icon-zhengzaibofang"
                        v-show="songDetail[0]"
                        @click="playerShow"
                    />
                </div>
            </header-top>
        </div>
        <div class="comment-content">
            <cube-sticky :pos="scrollY">
                <cube-scroll
                    :scroll-events="scrollEvents"
                    @scroll="scrollHandler">
                    <div class="comment-item">
                        <comment-item/>
                    </div>
                    <div class="comment-line"></div>
                    <div class="comment-title">
                        <cube-sticky-ele>
                            <div class="comment-sticky">
                                精彩评论
                            </div>
                        </cube-sticky-ele>
                    </div>
                    <div class="comments">
                        <comments/>
                        <comments/>
                        <comments/>
                        <comments/>
                        <comments/>
                        <comments/>
                        <comments/>
                        <comments/>
                    </div>
                </cube-scroll>
            </cube-sticky>
        </div>
        <div class="comment-write">
            
        </div>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 import HeaderTop from "@/components/HeaderTop/Header"
 import CommentItem from "./ChildComps/CommentItem"
 import Comments from "./ChildComps/Comments"

 export default {
    data () {
        return {
            scrollEvents: ['scroll'],
            scrollY:0
        }
    },
    components: {
       HeaderTop,
       CommentItem,
       Comments
    },
    computed:{
        ...mapState(["songDetail"])
    },
    methods: {
        scrollHandler({ y }) {
            this.scrollY = -y
        },
        playerShow() {
            this.$store.dispatch("playerShow", true);
        }
  }
 }
</script>

<style scoped>
.comment{
    width: 100%;
    height: 100vh;
    background: rgb(54, 54, 54);
}

.comment .iconfont{
    color: rgba(255, 255, 255,.8);
    font-size: 25px;
}

.comment .header{
    width: 100%;
    height: 50px;
}

.comment .header .center-title{
    font-size: 16px;
    letter-spacing: 1px;
    color: rgba(255, 255, 255,.9);
}

.comment .comment-content{
    height: calc(100vh - 50px);
    margin: 0 10px;
}

.comment .comment-item{
    width: 100%;
    height: 100px;
}

.comment .comment-line{
    width: 100%;
    height: 5px;
    background: rgb(61, 61, 61);
    position: relative;
    transform: scaleX(1.5);
}

.comment-sticky{
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: rgba(255, 255, 255,.8);
    letter-spacing: 1px;
    font-weight: bold;
    background: rgb(54, 54, 54);
}
 
</style>
