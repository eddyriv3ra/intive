import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import countriesReducer from "../reducers/countriesReducer";
import allUsersReducer from "../reducers/allUsersReducer";
import userSelectedReducer from "../reducers/userSelectedReducer";

export default combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
  userSelected: userSelectedReducer,
  countries: countriesReducer
});
