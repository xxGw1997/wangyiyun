import {
  searchBanner,
  recommendMusicList,
  playListDetail,
  searchSuggest,
  searchAllTypeKeyword,
  searchHot,
  searchKeywordByType,
  rankList
} from "@/network/search";

import {
  getSongDetail, getSongLyric, getSongUrl, recommendSongs, albumSongs,
  commentAlbum, commentMusiclist, commentSong
} from "@/network/song";

import { login, getUserDetail, logout } from "@/network/user";

import { singerCategory, topSinger, singerInfo, singerAlbums } from "@/network/singer";

import {
  saveUserInfo, clearUserInfo,
  getListOffsetByCode, setSingerList,
  saveSearchHistory,
  saveSongDetail, savePlayListDetail
} from "@/utils/cache";

import { transToPlayListDetail } from "@/utils/util"

import {
  SEARCH_BANNER,
  RECOMMEND_MUSIC_LIST,
  UPDATE_PLAY_LIST_ID,
  PLAY_LIST_DETAIL,
  SONG_DETAIL,
  UPDATE_MUSIC_LIST,
  UPDATE_MUSIC_INDEX,
  UPDATE_PLAY_STATUS,
  PLAYER_SHOW,
  UPDATE_VOLUME,
  RECOMMEND_SONGS,
  RANK_LIST,
  UPDATE_RANK_SCROLL_TOP,
  /* 评论 */
  COMMENTS,
  /* 用户相关 */
  LOGIN,
  /* 歌手相关 */
  GET_SINGER_LIST,
  UPDATE_CAT,
  GET_SINGER_INFO,
  GET_SINGER_ALBUMS,
  ALBUMS_SONGS,
  /* 搜索相关 */
  SEARCH_SUGGEST,
  UPDATE_TIME,
  SEARCH_TOP,
  SEARCH_ALL_TYPE,
  SEARCH_KEYWORD_BY_TYPE
} from "./mutations-types";

