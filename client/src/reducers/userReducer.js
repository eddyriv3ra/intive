import { SET_USERS, REMOVE_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    case REMOVE_USER:
      return action.payload;
    default:
      return state;
  }
};
