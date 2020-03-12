import {
    searchBanner,
    recommendMusicList
} from '@/network/search'

import {
    SEARCH_BANNER,
    RECOMMEND_MUSIC_LIST
} from './mutations-types'

export default {
    async getSearchBanner({commit}){
        const res = await searchBanner()
        const banner = res.banners
        if(res.code === 200){
            commit(SEARCH_BANNER,{banner})
        }
    },

    async getRecommendMusicList({commit}){
        const res = await recommendMusicList()
        const result = res.result
        if(res.code === 200){
            commit(RECOMMEND_MUSIC_LIST,{result})
        }
    }
}