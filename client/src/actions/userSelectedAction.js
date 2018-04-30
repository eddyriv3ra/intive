import axios from "axios";
import { GET_USER_SELECTED } from "./types";

//Get countries
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
