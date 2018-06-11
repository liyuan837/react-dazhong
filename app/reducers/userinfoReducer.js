import * as type from '../constants/type'

const initialState = {}

//第一步：定义redux计算规则
export default function userinfoReducer (state = initialState, action) {
    switch (action.type) {
        //登录
        case type.USERINFO_LOGIN:
            return action.data
        default:
            return state
    }
}