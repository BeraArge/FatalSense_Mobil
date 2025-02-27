import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URLS } from "../../services/apiService";

export const forgotPassword = createAsyncThunk(
  "forgot/forgotPassword",
  async (forgotPasswordData, { rejectWithValue }) => {
    console.log("FORGOT_PASSWORD SLICE USER CREDENTIALS: ", forgotPasswordData);
    try {
      const response = await axios.post(
        API_URLS.FORGOT_PASSWORD,
        forgotPasswordData
      );

      const userData = response.data;
      console.log("FORGOT_PASSWORD SLICE RESPONSE: ", userData);
      return response.data;
    } catch (error) {
      console.log("FORGOT_PASSWORD SLICE ERROR: ", error.message);
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgot",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
