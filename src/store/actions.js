import {
    searchBanner,
    recommendMusicList,
    playListDetail
} from '@/network/search'

import {
    getSongDetail
} from '@/network/song'

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
    },

    // updataPlayListId({commit},id){
    //     commit(UPDATEPLAYLISTID)
    // },

    async getPlayListDetail({commit},id){
        const res = await playListDetail(id)
        const result = res.playlist
        if(res.code === 200){
            commit(PLAY_LIST_DETAIL,{result})
        }
    },

    async getSongDetail({commit},songId){
        const res = await getSongDetail(songId)
        const songs = res.songs
        if(res.code === 200){
            commit(SONG_DETAIL,{songs})
        }
    },

    updateMusicList({commit},musicList){
        commit(UPDATE_MUSIC_LIST,{musicList})
    },

    updatePlayStatus({commit},play){
        commit(UPDATE_PLAY_STATUS,{play})
    },

    playerShow({commit},show){
        commit(PLAYER_SHOW,{show})
    }

}