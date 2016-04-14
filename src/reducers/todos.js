import { ADD_TODO, COMPLETE_TODO, REQUEST_TODOS } from '../actions';

export default function todos(state = [], action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return action.todos;

    case ADD_TODO:
      console.log(state);
      return [...state, {
        text: action.text,
        completed: false
      }];

    case COMPLETE_TODO:
      console.log(state);
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];

    default:
      console.log(state);
      return state;
  }
}