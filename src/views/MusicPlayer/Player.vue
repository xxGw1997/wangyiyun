<template>
    <div>
        <div class="player">
            <player-header :songName="songDetail[0].name" 
                           :songSinger="songDetail[0].ar[0].name"/>
            <player-content/>
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
    .player{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        z-index: 10;
        display: flex;
        flex-wrap: wrap;
        background: gray;
    }

    .player>div{
        width: 100%;
        background: palegreen;
    }


</style>
