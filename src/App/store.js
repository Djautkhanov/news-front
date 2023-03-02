import { configureStore } from "@reduxjs/toolkit";
import { newsSlice } from "../features/newsSlice";

export const store = configureStore({
  reducer: newsSlice,
});
