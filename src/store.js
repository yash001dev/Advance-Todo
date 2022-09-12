import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./reducers/userDetailsSlice";

const store = configureStore({
  reducer: {
    //reducer
    userDetails: userDetailsReducer,
  },
});

export default store;
