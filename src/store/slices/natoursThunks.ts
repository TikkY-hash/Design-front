import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../http";
import { MainTour, Tour, TourResponse } from "../types/sliceType";

export const getTours = createAsyncThunk<MainTour>(
  "natours/Get",
  async function () {
    const response = await api.get("/api/tours");

    return response.data;
  }
);

export const sendTours = createAsyncThunk<TourResponse, Tour>(
  "natours/Send",
  async function (query) {
    const response = await api.post("/api/tours", {
      ...query,
    });

    return response.data;
  }
);
