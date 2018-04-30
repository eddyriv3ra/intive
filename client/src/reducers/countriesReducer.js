import { GET_COUNTRIES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { countries: action.payload };
    default:
      return state;
  }
};
