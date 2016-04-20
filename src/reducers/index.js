import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { SET_CURRENT_TAB, REQUEST_INQUIRIES, RECEIVE_INQUIRIES } from '../actions'

import todos from './todos';
import visibilityFilter from './visibilityFilter';

function currentTab(state = 'home', action){
	switch(action.type){
		case SET_CURRENT_TAB:
			return action.tab;
		default:
			return state;
	}
};

function inquiries(state = [], action) {
	switch(action.type){
		case REQUEST_INQUIRIES:
			return state;
		case RECEIVE_INQUIRIES:
			return action.inquiries;
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos,
	currentTab,
	inquiries,
	"routing": routerReducer
});

export default todoApp;