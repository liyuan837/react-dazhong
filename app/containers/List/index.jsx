import React from 'react'
import {hashHistory} from 'react-router'
import Header from '../../components/Header'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getHeroList,getHeroDetail } from '../../actions/HeroAction'

class List extends React.Component{
    componentDidMount(){
        //请求列表
        this.props.getHeroList({pageSize:10});
        this.props.getHeroDetail({id:4});
    }

    render(){
        const heroList =  this.props.heroStore.heroList
        const heroDetail = this.props.heroStore.heroDetail

        return (
            <div>
                <Header titleName="列表"></Header>
                <ul>
                    {
                        heroList.map( (hero,index)=> {
                            return (<li key={index}>
                                {hero.name} -- {hero.describe}
                            </li>)

                        })
                    }
                </ul>

                +++++++++++++++++++++

                {
                    heroDetail.name
                }
            </div>
        )
    }

    clickHandler(value) {
        hashHistory.push('/detail/'+value+"/liyuan")
    }
}

const mapStateToProps = state => {
    return {
        heroStore: state.heroReducer
    };
};
const mapDispatchToProps = dispatch => ({
    getHeroList:bindActionCreators(getHeroList,dispatch),
    getHeroDetail:bindActionCreators(getHeroDetail,dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((List));
