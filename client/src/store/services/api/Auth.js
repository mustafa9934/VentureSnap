import axios from "axios";
import BASE_URL from "../../../api";

export const registerUserApi = (user) => {
  return axios.post(`${BASE_URL}/user/register`, user);
};

export const loginUserApi = (user) => {
  return axios.post(`${BASE_URL}/user/login`, user);
};
