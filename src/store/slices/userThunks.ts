import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../http";
import {
  IUserLogin,
  IUserRegisterResponse,
  IUserResponce,
} from "../types/sliceType";
import { authReset } from "./userSlice";

export const fetchAuthLogin = createAsyncThunk<IUserResponce, IUserLogin>(
  "auth/Login",
  async function (authLoginData) {
    const response = await api.post("/api/login", {
      ...authLoginData,
    });

    return response.data;
  }
);

export const fetchAuthRegister = createAsyncThunk<
  IUserRegisterResponse,
  IUserLogin
>("auth/Register", async function (authRegisterData) {
  const response = await api.post("/api/register", {
    ...authRegisterData,
  });

  return response.data;
});

export const fetchAuthLogout = createAsyncThunk<void>(
  "auth/Register",
  async function (_, { dispatch }) {
    dispatch(authReset());
  }
);
