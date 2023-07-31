import {
  LOGIN_ERRORS,
  LOGIN_USER,
  REGISTER_ERRORS,
  REGISTER_USER,
  UPDATE_USER_STATE_ON_TOKEN,
} from "../actionTypes/AuthActionTypes";
import { LOADING } from "../actionTypes/CommonTypes";
import { loginUserApi, registerUserApi } from "../services/api/Auth";
import jwt_decode from "jwt-decode";

export const registerUserAction = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    try {
      dispatch({ type: LOADING, payload: false });
      const response = await registerUserApi(user);
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: REGISTER_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: LOADING, payload: false });
      console.log(error);
      dispatch({
        type: REGISTER_ERRORS,
        payload: error.response,
      });
    }
  };
};

export const loginUserAction = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    try {
      dispatch({ type: LOADING, payload: false });
      const response = await loginUserApi(user);
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: LOGIN_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: LOADING, payload: false });
      console.log(error);
      dispatch({
        type: LOGIN_ERRORS,
        payload: error.response,
      });
    }
  };
};

export const updateStateOnToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const checkTokenValidity = new Date(decodedToken.exp * 1000);
      if (new Date() > checkTokenValidity) {
        localStorage.removeItem("token");
      } else {
        const userPayload = { token, user: decodedToken };
        dispatch({ type: UPDATE_USER_STATE_ON_TOKEN, payload: userPayload });
      }
    }
  };
};
