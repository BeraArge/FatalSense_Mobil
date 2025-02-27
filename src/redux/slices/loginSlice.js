import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URLS } from "../../services/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk(
  "auth/login",
  async (userCredentials, { rejectWithValue }) => {
    console.log("LOGIN SLICE USER CREDENTIALS: ", userCredentials);
    try {
      const response = await axios.post(API_URLS.LOGIN, userCredentials);

      const userData = response.data;
      console.log(
        "LOGIN SLICE RESPONSE: ",
        userData?.data?.id,
        "---:",
        userData?.data?.accessToken?.token
      );

      await AsyncStorage.setItem(
        "userId",
        userData?.data?.id ? userData?.data?.id.toString() : ""
      );
      await AsyncStorage.setItem(
        "userToken",
        userData?.data?.accessToken?.token
          ? userData?.data?.accessToken?.token
          : ""
      );
      await AsyncStorage.setItem(
        "nameSurname",
        userData?.data?.name && userData?.data?.surname
          ? `${userData?.data?.name} ${userData?.data?.surname}`
          : ""
      );
      return response.data;
    } catch (error) {
      console.log("LOGIN SLICE ERROR: ", error.message);
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    userId: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userId = action.payload?.id || null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
