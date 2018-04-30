import axios from "axios";
import { SET_USERS, GET_USER_SELECTED } from "./types";

//Insert user
export const insertUser = userData => dispatch => {
  axios
    .post("/api/users", userData)
    .then(res =>
      dispatch({
        type: SET_USERS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

//Get user
export const fetchUser = id => dispatch => {
  axios
    .get(`/api/users/${id}`)
    .then(res =>
      dispatch({
        type: GET_USER_SELECTED,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
