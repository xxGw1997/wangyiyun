<template>
 <div class="content-lyric">
    <div class="volume">
        <div class="volume-icon">
            <i class="iconfont icon-volume"/>
            {{volume*100}}
        </div>
        <div class="volume-progressbar">
            <progress-bar 
                class="volume-bar"
                :percent="volume"
                progressBarName="volume"
                @volume_updateProgress="volume_updateProgress"/>
        </div>
    </div>
    <div class="lyric">
            <scroll  class="root" ref="lyricList" :data="currentLyric">
                <div class="lyric-wrapper">
                    <div class="currentLyric" v-if="currentLyric">
                        <p
                            ref="lyricLine"
                            class="text"
                            :class="{'current': lyricIndex === index}" 
                            v-for="(line, index) in currentLyric" :key="index">
                            {{ line.text }}
                        </p>
                    </div>
                    <p class="no-lyric" v-if="currentLyric === null">{{noLyric ? "暂无歌词" : "歌词加载中"}}</p>
                </div>
            </scroll>
    </div>
 </div>
</template>

<script>
 import {mapState} from 'vuex'
 import Scroll from '@/components/Scroll/Scroll'
 import ProgressBar from '@/components/ProgressBar/ProgressBar'

 export default {
    components:{
        Scroll,
        ProgressBar
    },
    props:{
        currentLyric: {
            type: Array,
            default: () => null
        },
        lyricIndex: {
            type: Number,
            default: 0
        },
        currentVolume:{
            type:Number,
            default: 0.5
        }
    },
    watch:{
        lyricIndex(newIndex){
            if(newIndex > 5){
                let lineEl = this.$refs.lyricLine[newIndex - 5]
                this.$refs.lyricList.scrollToElement(lineEl, 1000)
            }else {
                this.$refs.lyricList.scrollTo(0, 0, 1000)
            }
        }
    },
    computed:{
        ...mapState(['volume'])
    },
    methods:{
        volume_updateProgress(percent){
            const volume = Math.round(percent*100)/100
            this.$store.dispatch('updateVolume',volume)
        }
    }
 }
</script>

<style scoped>
    .content-lyric{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .content-lyric .volume{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .content-lyric .volume .volume-icon{
        width: 15%;
        color: aliceblue;
        text-align: center;
    }

    .content-lyric .volume .volume-icon i{
        font-size: 20px;
    }

    .content-lyric .volume .volume-progressbar{
        flex: 0 0;
        flex-basis: 85%;
        width: 10px;
    }

    .content-lyric .volume .volume-progressbar .volume-bar{
        width: 80%;
    }

    .content-lyric .lyric{
        width: 100%;
        height: 90%;
    }

    /**/
    
    .root{
        display: inline-block;
        position: absolute;
        top: 18%;
        vertical-align: top;
        width: 100%;
        height: 60%;
        overflow: hidden;
    }

    .root .lyric-wrapper {
        width: 80%;
        margin: 0 auto;
        overflow: hidden;
        text-align: center;
    }

    .root .lyric-wrapper .text {
        line-height: 40px;
        color: #c7c7c7;
        font-size: 14px;
    }

    .root .lyric-wrapper .text.current {
        color: rgb(212, 68, 57);
    }

    .root .lyric-wrapper .no-lyric {
        line-height: 40px;
        margin-top: 60%;
        color: #c7c7c7;
        font-size: 14px;
    }
 
</style>
