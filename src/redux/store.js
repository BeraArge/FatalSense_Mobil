import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducer";

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      immutableCheck: false, // Bu middleware'i devre dışı bırakır
    }),
});

export default store;
