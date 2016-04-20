import fetch from 'isomorphic-fetch';

/*
 * action 类型
 */

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const REQUEST_INQUIRIES = 'REQUEST_INQUIRIES';
export const RECEIVE_INQUIRIES = 'RECEIVE_INQUIRIES';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

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

export function setCurrentTab(tab) {
	return {
		type: SET_CURRENT_TAB,
		tab
	}
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