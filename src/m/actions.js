import fetch from 'isomorphic-fetch';
import {REQUEST_TODOS, RECEIVE_TODOS, ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, REQUEST_INQUIRIES, RECEIVE_INQUIRIES, REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PERSON, RECEIVE_PERSON} from './actionTypes';

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
	return dispatch => {
		dispatch(requestTodos());
		fetch('/m/dist/getTodos.json')
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

//INQUIRIES
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
	return dispatch => {
		dispatch(requestInquiries());
		fetch('/m/dist/getInquiries.json')
		.then(response => response.json())
		.then(json => dispatch(receiveInquiries(json.inquiries)))
	}
};

//PRODUCTS
function requestProducts() {
	return {
		type: REQUEST_PRODUCTS
	}
};

function receiveProducts(products) {
	return {
		type: RECEIVE_PRODUCTS,
		products
	}
};

export function fetchProducts() {
	return dispatch => {
		dispatch(requestProducts());
		fetch('/m/dist/getProducts.json')
		.then(response => response.json())
		.then(json => dispatch(receiveProducts(json.products)))
	}
};

//PERSON
function requestPerson() {
	return {
		type: REQUEST_PERSON
	}
};

function receivePerson(person) {
	return {
		type: RECEIVE_PERSON,
		person
	}
};

export function fetchPerson() {
	return dispatch => {
		dispatch(requestPerson());
		fetch('/m/dist/getPerson.json')
		.then(response => response.json())
		.then(json => dispatch(receivePerson(json.person)))
	}
};