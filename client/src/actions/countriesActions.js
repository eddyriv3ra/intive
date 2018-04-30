import axios from "axios";
import { GET_COUNTRIES } from "./types";

//Get countries
export const fetchCountries = () => dispatch => {
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(res =>
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
