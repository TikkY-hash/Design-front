import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "./slices/userSlice";
import natourSlice from "./slices/natoursSlice";

const store = configureStore({
  reducer: {
    userSlice,
    natourSlice
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
