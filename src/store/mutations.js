import {
    SEARCH_BANNER,
    RECOMMEND_MUSIC_LIST
} from './mutations-types'

export default {
    [SEARCH_BANNER](state,{banner}){
        state.searchBanner = banner
    },

    [RECOMMEND_MUSIC_LIST](state,{result}){
        state.recommendMusicList = result
    }
}