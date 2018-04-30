import axios from "axios";
import { GET_USERS } from "./types";

//Get users
export const fetchUsers = () => dispatch => {
  axios
    .get("/api/users")
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
