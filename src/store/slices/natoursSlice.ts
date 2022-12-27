import { createSlice } from "@reduxjs/toolkit";
import { MainTour } from "../types/sliceType";
import { getTours, sendTours } from "./natoursThunks";

const initialState: MainTour = {
  data: {
    tours: [],
  },
  status: "",
};

const natoursSlice = createSlice({
  initialState,
  name: "natours",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTours.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = action.payload.status;
    });
    builder.addCase(sendTours.fulfilled, (state, action) => {
      state.data.tours.push(action.payload.data.tour);
    });
  },
});

export default natoursSlice.reducer;
