import { SET_USERS, GET_USER_SELECTED } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    case GET_USER_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
