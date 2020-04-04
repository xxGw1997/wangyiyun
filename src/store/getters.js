const getters = {
    /*用户信息相关 */
    userInfo(state){
        let userInfo = {}
        if(Object.keys(state.userDetail).length !== 0){
            userInfo.avatarUrl = state.userDetail.profile.avatarUrl
            userInfo.nickname = state.userDetail.profile.nickname;
            userInfo.level = state.userDetail.level;
            userInfo.eventCount = state.userDetail.profile.eventCount;
            userInfo.follows = state.userDetail.profile.follows;
            userInfo.followers = state.userDetail.profile.followeds;
        }
        
        return userInfo
    },

    /* 搜索历史 */
    // searchHistoryUpdateTime(state){
    //     return state.searchHistory
    // }

    /*歌手相关 */
    // singerList(state){
    //     console.log("code:",state.cat)
    //     console.log("keys:",Object.getOwnPropertyNames(state.artlist))
    //     let code = state.cat
    //     console.log("getters:",state.artlist[code])
    //     return state.artlist[state.code]
    // }

    // singerList(state){
    //     console.log("getters:",state.artlist)
    //     return state.artlist[state.code].list
    // }

    

};

export default getters;
