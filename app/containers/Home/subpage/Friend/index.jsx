import React from "react";
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import SearchHeader from '../../../../components/SearchHeader'

import { PullToRefresh, Button } from 'antd-mobile';

function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}

class Friend extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight-50,
            data: [],
        };
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }

    render() {
        return (
            <div>
                <SearchHeader titleName='Friend'></SearchHeader>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        marginTop:40,
                        marginBottom:50,
                        overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({ refreshing: true });
                        setTimeout(() => {
                            this.setState({ refreshing: false });
                        }, 1000);
                    }}
                >
                    {this.state.data.map(i => (
                        <div key={i} style={{ textAlign: 'center', padding: 20 }}>
                            {this.state.down ? 'pull down' : 'pull up'} {i}
                        </div>
                    ))}
                </PullToRefresh>
            </div>);
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
)(Friend)