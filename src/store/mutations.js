import {
    SEARCH_BANNER,
    RECOMMEND_MUSIC_LIST,
    UPDATEPLAYLISTID,
    PLAY_LIST_DETAIL,
    SONG_DETAIL,
    UPDATE_MUSIC_LIST,
    UPDATE_PLAY_STATUS,
    PLAYER_SHOW
} from './mutations-types'

export default {
    [SEARCH_BANNER](state,{banner}){
        console.log("banner:",banner)
        state.searchBanner = banner
    },

    [RECOMMEND_MUSIC_LIST](state,{result}){
        state.recommendMusicList = result
    },

    [UPDATEPLAYLISTID](state){
        state.playListId
    },

    [PLAY_LIST_DETAIL](state,{result}){
        state.playListDetail = result
    },

    [SONG_DETAIL](state,{songs}){
        state.songDetail = songs.song
        state.songLyric = songs.lyric
        state.songUrl = songs.url
        console.log("songs:",songs)
    },

    [UPDATE_MUSIC_LIST](state,{musicList}){
        state.musicList = musicList
    },

    [UPDATE_PLAY_STATUS](state,{play}){
        state.isPlay = play
    },

    [PLAYER_SHOW](state,{show}){
        state.playerShow = show
    }
}