import React from "react";
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import SimpleHeader from '../../../../components/SimpleHeader'

class Myhome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <SimpleHeader titleName='我的'></SimpleHeader>

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
)(Myhome)