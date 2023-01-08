import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "./FilterSlice";
import productsReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: FilterReducer,
  },
});
