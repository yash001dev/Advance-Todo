import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todoDetails",
  initialState: [
    { name: "todo1", id: 1 },
    { name: "todo2", id: 2 },
  ],
  reducers: {
    addTaskDetails: (state, action) => {
      return [...state, action.payload];
    },
  },
  extraReducers: {},
});

const { actions } = TodoSlice;

export const { addTaskDetails } = actions;

export default TodoSlice.reducer;
