import React from'react'
import PureRenderMixin from "react-addons-pure-render-mixin";

import { NavBar ,Icon } from 'antd-mobile'

import './style.less'

class SimpleHeader extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            visible: false,
            selected: '',
        };
    }

    render(){
        return(
            <div style={{marginBottom:'45px'}}>
                <NavBar
                    mode="dark"

                >{this.props.titleName}</NavBar>
            </div>
        )
    }
}

export default SimpleHeader