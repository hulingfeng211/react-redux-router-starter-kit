import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers/index';

import DevTools from '../containers/DevTools';

const logger = store => next => action => {
  console.log('dispatching:', action)
  let result = next(action)
  //console.log('after dispatch:', store.getState())
  return result
}

export default function configureStore(browserHistory, initialState) {
	//const logger = createLogger();
	//console.log(initialState)
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware, 
			routerMiddleware(browserHistory), 
			logger
		),
		DevTools.instrument() //必须在applyMiddleware后面
	);

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}