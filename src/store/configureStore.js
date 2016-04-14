import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';

import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const loggerMiddleware = createLogger();

  const createStoreWithMiddleware = applyMiddleware(
  	thunkMiddleware, 
  	loggerMiddleware
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);
  //const store = createStore(rootReducer, initialState, window.devToolsExtension());

  return store;
}