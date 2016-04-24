import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actionTypes';

const { SHOW_ALL } = VisibilityFilters;

export default function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}