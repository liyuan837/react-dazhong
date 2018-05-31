import React from 'react'
import Header from '../components/Header'
class App extends React.Component{
    render(){
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default App