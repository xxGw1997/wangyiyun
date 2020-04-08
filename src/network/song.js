import { request } from "./request";

//获取歌曲详情
export const getSongDetail = ids => request("/song/detail", { ids });

//获取歌曲url
export const getSongUrl = id => request("/song/url", { id });

//获取歌曲歌词
export const getSongLyric = id => request("/lyric", { id });

//获取每日推荐歌曲列表
export const recommendSongs = () => request("/recommend/songs");

//获取专辑歌曲列表
export const albumSongs = (id) => request("/album",{id});

//获取专辑评论信息
export const commentAlbum = (id) => request("/comment/album",{id});

//获取歌单评论信息
export const commentMusiclist = (id) => request("/comment/playlist",{id});

//获取歌曲评论信息
export const commentSong = (id) => request("/comment/music",{id})

