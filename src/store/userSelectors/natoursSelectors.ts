import { TRootState } from "..";

export const toursReducer = (state: TRootState) => state.natourSlice;

export const tours = (state: TRootState) => toursReducer(state).data;
