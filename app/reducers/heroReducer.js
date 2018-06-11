import * as type from '../constants/type'

const initialState = {
    heroList: [],
    heroDetail: {
    }
}

export default function heroReducer(state = initialState, action) {
    switch (action.type) {
        case type.HERO_LIST:
            return {...state, heroList: action.heroList};
        case type.HERO_DETAIL:
            return {...state, heroDetail: action.heroDetail};
        default:
            return state
    }
}