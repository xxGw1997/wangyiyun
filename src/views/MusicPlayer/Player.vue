<template>
    <div>
        <div class="backgroundImg">
            <img :src="songCover" alt="">
        </div>
        <div class="player">
            <player-header 
                :songName="songName" 
                :songSinger="songSinger"/>
            <player-content 
                :songCover="songCover"
                :currentLyric="currentLyric"
                :lyricIndex="lyricIndex"/>
            <player-footer
                :currentTime="currentTime"
                :duration="duration"
                @toggleMode="toggleMode"
                @prev="prev"
                @play_pause="play_pause"
                @next="next"
                @changeProgressBar="changeProgressBar"/>
            <audio ref="audio" @play="ready" @error="error" @timeupdate="updateTime" @ended="end"></audio>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    import {lyric} from '@/utils/lyric'

    import PlayerHeader from './ChildComps/PlayerHeader'
    import PlayerContent from './ChildComps/PlayerContent'
    import PlayerFooter from './ChildComps/PlayerFooter'
    export default{
        components:{
            PlayerHeader,
            PlayerContent,
            PlayerFooter
        },
        data(){
            return {
                songName:'',
                songSinger:'',
                songCover:'',
                currentLyric:[],
                lyricIndex:0,
                currentTime:0,
                duration:0
            }
        },
        computed:{
            ...mapState(['songDetail','songLyric','songUrl'])
        },
        watch:{
            songUrl(){
                this.songName = this.songDetail[0].name
                this.songSinger = this.songDetail[0].ar[0].name
                this.songCover = this.songDetail[0].al.picUrl
                this.currentLyric = lyric(this.songLyric)
                //操作audio
                this.$refs.audio.src = this.songUrl
                this.$refs.audio.currentTime = 0
                let timeStamp = setInterval(() => {
                    this.duration = this.$refs.audio.duration;
                    if (this.duration) {
                        clearInterval(timeStamp)
                    }
                }, 20)
            },

        },
        methods:{
            ready(){

            },
            error(){

            },
            updateTime(e){
                //通过音乐当前时间来更新歌词下标
                let currentTime = e.target.currentTime
                this.currentTime = currentTime
                let i = 0
                //判断是否有歌词
                if(this.currentLyric.length === 0) return
                this.currentLyric.forEach((ele,index)=>{
                    if(currentTime > ele.time){
                        i = index
                    }
                })
                this.lyricIndex = i
            },
            end(){
                this.next()
            },
            
            /* footer操作 */
            changeProgressBar(){

            },
            toggleMode(){

            },
            prev(){

            },
            play_pause(){

            },
            next(){

            }
        }
    }
</script>

<style scoped>
    .backgroundImg{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        z-index: 10;
        background: rgb(0, 0, 0);
    }

    .backgroundImg img{
        width: 200%;
        height: 200%;
        opacity:0.6;
        filter: blur(50px);
        position: relative;
        left: -50%;
        top:-50%;
    }

    .player{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        z-index: 10;
        display: flex;
        flex-wrap: wrap;
    }

    .player>div{
        width: 100%;
    }


</style>
