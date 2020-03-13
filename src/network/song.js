import {request} from './request'

//获取歌曲详情
export const getSongDetail = (ids) => request('/song/detail',{ids})