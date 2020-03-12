import {
    SEARCH_BANNER,
    RECOMMEND_MUSIC_LIST,
    UPDATEPLAYLISTID,
    PLAY_LIST_DETAIL
} from './mutations-types'

export default {
    [SEARCH_BANNER](state,{banner}){
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
    }
}