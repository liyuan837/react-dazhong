import React from "react";
import {connect} from 'react-redux'
import { hashHistory } from 'react-router'

import FooterBar from '../../components/FooterBar'

import { checkLogin } from '../../util/CommonUtil'
class Hello extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    componentDidMount(){

    }

    click4 = () =>{
        if(checkLogin()){
            //已登录
            hashHistory.push("/myhome")
        }else{
            //尚未登录
            hashHistory.push("/login")
        }
    }

    render(){
        return (
            <div>
                <div>{this.props.children}</div>
                <FooterBar click4={this.click4}></FooterBar>
            </div>
        )
    }
}

//这样的话，本函数返回的userinfo就会变成Hello组件的一个props属性
function mapStateToProps(state){
    return{

    }
}

//第四步：绑定，将触发数据变化方法(action)绑定到组件中，作为组件的一个props属性
function mapDispatchToProps(dispatch){
    return{
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)