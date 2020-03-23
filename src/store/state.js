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
  token: "",
  userDetail: {},

  /*每日推荐歌单 */
  recommendSongs:[]
};

export default state;
