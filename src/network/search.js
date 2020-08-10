import { request } from "./request";

//获取Banner数据
export const searchBanner = () => request("/banner");

//获取推荐歌单列表
export const recommendMusicList = () => request("/personalized?limit=6");

//获取歌单详情
export const playListDetail = id => request("/playlist/detail", { id });

//获取排行榜榜单
export const rankList = () => request("/toplist/detail");


/**搜索界面 */

//搜索推荐
export const searchSuggest = keywords => request("/search/suggest", { keywords, type: "mobile" });

//搜索关键字(综合搜索)
export const searchAllTypeKeyword = keywords => request("/search", { keywords, type: 1018 });

//搜索关键字(类型搜索)
export const searchKeywordByType = (keywords, type) => request("/search", { keywords, type, limit: 15 });

//热搜榜
export const searchHot = () => request("/search/hot/detail");



