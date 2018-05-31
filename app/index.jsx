import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'

import RouteMap from './router/routeMap'

//公共样式
import './static/css/common.less'

import Hello from './containers/Hello'

//性能测试
import Perf from 'react-addons-perf'
if(__DEV__){
    window.Perf = Perf
}

// render(<Hello></Hello>,document.getElementById('root'))

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)