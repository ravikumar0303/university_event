import {
    USER_EDIT_FAIL,
    USER_EDIT_REQUEST,
    USER_EDIT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
  } from "../Constants/userConstants";
  import axios from "axios";
  import { URL_PATH } from "../Constants/Curl";

  export const signup = (firstName,lastName,email, phone, role, city, zip_code, password) => {
    return (dispatch) => {
      dispatch({
        type: USER_SIGNUP_REQUEST,
      });
      const url = URL_PATH+"/user/register";

    const body = { firstName,lastName,email, phone, role, city, zip_code, password};

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
    .post(url, body, header)
    .then((response) => {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload: error.response.data,
      });
    });


};


}; 