import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "./FilterSlice";
import UserReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    filter: FilterReducer,
    user: UserReducer,
  },
});
