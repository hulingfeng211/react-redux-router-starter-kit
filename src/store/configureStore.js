import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';

import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {

  	const enhancer = compose(
		applyMiddleware(thunkMiddleware)
		//,DevTools.instrument()
	);

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}