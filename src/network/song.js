import { request } from "./request";

//获取歌曲详情
export const getSongDetail = ids => request("/song/detail", { ids });

//获取歌曲url
export const getSongUrl = id => request("/song/url", { id });

//获取歌曲歌词
export const getSongLyric = id => request("/lyric", { id });

//获取每日推荐歌曲列表
export const recommendSongs = () => request("/recommend/songs");
