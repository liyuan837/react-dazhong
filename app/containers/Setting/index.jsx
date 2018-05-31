import React from 'react'
import Header from '../../components/Header'
class Setting extends React.Component{
    render(){
        return (
            <div>
                <Header titleName="首页"></Header>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Setting