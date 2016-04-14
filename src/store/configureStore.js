import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';

import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0

  	const loggerMiddleware = createLogger();

  	const enhancer = compose(
		// Middleware you want to use in development:
		applyMiddleware(loggerMiddleware, thunkMiddleware),
		// Required! Enable Redux DevTools with the monitors you chose
		DevTools.instrument()
	);


  // const createStoreWithMiddleware = applyMiddleware(
  // 	thunkMiddleware, 
  // 	loggerMiddleware
  // )(createStore);

  const store = createStore(rootReducer, initialState, enhancer);
  //const store = createStore(rootReducer, initialState, window.devToolsExtension());

  return store;
}