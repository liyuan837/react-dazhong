import * as type from '../constants/type'

//用户信息相关的action，包括登录
export function login(data) {
    return {
        type: type.USERINFO_LOGIN,
        data
    }
}