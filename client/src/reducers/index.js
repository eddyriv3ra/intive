import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import countriesReducer from "../reducers/countriesReducer";
import allUsersReducer from "../reducers/allUsersReducer";

export default combineReducers({
  user: userReducer,
  users: allUsersReducer,
  countries: countriesReducer
});
