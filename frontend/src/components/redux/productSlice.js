import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:5000/api/product");
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.products = action.payload;
    }),
      builder.addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;
