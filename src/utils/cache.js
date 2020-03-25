import storage from 'good-storage'

const USER_INFO = '__user_info__'

export function saveUserInfo(token,userDetail){
    storage.set(USER_INFO,{token,userDetail})
    return {token,userDetail}
}

export function getUserInfo(){
    return storage.get(USER_INFO,[])
}

export function clearUserInfo(){

    storage.set(USER_INFO,{token:null,userDetail:null})
}