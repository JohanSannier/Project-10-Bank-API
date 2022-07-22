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
    logout: (state) => {
      state.isConnected = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
