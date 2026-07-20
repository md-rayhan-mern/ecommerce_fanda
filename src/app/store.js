import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import allProductReducer from "../features/products/allProductSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductReducer
  },
});
