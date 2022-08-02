import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  isEdited: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    edit: (state) => {
      state.isEdited = !state.isEdited;
    },
    getUser: (state, action) => {
      state.profile = action.payload.body;
    },
    clearUser: (state) => {
      state.profile = {};
    },
    modifyUser: (state, action) => {
      state.profile.firstName = action.payload.firstName;
      state.profile.lastName = action.payload.lastName;
    },
  },
});

export const { edit, getUser, clearUser, modifyUser } = userSlice.actions;
export default userSlice.reducer;
