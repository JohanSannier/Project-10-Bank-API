import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/loginSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    user: userSlice,
  },
});
