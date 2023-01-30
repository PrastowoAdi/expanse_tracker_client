import { configureStore } from "@reduxjs/toolkit";
import expanseSlice from "./reducer";
import { apiSlice } from "./apiSlice";
export const store = configureStore({
  reducer: {
    expense: expanseSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
