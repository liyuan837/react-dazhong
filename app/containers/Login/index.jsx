import React from 'react'

import Fetch from '../../fetch/fetch'
import PureRenderMixin from "react-addons-pure-render-mixin";

import SimpleHeader from '../../components/SimpleHeader'

import { InputItem, Button, Toast } from 'antd-mobile';

import LocalStore  from '../../util/LocalStore'

import {hashHistory} from 'react-router'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

        this.state = {
            username:'',
            password:''
        }
    }

    onChange = (type,value) => {
        switch (type){
            case 'username':
                this.setState({
                    username:value
                })
                break;
            case 'password' :
                this.setState({
                    password:value
                })
                break;
            default:
        }
    }


    login(){
        var result = Fetch.postNoAuth("jwt/login")
        result.then( msg => {
            if(msg.result == "ok"){
                console.log(msg.data)
                LocalStore.setItem("user",msg.data)
                LocalStore.setItem("token",msg.data.token)
                Toast.success("登陆成功", 3, null, true);
                setTimeout(()=>{
                    hashHistory.push('/')
                },2000);
            }else{
                LocalStore.removeItem("user")
                LocalStore.removeItem("token")
                Toast.fail(msg.result,3,true);
            }
        })
    }

    render(){
        return (
            <div>
                <SimpleHeader titleName="登录"></SimpleHeader>
                <div>
                    <InputItem
                        type="text"
                        placeholder="请输入用户名"
                        onChange={this.onChange.bind(this,'username')}
                        value={this.state.username}
                    >用户名</InputItem>

                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        onChange={this.onChange.bind(this,'password')}
                        value={this.state.password}
                    >密码</InputItem>
                    <Button type="primary" onClick={this.login.bind(this)} style={{'width':'90%',margin:'10px auto'}}>登录</Button>
                </div>
            </div>
        )
    }
}

export default Login