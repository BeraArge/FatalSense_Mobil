import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URLS } from "../../services/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const updatePassword = createAsyncThunk(
  "uPassword/updatePassword",
  async (updatePasswordData, { rejectWithValue }) => {
    console.log("UPDATE_PASSWORD SLICE DATA: ", updatePasswordData);

    const token = await AsyncStorage.getItem("userToken");
    console.log("UPDATE PASSWORD USERTOKEN: ", token);
    try {
      const response = await axios.post(
        API_URLS.UPDATE_PASSWORD,
        updatePasswordData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userData = response.data;
      console.log("UPDATE_PASSWORD SLICE RESPONSE: ", userData);

      return response.data;
    } catch (error) {
      console.log("UPDATE_PASSWORD SLICE ERROR: ", error.message);
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const updatePasswordSlice = createSlice({
  name: "uPassword",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.data = null;
    },
    clearMessage: (state) => {
      if (state.data.isSuccess === false) {
        state.data.message = ""; // Mesajı sıfırla
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout, clearMessage  } = updatePasswordSlice.actions;
export default updatePasswordSlice.reducer;
