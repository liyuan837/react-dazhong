import React from 'react'
import {hashHistory} from 'react-router'

class List extends React.Component{
    render(){
        var list = [1,2,3];
        return (
            <div>
                <ul>
                    {list.map((item,index)=>{
                        return <li key={index} onClick={this.clickHandler.bind(this,item)}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }

    clickHandler(value) {
        hashHistory.push('/detail/'+value)
    }
}

export default List