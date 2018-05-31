import React from 'react'

class Detail extends React.Component{
    render(){
        return (
            <div>
                detail {this.props.params.id}
            </div>
        )
    }
}

export default Detail