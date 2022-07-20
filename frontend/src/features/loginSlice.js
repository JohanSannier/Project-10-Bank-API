import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isConnected = true;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
