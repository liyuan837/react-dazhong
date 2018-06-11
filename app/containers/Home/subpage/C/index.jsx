import React from 'react'

class C extends React.Component{
    render(){
        return(
            <div>
               <button onClick={this.changeState.bind(this)}>C组件更改</button>
            </div>
        )
    }

    changeState(){
        const actions = this.props.actions
        actions.login({
            userid:'甄姬',
            city:'长安'
        })
    }
}

export default C