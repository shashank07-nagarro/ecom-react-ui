import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (store, action) => {
      store.status = true;
      store.userData = action.payload.userData;
    },
    logout: (store, action) => {
      store.status = false;
      store.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
