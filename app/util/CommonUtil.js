import LocalStore from './LocalStore'

// [1]将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
export function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}

//[2]判断当前用户是否处于登陆状态
export function checkLogin(){
    const user = LocalStore.getItem("user")
    const token = LocalStore.getItem("token")
    if(user ==null || token == null){
        return false;
    }
    return true;
}