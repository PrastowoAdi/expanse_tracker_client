import { configureStore } from "@reduxjs/toolkit";
import expanseSlice from "./reducer";

export const store = configureStore({
  reducer: {
    expense: expanseSlice,
  },
});
