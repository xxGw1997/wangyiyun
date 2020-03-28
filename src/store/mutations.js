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
  LOGIN,
  RECOMMEND_SONGS,
  GET_SINGER_LIST,
  UPDATE_CAT
} from "./mutations-types";

export default {
  [SEARCH_BANNER](state, { banner }) {
    state.searchBanner = banner;
  },

  [RECOMMEND_MUSIC_LIST](state, { result }) {
    state.recommendMusicList = result;
  },

  [UPDATE_PLAY_LIST_ID](state, { id }) {
    state.playListId = id;
  },

  [PLAY_LIST_DETAIL](state, { result }) {
    state.playListDetail = result;
  },

  [SONG_DETAIL](state, { songs }) {
    state.songDetail = songs.song;
    state.songLyric = songs.lyric;
    state.songUrl = songs.url;
  },

  [UPDATE_MUSIC_LIST](state, { list }) {
    state.musicList = list;
  },

  [UPDATE_MUSIC_INDEX](state, { index }) {
    state.currentMusicIndex = index;
  },

  [UPDATE_PLAY_STATUS](state, { play }) {
    state.isPlay = play;
  },

  [PLAYER_SHOW](state, { show }) {
    state.playerShow = show;
  },

  [UPDATE_VOLUME](state, { volume }) {
    state.volume = volume;
  },

  [RECOMMEND_SONGS](state,{ recommend }){
    state.recommendSongs = recommend
  },

  /**用户相关 */
  [LOGIN](state, { token, userDetail }) {
    state.token = token;
    state.userDetail = userDetail;
  },

  /**歌手相关 */
  [GET_SINGER_LIST](state, obj){
    state.artlist = obj
    // if(state.artlist[cat] !== undefined){
    //   //如果此列表已有当前分类歌手数据,则进行数据累加
    //   console.log("undefined")
      
    //   // state.artlist[cat] = state.artlist[cat].concat(artists)
    // }else{
    //   //如果没有该歌手分类数据,则进行新加进去
    //   state.artlist[cat] = artists
    //   console.log('asd')
    // }
  },

  [UPDATE_CAT](state,{code}){
    state.cat = code
  }
};
