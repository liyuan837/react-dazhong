import React from'react'

import { NavBar ,Icon ,Popover } from 'antd-mobile'

import './style.less'

class Header extends React.Component{
    state = {
        visible: false,
        selected: '',
    };

    render(){
        return(
            <div style={{marginBottom:'45px'}}>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    rightContent={[
                                <Icon type="ellipsis" />
                    ]}
                >{this.props.titleName}</NavBar>
            </div>
        )
    }
}

export default Header