export default {
  async getSearchBanner({ commit }) {
    const res = await searchBanner();
    const banner = res.banners;
    if (res.code === 200) {
      commit(SEARCH_BANNER, { banner });
    }
  },

  async getRecommendMusicList({ commit }) {
    const res = await recommendMusicList();
    const result = res.result;
    if (res.code === 200) {
      commit(RECOMMEND_MUSIC_LIST, { result });
    }
  },

  // updataPlayListId({commit},id){
  //     commit(UPDATEPLAYLISTID)
  // },

  async getPlayListDetail({ commit }, id) {
    const res = await playListDetail(id);
    if (res.code === 200) {
      const result = res.playlist;
      commit(PLAY_LIST_DETAIL, { result });
      savePlayListDetail(result)
    }
  },

  async getAlbumComments({ commit }, id) {
    const res = await commentAlbum(id);
    if (res.code === 200) {
      const hotComments = res.hotComments
      const length = 20 - hotComments.length
      const comments = hotComments.concat(res.comments.slice(0, length - 1))
      const commentsCount = res.total
      commit(COMMENTS, { comments, commentsCount })
    }
  },

  async getMusiclistComments({ commit }, id) {
    const res = await commentMusiclist(id);
    if (res.code === 200) {
      const hotComments = res.hotComments
      const length = 20 - hotComments.length
      const comments = hotComments.concat(res.comments.slice(0, length - 1))
      const commentsCount = res.total
      commit(COMMENTS, { comments, commentsCount })
    }
  },

  async getSongComments({ commit }, id) {
    const res = await commentSong(id);
    if (res.code === 200) {
      const hotComments = res.hotComments
      const length = 20 - hotComments.length
      const comments = hotComments.concat(res.comments.slice(0, length - 1))
      const commentsCount = res.total
      commit(COMMENTS, { comments, commentsCount })
    }
  },

  async getSongDetail({ commit }, songId) {
    const resSong = await getSongDetail(songId);
    const resLyric = await getSongLyric(songId);
    const resSongUrl = await getSongUrl(songId);
    const songs = {};
    songs.song = resSong.songs;
    songs.url = resSongUrl.data[0].url;
    if (resLyric.nolyric) {
      //如果没有歌词
      songs.lyric = "nolyric";
    } else {
      songs.lyric = resLyric.lrc.lyric;
    }
    if (
      resSong.code === 200 &&
      resLyric.code === 200 &&
      resSongUrl.code === 200
    ) {
      commit(SONG_DETAIL, { songs });
      saveSongDetail(songs.song)
    }
  },

  async getRecommendSongs({ commit }) {
    let timestamp = (new Date()).getTime();
    const res = await recommendSongs(timestamp);
    if (res.code === 200) {
      const recommend = res.recommend
      commit(RECOMMEND_SONGS, { recommend });
    }
  },

  /** 获取排行榜榜单列表 */
  async getRankList({ commit }) {
    const res = await rankList();
    if (res.code === 200) {
      const ranklist = res.list
      commit(RANK_LIST, { ranklist });
    }
  },

  updateRankScrollTop({ commit }, topOffset) {
    commit(UPDATE_RANK_SCROLL_TOP, { topOffset });
  },

  updateMusicList({ commit }, data) {
    const { id, list, index } = data;
    commit(UPDATE_PLAY_LIST_ID, { id });
    commit(UPDATE_MUSIC_LIST, { list });
    commit(UPDATE_MUSIC_INDEX, { index });
  },

  updateMusicIndex({ commit }, index) {
    commit(UPDATE_MUSIC_INDEX, { index });
  },

  updatePlayStatus({ commit }, play) {
    commit(UPDATE_PLAY_STATUS, { play });
  },

  playerShow({ commit }, show) {
    commit(PLAYER_SHOW, { show });
  },

  updateVolume({ commit }, volume) {
    commit(UPDATE_VOLUME, { volume });
  },

  /* 用户相关 */
  async login({ commit }, data) {
    const { username, pwd } = data.userInfo;
    const callback = data.callback;
    let timestamp = (new Date()).getTime();
    const res = await login(username, pwd, timestamp);
    if (res.code !== 200) {
      callback(res.msg);
      return;
    }
    const token = res.token;
    const userDetail = await getUserDetail(res.account.id);
    if (userDetail.code === 200) {
      commit(LOGIN, saveUserInfo(token, userDetail));
    }
  },

  async logout() {
    const res = await logout()
    if (res.code === 200) {
      clearUserInfo()
    }
  },


  /* 歌手相关 */
  async getSingerCategory({ commit }, data) {
    const { cat, offset } = data
    let currOffset = getListOffsetByCode(cat)
    if (offset <= currOffset && offset != 0) return//相同数据不需要再请求
    let res = {}
    if (cat == 0) {//获取热门歌手数据
      res = await topSinger(offset)
    } else {
      res = await singerCategory(cat, offset)
    }
    if (res.code === 200) {
      commit(GET_SINGER_LIST, setSingerList(cat, offset, res.artists))
    }
  },

  updateCat({ commit }, code) {
    commit(UPDATE_CAT, { code })
  },

  async getSingerInfo({ commit }, id) {
    const res = await singerInfo(id)
    if (res.code === 200) {
      commit(GET_SINGER_INFO, res)
    }
  },

  async getSingerAlbums({ commit }, id) {
    const res = await singerAlbums(id)
    if (res.code === 200) {
      let result = res.hotAlbums
      commit(GET_SINGER_ALBUMS, result)
    }
  },

  async getAlbumSongs({ commit }, id) {
    const res = await albumSongs(id)
    if (res.code === 200) {
      commit(ALBUMS_SONGS, transToPlayListDetail(res))
    }
  },

  /* 搜索相关 */
  async getSearchSuggest({ commit }, keyword) {
    const res = await searchSuggest(keyword)
    if (res.code === 200) {
      let result = []
      if (res.result.allMatch) {
        res.result.allMatch.forEach(ele => {
          result.push(ele.keyword)
        })
      }
      commit(SEARCH_SUGGEST, result)
    } else {
      return
    }
  },

  async searchKeyword({ commit }, keyword) {
    const res = await searchAllTypeKeyword(keyword)
    saveSearchHistory(keyword)
    if (res.code === 200) {
      let result = res.result
      commit(UPDATE_TIME, keyword)
      commit(SEARCH_ALL_TYPE, result)
    }
  },

  async searchKeywordType({ commit }, data) {
    let { type, keyword } = data
    switch (type) {
      case 1: break
      case 2:
        type = 100
        break
      case 3:
        type = 10
        break
      case 4:
        type = 1000
        break
      default: break
    }
    const res = await searchKeywordByType(keyword, type)
    if (res.code === 200) {
      let result = res.result
      commit(SEARCH_KEYWORD_BY_TYPE, { result, type })
    }
  },

  async getSearchHot({ commit }) {
    const res = await searchHot()
    if (res.code === 200) {
      let result = res.data
      commit(SEARCH_TOP, result)
    }
  },


};
