import {
  LOGIN_USER,
  REGISTER_ERRORS,
  REGISTER_USER,
  UPDATE_USER_STATE_ON_TOKEN,
} from "../actionTypes/AuthActionTypes";

let initialState = {
  user: "",
  token: "",
  errors: [],
  message: "",
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        message: action.payload.message,
        token: action.payload.token,
      };
    case LOGIN_USER:
      return {
        ...state,
        message: action.payload.message,
        token: action.payload.token,
      };
    case UPDATE_USER_STATE_ON_TOKEN:
      const userData = action.payload;
      return { ...state, token: userData.token, user: userData.user };
    case REGISTER_ERRORS:
      return { ...state, errors: action.payload.data.errors };
    default:
      return state;
  }
};
export default authReducer;
