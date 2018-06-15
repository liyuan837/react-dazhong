import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import { Link } from 'react-router'
import * as userinfoActions from "@/actions/UserinfoAction";

import { DatePicker, List , SearchBar} from 'antd-mobile';

import C from '../C'
import SearchHeader from '../../../../components/SearchHeader'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

class Life extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            date: now
        }

    }

    componentDidMount(){
        //模拟登陆
        /**
         * 1、这边调用action方法，传值；
         * 2、然后会到规则（rootReducer）中去找userinfo的login方法；
         * 3、再到本组件的mapStateToProps方法中，将login返回的值注册到组件的props属性中，进而触发页面更新
         */
        this.props.userinfoActions.login({
            userid:'liyuan',
            city:'北京'
        })
    }

    changeState(){
        this.props.userinfoActions.login({
            userid:'王昭君',
            city:'洛阳'
        })
    }
    dateChange(date){
        this.setState({
            date:date
        })
    }

    render(){
        return (
            <div>
                <SearchHeader titleName="Life"></SearchHeader>
                <SearchBar placeholder="Search" maxLength={8} />
                <Link to="/list">to list</Link>
                <p>{this.props.userinfoStore.userid}</p>
                <p>{this.props.userinfoStore.city}</p>
                <C actions={this.props.userinfoActions}></C>

                <button onClick={this.changeState.bind(this)}>我自己改</button>

                <DatePicker
                    mode="date"
                    title="选择日期"
                    extra="Optional"
                    value={this.state.date}
                    onChange={this.dateChange.bind(this)}
                >
                    <List.Item arrow="horizontal">Date</List.Item>
                </DatePicker>
            </div>
        )
    }
}

//这样的话，本函数返回的userinfo就会变成Hello组件的一个props属性
function mapStateToProps(state){
    return{
        userinfoStore:state.userinfoReducer
    }
}

//第四步：绑定，将触发数据变化方法(action)绑定到组件中，作为组件的一个props属性
function mapDispatchToProps(dispatch){
    return{
        userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Life)