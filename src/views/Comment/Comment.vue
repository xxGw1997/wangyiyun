<template>
    <div class="comment">
        <div class="header">
            <header-top>
                <div slot="left">
                    <i  class="iconfont icon-back"
                        @click="$router.go(-1)"/>
                </div>
                <div slot="center" class="center-title">
                    <span>评论({{commentsCount}})</span>
                </div>
                <div slot="right">
                    <i  class="iconfont icon-zhengzaibofang"
                        v-show="songDetail[0]"
                        @click="playerShow"
                    />
                </div>
            </header-top>
        </div>
        <div v-if="comments.length === 0">
            <loading/>
        </div>
        <div class="comment-content" v-else>
            <cube-sticky :pos="scrollY">
                <cube-scroll
                    :scroll-events="scrollEvents"
                    @scroll="scrollHandler">
                    <div class="comment-item">
                        <comment-item 
                            :item="item"/>
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
                        <comments 
                            v-for="(comment,index) in comments"
                            :key="index"
                            :comment="comment"/>
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
 import Loading from "@/components/Loading/Loading"
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
       Loading,
       HeaderTop,
       CommentItem,
       Comments
    },
    computed:{
        ...mapState(["songDetail","playListDetail","commentsCount","comments"]),
        item(){
            let obj = {}
            if(this.$route.params.type == 'song'){
                obj = {
                        picUrl:this.songDetail[0].al.picUrl,
                        name:this.songDetail[0].name,
                        author:this.songDetail[0].ar[0].name
                    }
            }else{
                obj = {
                        picUrl:this.playListDetail.coverImgUrl,
                        name:this.playListDetail.name,
                        author:this.playListDetail.creator.nickname
                    }
            }
            return obj
        }
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
