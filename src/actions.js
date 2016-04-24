import fetch from 'isomorphic-fetch';
import {REQUEST_TODOS, RECEIVE_TODOS, ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, REQUEST_INQUIRIES, RECEIVE_INQUIRIES} from './actionTypes';

/*
 * 异步数据
 */

function requestTodos() {
	return {
		type: REQUEST_TODOS
	}
};

function receiveTodos(todos) {
	return {
		type: RECEIVE_TODOS,
		todos
	}
};

export function fetchTodos() {
	return function(dispatch) {
		dispatch(requestTodos());
		fetch('/dist/getTodos.json')
		.then(response => response.json())
		.then(json => dispatch(receiveTodos(json.todos)))
	}
};

/*
 * action 创建函数
 */
 
export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function completeTodo(index) {
	return {
		type: COMPLETE_TODO,
		index
	}
}

export function setVisibilityFilter(filter) {
	return {type: SET_VISIBILITY_FILTER, filter}
}

function requestInquiries() {
	return {
		type: REQUEST_INQUIRIES
	}
};

function receiveInquiries(inquiries) {
	return {
		type: RECEIVE_INQUIRIES,
		inquiries
	}
};

export function fetchInquiries() {
	return function(dispatch) {
		dispatch(requestInquiries());
		fetch('/dist/getInquiries.json')
		.then(response => response.json())
		.then(json => dispatch(receiveInquiries(json.inquiries)))
	}
};