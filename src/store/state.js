import { getUserInfo, getSingerList, getSearchHistory, getSearchHistoryUpdateTime } from '@/utils/cache'

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

  /* 评论信息 */
  comments: [],
  commentsCount: 0,
  /* 用户相关 */
  token: getUserInfo().token,
  userDetail: getUserInfo().userDetail,

  /*每日推荐歌单 */
  recommendSongs: [],

  /* 排行榜 */
  recommendRank: [], //推荐榜单
  officialRank: [],   //官方榜
  characteristicRank: [],  //特色榜
  globalRank: [],  //全球榜
  regionRank: [],  //地区榜
  styleRank: [],   //曲风榜
  moreRank: [],  //更多榜单

  /* 歌手相关 */
  artlist: getSingerList(),
  cat: 0,
  singerInfo: {},
  singerSongs: [],
  singerAlbums: [],

  /* 搜索相关 */
  searchKeyword: '',
  searchSuggest: [],
  searchHistory: getSearchHistory(),
  searchHistoryUpdateTime: 0,
  searchHot: [],
  //综合
  allTypeSong: [],
  allTypeSinger: [],
  allTypeAlbum: [],
  allTypeMusiclist: [],
  typeSong: [],  //单曲
  typeSinger: [],  //歌手
  typeAlbum: [], //专辑
  typeMusiclist: []  //歌单
};

export default state;
