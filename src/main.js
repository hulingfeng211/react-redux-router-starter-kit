import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore';
import App from './containers/App';
import routes from './routes';

const store = configureStore(browserHistory, window.__initialState__);
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
    	<Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('container')
);