import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URLS } from "../../services/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  fetalInfoData: null,
  error: null,
  fetalAddedData: null,
};

// kullanıcı fetal sayısı - tarihler bilgilerinin alınması
export const getFetalInfo = createAsyncThunk(
  "fetalInfo/getFetalInfo",
  async (_, { rejectWithValue }) => {
    console.log("GET_FETAL_INFO SLICE USER CREDENTIALS: ");
    const token = await AsyncStorage.getItem("userToken");
    const userId = await AsyncStorage.getItem("userId");

    try {
      const response = await axios.get(
        `${API_URLS.GET_FETAL_INFO}?id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userData = response.data;
      console.log("GET_FETAL_INFO SLICE RESPONSE: ", userData?.data);

      return response.data;
    } catch (error) {
      console.log("GET_FETAL_INFO SLICE ERROR: ", error.message);
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

// kullanıcı fetal sayııs gönderme işlemi
export const addFetal = createAsyncThunk(
  "addFetal/addFetal",
  async (_, { rejectWithValue }) => {
    console.log("GET_FETAL_ADD SLICE USER CREDENTIALS: ");
    const token = await AsyncStorage.getItem("userToken");
    const userId = await AsyncStorage.getItem("userId");

    try {
      const response = await axios.get(
        `${API_URLS.GET_FETAL_ADD}?id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userData = response.data;
      console.log("GET_FETAL_ADD SLICE RESPONSE: ", userData);

      return response.data;
    } catch (error) {
      console.log("GET_FETAL_ADD SLICE ERROR: ", error.message);
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const fetalSlice = createSlice({
  name: "fetal",
  initialState,
  reducers: {
    logout: (state) => {
      state.fetalInfoData = null;
      state.error= null;
      state.fetalAddedData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFetalInfo.pending, (state) => {
        state.error = null;
      })
      .addCase(getFetalInfo.fulfilled, (state, action) => {
        state.fetalInfoData = action.payload;
      })
      .addCase(getFetalInfo.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addFetal.pending, (state) => {
        state.error = null;
      })
      .addCase(addFetal.fulfilled, (state, action) => {
        state.fetalAddedData = action.payload;
      })
      .addCase(addFetal.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = fetalSlice.actions;
export default fetalSlice.reducer;
