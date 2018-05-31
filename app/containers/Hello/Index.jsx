import React from "react";

import Header from '../../components/Header/Header'
import Carouse from './subpage/Carouse'

class Hello extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            now:Date.now()
        }
    }

    handleClick(e){
        console.log("as")
        this.setState({
            now:Date.now()
        })
    }

    render(){
        return (
            <div>
                <Header titleName="首页"></Header>
                <Carouse></Carouse>
                <p>{this.state.now}</p>
                <a onClick={this.handleClick.bind(this)}>点我q</a>
            </div>
        )
    }

}
export default Hello