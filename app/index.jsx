import React from 'react'
import {render} from 'react-dom'

import RouteMap from './router/routeMap'
import {hashHistory} from 'react-router'


import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

//公共样式
import './static/css/common.less'
import './static/css/font.css'

// import fn from './redux-demo'
// fn();

//开启性能测试
import Perf from 'react-addons-perf'
if(__DEV__){
    window.Perf = Perf
}

const store = configureStore()

render(
    //第三步：定义数据（即state）变化之后的派发规则
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)