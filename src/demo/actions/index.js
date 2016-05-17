import fetch from 'isomorphic-fetch';
import { REQUEST_MAILS, RECEIVE_MAILS } from '../consts/ActionTypes'

/* 收件箱 */
function requestAllMails() {
	return {
		type: REQUEST_ALL_MAILS
	}
};

function receiveAllMails(mails) {
	return {
		type: RECEIVE_ALL_MAILS,
		mails
	}
};

export function fetchAllMails() {
	return dispatch => {
		dispatch(requestAllMails());
		fetch('/mock/getAllMails.json')
		.then(response => response.json())
		.then(json => dispatch(receiveAllMails(json.mails)))
	}
};