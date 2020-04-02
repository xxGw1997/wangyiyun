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