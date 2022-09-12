import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./reducers/userDetailsSlice";
import todoReducer from "./reducers/todoSlice";

const store = configureStore({
  reducer: {
    //reducer
    userDetails: userDetailsReducer,
    todoDetails: todoReducer,
  },
});

export default store;
