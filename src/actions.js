import fetch from 'isomorphic-fetch';

/*
 * action 类型
 */

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

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

		return fetch('/getData.json')
			.then(response => response.json())
			.then(json =>
				// 可以多次 dispatch！
				// 这里，使用 API 请求结果来更新应用的 state。
				dispatch(receiveTodos(subreddit, json))
			)
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