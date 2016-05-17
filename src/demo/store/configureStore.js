import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers/index';

/* 日志中间件 */
const logger = store => next => action => {
    console.log('dispatching:', action)
    let result = next(action)
    console.log('after dispatch:', store.getState())
    return result
}

export default function configureStore(browserHistory, initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(browserHistory),
            logger
        )
    );

    const store = createStore(rootReducer, initialState, enhancer);

    return store;
}