import { request } from "./request";

export const singerCategory = (cat, offset=0,limit=15) => 
                request("/artist/list",{cat,offset, limit});

export const topSinger = (offset=0,limit=15) =>
                request("/top/artists",{offset,limit})

export const singerInfo = (id) => request("/artists",{id})