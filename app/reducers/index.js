import { combineReducers } from 'redux'

import userinfoReducer from './userinfoReducer'
import heroReducer from './heroReducer'
//第一步：将所有计算规则进行汇总
const rootReducer = combineReducers({
    userinfoReducer,
    heroReducer
})

export default rootReducer