import { GET_USER_SELECTED } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_SELECTED:
      return {
        userSelected: action.payload
      };
    default:
      return state;
  }
};
