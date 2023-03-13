import { configureStore } from "@reduxjs/toolkit";
import  newsSlice  from "../features/newsSlice";
import userSlice from "../features/user.Slice";

export const store = configureStore({
  reducer:{ 
    newsSlice,
    userSlice}
});
