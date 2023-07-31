import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/Auth";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
