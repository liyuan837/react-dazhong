import React from 'react'
import { TabBar,Icon } from 'antd-mobile';
import { hashHistory } from 'react-router'
import './style.less'

import LocalStore from '../../util/LocalStore'

class FooterBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tabBar1'
        };
    }
    componentDidMount(){

    }
    render(){

        return(
            <div style={{ marginTop:'50px' }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab === 'tabBar1'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'tabBar1',
                            });
                            LocalStore.setItem("selectedTab","tabBar1")
                            hashHistory.push('/life')
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{ width: '22px', height: '22px'}}>
                                <Icon type="check-circle-o"></Icon>
                            </div>
                        }
                        selectedIcon={
                            <div style={{ width: '22px', height: '22px'}}>
                                <Icon type="check-circle"></Icon>
                            </div>
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'tabBar2'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'tabBar2',
                            });
                            LocalStore.setItem("selectedTab","tabBar2")
                            hashHistory.push('/koubei')
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'tabBar3'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'tabBar3',
                            });
                            LocalStore.setItem("selectedTab","tabBar3")
                            hashHistory.push('/friend')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{width:22,height:22}}>
                                <i className='icon-star-o'></i>
                            </div>
                        }
                       selectedIcon={
                           <div style={{width:22,height:22}}>
                               <i className="icon-star"></i>
                           </div>
                        }
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'tabBar4'}
                        onPress={() => {
                            LocalStore.setItem("selectedTab","tabBar4")
                            this.setState({
                                selectedTab: 'tabBar4',
                            });

                            this.props.click4();
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default FooterBar