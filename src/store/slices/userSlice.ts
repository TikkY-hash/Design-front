import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../types/sliceType";
import { fetchAuthLogin, fetchAuthRegister } from "./userThunks";

const initialState: IInitialState = {
  admin: false,
  authLoginError: null,
  authRegisterError: null,
  id: 0,
  token: localStorage.getItem("token"),
  password: "",
  email: "",
  isRegister: false,
  isAuth: false,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    authLogin: (state, action) => {
      state.token = action.payload.accessToken;
    },
    authRegister: (state, action) => {
      (state.password = action.payload.password),
        (state.email = action.payload.email);
    },
    authReset: (state) => {
      localStorage.removeItem("token");

      state.token = "";
      state.admin = false;
      state.authLoginError = null;
      state.authRegisterError = null;
      state.id = 0;
      state.password = "";
      state.email = "";
      state.isRegister = false;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthRegister.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.admin = action.payload.admin;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.isRegister = true;
    });
    builder.addCase(fetchAuthRegister.rejected, (state) => {
      state.authRegisterError = "This username is already used";
    });
    builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.authLoginError = null;
      state.isAuth = true;

      localStorage.setItem("token", action.payload.token);
    });
  },
});

export const { authLogin, authRegister, authReset } = userReducer.actions;

export default userReducer.reducer;
