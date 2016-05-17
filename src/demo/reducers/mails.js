import { REQUEST_ALL_MAILS, RECEIVE_ALL_MAILS } from '../consts/ActionTypes'

const initialState = [
  {
    text: 'hello world',
    read: false,
    id: 0
  }
]

export default function mails(state = initialState, action) {
	switch(action.type){
		case REQUEST_ALL_MAILS:
			return state;
		case RECEIVE_ALL_MAILS:
			return action.mails;
		default:
			return state;
	}
}