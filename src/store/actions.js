import {
    searchBanner,
    recommendMusicList,
    playListDetail
} from '@/network/search'

import {
    getSongDetail,
    getSongLyric,
    getSongUrl
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
        const resSong = await getSongDetail(songId)
        const resLyric = await getSongLyric(songId)
        const resSongUrl = await getSongUrl(songId)
        const songs = {}
        songs.song = resSong.songs
        songs.url = resSongUrl.data[0].url
        if(resLyric.nolyric){
            //如果没有歌词
            songs.lyric = 'nolyric'
        }else{
            songs.lyric = resLyric.lrc.lyric
        }
        if(resSong.code === 200 && resLyric.code === 200 && resSongUrl.code === 200){
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