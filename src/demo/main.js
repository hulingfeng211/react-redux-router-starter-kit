import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routers'
import configureStore from './store/configureStore'

//经redux封装
const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
    	<Router routes={routes} history={history}  />
    </Provider>,
    document.getElementById('container')
);