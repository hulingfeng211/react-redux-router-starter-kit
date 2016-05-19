import { REQUEST_ALL_MAILS, RECEIVE_ALL_MAILS } from '../consts/ActionTypes'

export default function mail(state = [], action) {
	switch(action.type){
		case REQUEST_ALL_MAILS:
			return state;
		case RECEIVE_ALL_MAILS:
			return action.allMails;
		default:
			return state;
	}
}