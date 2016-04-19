import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('container')
);