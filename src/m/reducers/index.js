import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { REQUEST_INQUIRIES, RECEIVE_INQUIRIES, REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PERSON, RECEIVE_PERSON } from '../actionTypes'

import todos from './todos';
import visibilityFilter from './visibilityFilter';

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

function products(state = [], action) {
	switch(action.type){
		case REQUEST_PRODUCTS:
			return state;
		case RECEIVE_PRODUCTS:
			return action.products;
		default:
			return state;
	}
}

function person(state = [], action) {
	switch(action.type){
		case REQUEST_PERSON:
			return state;
		case RECEIVE_PERSON:
			return action.person;
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos,
	inquiries,
	products,
	person,
	"routing": routerReducer
});

export default todoApp;