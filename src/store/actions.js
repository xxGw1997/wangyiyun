import {
  searchBanner,
  recommendMusicList,
  playListDetail
} from "@/network/search";

import { getSongDetail, getSongLyric, getSongUrl } from "@/network/song";

import { login, getUserDetail } from "@/network/user";

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
  /* 用户相关 */
  LOGIN
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
    const result = res.playlist;
    if (res.code === 200) {
      commit(PLAY_LIST_DETAIL, { result });
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
    }
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
    const res = await login(username, pwd);
    if (res.code !== 200) {
      callback();
      return;
    }
    const token = res.token;
    console.log("id:", res.account.id);
    const userDetail = await getUserDetail(res.account.id);
    if (userDetail.code === 200) {
      commit(LOGIN, { token, userDetail });
    }
  }
};
