<template>
    <div>
        <div class="backgroundImg">
            <img :src="songDetail[0].al.picUrl" alt="">
        </div>
        <div class="player">
            <player-header :songName="songDetail[0].name" 
                           :songSinger="songDetail[0].ar[0].name"/>
            <player-content :songCover="songDetail[0].al.picUrl"/>
            <player-footer/>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

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
                songSinger:''
            }
        },
        computed:{
            ...mapState(['songDetail'])
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
