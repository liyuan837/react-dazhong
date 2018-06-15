import * as Constants from '../constants/Constants'
import {obj2params} from '../util/CommonUtil'

import {Toast} from 'antd-mobile'

class Fetch {
    static post(url, params) {
        return requestPost(url, params, 'post');
    }
    static get(url, params) {
        return requestGet(url, params, 'get');
    }

    static postNoAuth(url,params){
        return requestPost(url, params, 'post',false);
    }

    static getNoAuth(url, params) {
        return requestGet(url, params, 'get',false);
    }
}

function requestPost(url, params, method,flag) {
    let server = Constants.API_HOST;
    const headersPara = {
        'Content-Type': 'application/json',
        'Authorization': ''
    }
    //封装请求头
    let headers = new Headers(headersPara)
    if(!flag){
        delete headersPara.Authorization;
    }
    var result = fetch(server+url, {
        method: method,
        credentials: 'include',
        headers: headers,
        body:JSON.stringify(params)
    });
    return result.then( (res) => {
        return res.json();
    }).catch(error => {
        console.trace('系统错误: ' + error + ' , ' + JSON.stringify(error));
        Toast.fail(JSON.stringify(error),2)
        // throw error
    });
}

function requestGet(url, params, method,flag) {
    let server = Constants.API_HOST;
    const headersPara = {
        'Content-Type': 'application/json',
        'Authorization': ''
    }
    //封装请求头
    let headers = new Headers(headersPara)
    if(!flag){
        delete headersPara.Authorization;
    }

    //封装参数
    if(params != null){
        url += "?" + obj2params(params)
    }
    var result = fetch(server+url, {
        method: method,
        credentials: 'include',
        headers: headers
    });
    return result.then( (res) => {
        return res.json();
    }).catch(error => {
        console.trace('系统错误: ' + error + ' , ' + JSON.stringify(error));
        Toast.fail(JSON.stringify(error),2)
    });
}

export default Fetch;