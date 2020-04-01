<template>
    <div class="singer-songs">
        <div class="song">
            <div class="song-index song-item">
                <span v-if="!currentPlay(id)">{{index + 1}}</span>
                <i class="iconfont icon-volume" v-else></i>
            </div>
            <div class="song-info song-item">
                <div class="song-name" 
                    :class="currentPlay(id) ? 'music_checked' : ''">
                    {{song.name}}
                </div>
                <div class="song-album">{{song.al.name}}</div>
            </div>
            <div class="song-video song-item">
                <i class="iconfont icon-video" v-if="song.mv>0"></i>
            </div>
            <div class="song-more song-item">
                <i class="iconfont icon-domore"></i>
            </div>
        </div>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 export default {
    props:{
        song:{
            type:Object,
            default(){
                return {}
            }
        },
        index:{
            type:Number,
            default(){
                return 0
            }
        },
        id:{
            type:Number,
            default(){
                return 0
            }
        }
    },
    computed:{
        ...mapState(["songDetail"])
    },
    methods:{
        currentPlay(id){
            if (this.songDetail.length) {
                return id == this.songDetail[0].id;
            }
            return false;
        }
    }
 }
</script>

<style scoped>
.singer-songs{
    width: 100%;
    height: 60px;
}

.singer-songs .song{
    width: 95%;
    height: 60px;
    margin: 5px 7px;
    display: flex;
    align-items: center;
}

.singer-songs .song .song-item{
    width: 35px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    flex-shrink: 0;
    color: rgba(255, 255, 255,.3);
}

.singer-songs .song .song-item>span{
    font-size: 20px;
}

.singer-songs .song .song-item .icon-volume{
    color: red;
    font-size: 22px;
}

.singer-songs .song .song-item .icon-video,
.singer-songs .song .song-item .icon-domore{
    font-size: 22px;
}

.singer-songs .song .song-info{
    width: 70%;
    height: 45px;
    text-align: start;
    flex: 1 0;
    display: flex;
    letter-spacing: 1px;
    flex-wrap: wrap;
}

.singer-songs .song .song-info .song-name{
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255, 255, 255,.8);
}

.singer-songs .song .song-info .music_checked{
    color:red;
}

.singer-songs .song .song-info .song-album{
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
}
</style>
