import * as type from '../constants/type';
import Fetch from '../fetch/Fetch'

export const getHeroList = (params) => dispatch => {
    Fetch.postNoAuth('hero/queryList',params)
        .then(response => {
            if (Object.is(response.result, 'ok')) {
                console.log(response.data)
                dispatch({type: type.HERO_LIST, heroList: response.data });
            }
        })
        .catch(error => {
            throw error;
        });
}

export const getHeroDetail = (params) => dispatch => {
    Fetch.getNoAuth('hero/query',params)
        .then(response => {
            if (Object.is(response.result, 'ok')) {
                console.log(response.data)
                dispatch({type: type.HERO_DETAIL, heroDetail: response.data });
            }
        })
        .catch(error => {
            throw error;
        });
}