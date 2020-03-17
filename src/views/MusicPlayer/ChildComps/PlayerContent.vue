<template>
    <div class="player-content" @click="toggleContent">
        <transition name="cover">
            <content-cover
                v-show="coverShow" 
                :songCover="songCover"/>
        </transition>
        <transition name="lyric">
            <content-lyric 
                v-show="!coverShow"
                :currentLyric="currentLyric"
                :lyricIndex="lyricIndex"
                :currentVolume="currentVolume"/>
        </transition>
    </div>
</template>

<script>
 import {mapState} from 'vuex'

 import ContentCover from './ContentCover'
 import ContentLyric from './ContentLyric'
 export default {
    props:{
        songCover:{
            type:String,
            default(){
                return ''
            }
        },
        currentLyric:{
            type:Array,
            default(){
                return []
            }
        },
        lyricIndex:{
            type:Number,
            default(){
                return 0
            }
        },
        currentVolume:{
            type:Number,
            default(){
                return 0.5
            }
        }
    },
    components: {
        ContentCover,
       ContentLyric
    },
    data(){
        return {
            coverShow:true
        }
    },
    methods:{
        toggleContent(){
            this.coverShow = !this.coverShow
        },
    }
 }
</script>

<style scoped>
    .player-content{
        height: 70%;
        overflow: hidden;
    }

    .cover-enter-active, .cover-leave-active ,
    .lyric-enter-active, .lyric-leave-active{
        transition: opacity .4s ease-in-out;
    }
    .cover-enter, .cover-leave-to,
    .lyric-enter, .lyric-leave-to {
        opacity: 0;
    }
</style>
