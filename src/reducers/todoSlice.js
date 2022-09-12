import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const TodoSlice = createSlice({
  name: "todoDetails",
  initialState: [],
  reducers: {
    addTaskDetails: (state, action) => {
      let id = _.uniqueId("todo_");
      return [...state, { ...action.payload, id }];
    },
  },
  extraReducers: {},
});

const { actions } = TodoSlice;

export const { addTaskDetails } = actions;

export default TodoSlice.reducer;
