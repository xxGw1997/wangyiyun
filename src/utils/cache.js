import storage from 'good-storage'

const USER_INFO = '__user_info__'
const SINGER_LIST = '__singer_list__'

const SEARCH_HISTORY = '__search_history__'

export function saveUserInfo(token,userDetail){
    storage.set(USER_INFO,{token,userDetail})
    return {token,userDetail}
}

export function getUserInfo(){
    return storage.get(USER_INFO,{token:'',userDetail:{}})
}

export function getToken(){
    return getUserInfo().token
}

export function clearUserInfo(){

    storage.set(USER_INFO,{token:'',userDetail:{}})
}

export function setSingerList(code,offset,list){
    let obj = getSingerList()
    let listdata = []
    let data = {}
    obj[code].offset = offset + 15
    list.forEach(ele => {
        //目前只需要存储歌手id，歌手name，歌手头像
        data = {id:ele.id,name:ele.name,picUrl:ele.picUrl}
        listdata.push(data)
    });
    obj[code].list = obj[code].list.concat(listdata)
    storage.set(SINGER_LIST,obj)
    return obj
}

export function getSingerList(){
    return storage.get(SINGER_LIST,{
        0:{offset:0,list:[]},
        1001:{offset:0,list:[]},
        1002:{offset:0,list:[]},
        1003:{offset:0,list:[]},
        2001:{offset:0,list:[]},
        2002:{offset:0,list:[]},
        2003:{offset:0,list:[]},
        6001:{offset:0,list:[]},
        6002:{offset:0,list:[]},
        6003:{offset:0,list:[]},
        7001:{offset:0,list:[]},
        7002:{offset:0,list:[]},
        7003:{offset:0,list:[]},
        4001:{offset:0,list:[]},
        4002:{offset:0,list:[]},
        4003:{offset:0,list:[]},
    })
}

export function getListOffsetByCode(code){
    return getSingerList()[code].offset
}

export function getSearchHistory(){
    return storage.get(SEARCH_HISTORY,[])
}

export function saveSearchHistory(keyword){
    let historys = storage.get(SEARCH_HISTORY,[])
    let index = historys.indexOf(keyword)
    if(index !== -1){
        historys.splice(index,1)
    }
    historys.unshift(keyword)
    storage.set(SEARCH_HISTORY,historys)
}

export function clearSearchHistory(){
    storage.set(SEARCH_HISTORY,[])
}
