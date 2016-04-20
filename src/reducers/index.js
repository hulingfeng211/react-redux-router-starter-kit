import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { SET_CURRENT_TAB } from '../actions'

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

const todoApp = combineReducers({
	visibilityFilter,
	todos,
	currentTab,
	"routing": routerReducer
});

export default todoApp;