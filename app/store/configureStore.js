import { createStore,applyMiddleware ,compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

//第二步：根据计算规则生成 store
export default function configureStore() {
    const middleware = applyMiddleware(...[thunk]);
    const store = createStore(rootReducer,compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
    return store
}