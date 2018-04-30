import axios from "axios";
import { SET_USERS, REMOVE_USER } from "./types";

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

//Remove user
export const clearUser = () => dispatch => {
  dispatch({
    type: REMOVE_USER,
    payload: null
  });
};
