import { SET_USERS, REMOVE_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        user: action.payload
      };
    case REMOVE_USER:
      return { user: action.payload };
    default:
      return state;
  }
};
