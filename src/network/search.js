import { request } from "./request";

//获取Banner数据
export const searchBanner = () => request("/banner");

//获取推荐歌单列表
export const recommendMusicList = () => request("/personalized?limit=6");

//获取歌单详情
export const playListDetail = id => request("/playlist/detail", { id });
