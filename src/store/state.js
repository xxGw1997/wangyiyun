import {getUserInfo,getSingerList,getSearchHistory,getSearchHistoryUpdateTime} from '@/utils/cache'

const state = {
  searchBanner: [],
  recommendMusicList: [],
  playListId: null,
  musicList: [],
  currentMusicIndex: 0,
  playListDetail: {},
  isPlay: false,
  songDetail: [],
  songLyric: "",
  songUrl: "",
  playerShow: false,
  volume: 0.5,

  /* 用户相关 */
  token: getUserInfo().token,
  userDetail: getUserInfo().userDetail,

  /*每日推荐歌单 */
  recommendSongs:[],

  /* 歌手相关 */
  artlist: getSingerList(),
  cat:0,
  singerInfo:{},
  singerSongs:[],
  singerAlbums:[],

  /* 搜索相关 */
  searchSuggest:[],
  searchHistory:getSearchHistory(),
  searchHistoryUpdateTime:0,
  searchHot:[]
};

export default state;
