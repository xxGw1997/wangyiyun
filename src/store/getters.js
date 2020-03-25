const getters = {
    /*用户信息相关 */
    userInfo(state){
        let userInfo = {}
        userInfo.avatarUrl = state.userDetail.profile.avatarUrl
        userInfo.nickname = state.userDetail.profile.nickname;
        userInfo.level = state.userDetail.level;
        userInfo.eventCount = state.userDetail.profile.eventCount;
        userInfo.follows = state.userDetail.profile.follows;
        userInfo.followers = state.userDetail.profile.followeds;
        
        return userInfo
    },

    

};

export default getters;
