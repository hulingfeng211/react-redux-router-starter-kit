import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers/index';

import DevTools from '../containers/DevTools';

export default function configureStore(history, initialState) {
	const logger = createLogger();

	const enhancer = compose(
		applyMiddleware(thunkMiddleware, routerMiddleware(history))
		,DevTools.instrument() //必须在applyMiddleware后面
	);

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}