import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore';
import App from './containers/App';


//redux 实例
//let store = createStore(todoApp);
const store = configureStore();

render(
    <Provider store={store}>
    	<App />
    </Provider>,
    $('#container')[0]
);

console.log('redux started');