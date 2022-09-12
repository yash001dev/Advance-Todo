import { createSlice } from "@reduxjs/toolkit";

const UserDetailsSlice = createSlice({
  name: "userDetails",
  initialState: { email: "", password: "" },
  reducers: {
    addUserDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {},
});

const { actions } = UserDetailsSlice;

export const { addUserDetails } = actions;

export default UserDetailsSlice.reducer;
