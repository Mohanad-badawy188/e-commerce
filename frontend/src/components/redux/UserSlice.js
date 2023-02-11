import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const User =
  localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user"))
    : [];

export const RegisterUser = createAsyncThunk(
  "user/fetchUsers",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        user
      );
      user;
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUsers",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      user;
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: User,
    loading: false,
    error: false,
    errorDetails: "",
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    }),
      builder.addCase(RegisterUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorDetails = action.payload;
      });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
      state.errorDetails = "";

    }),
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorDetails = action.payload;
      });
  },
});

export default userSlice.reducer;
