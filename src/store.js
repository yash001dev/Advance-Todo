import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./reducers/userDetailsSlice";
import todoReducer from "./reducers/todoSlice";
import { apiSlice } from "./service/apiSlice";

const store = configureStore({
  reducer: {
    //reducer
    userDetails: userDetailsReducer,
    todoDetails: todoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
});

export default store;
