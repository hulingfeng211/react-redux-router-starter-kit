import fetch from 'isomorphic-fetch';
import { REQUEST_ALL_MAILS, RECEIVE_ALL_MAILS } from '../consts/ActionTypes'

/* 收件箱 */
function requestAllMails() {
	return {
		type: REQUEST_ALL_MAILS
	}
};

function receiveAllMails(allMails) {
	return {
		type: RECEIVE_ALL_MAILS,
		allMails
	}
};

export function fetchAllMails() {
	return dispatch => {
		dispatch(requestAllMails())

		fetch('/demo/dist/getAllMails.json')
		.then(response => response.json())
		.then(json => dispatch(receiveAllMails(json.data)))
	}
};