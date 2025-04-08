import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URLS } from "../../services/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const personalForm = createAsyncThunk(
  "personal/personalForm",
  async (personalData, { rejectWithValue }) => {
    //console.log("PERSONAL_FORM SLICE USER CREDENTIALS: ", personalData);
    const token = await AsyncStorage.getItem('userToken');
    
    try {
      const response = await axios.post(API_URLS.PERSONAL_FORM, personalData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data;
      //console.log("PERSONAL_FORM SLICE RESPONSE: ", userData);

      return response.data;
    } catch (error) {
      console.log("PERSONAL_FORM SLICE ERROR: ", error.message);
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const personalFormSlice = createSlice({
  name: "personal",
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
      .addCase(personalForm.pending, (state) => {
        state.error = null;
      })
      .addCase(personalForm.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(personalForm.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = personalFormSlice.actions;
export default personalFormSlice.reducer;
