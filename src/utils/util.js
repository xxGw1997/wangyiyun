/* 数据结构转换 */
export function transToPlayListDetail(obj){
    let trackIds = []
    let tracks = obj.songs
    obj.songs.forEach(ele => {
        trackIds.push({
            id:ele.id
        })
    });
    return{
        type:'专辑',
        id:obj.album.id,
        name:obj.album.name,
        coverImgUrl:obj.album.picUrl,
        creator:{
            id:obj.album.artists[0].id,
            nickname:obj.album.artists[0].name
        },
        description:obj.album.description,
        commentCount:obj.album.info.commentCount,
        shareCount:obj.album.info.shareCount,
        trackCount:obj.songs.length,
        trackIds,
        tracks
    }
}

/* 搜索音乐结构转换 */
export function transToSongItem(obj){
    return {
        name:obj.name,
        ar:[
            {
                name:obj.artists[0].name
            }
        ]
    }
}

/* 节流函数 */
export function throttle(func,delay){
    let prev = Date.now()
    return function(){
        let _this = this
        let args = arguments
        let now = Date.now()
        if(now - prev >= delay){
            func.apply(_this,args)
            prev = Date.now()
        }
    }
}

/* 防抖函数 */
export function debounce(func,delay){
    let timer = null
    return function(){
        let _this = this
        let args = arguments
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            func.apply(_this,args)
        },delay)
    }
}