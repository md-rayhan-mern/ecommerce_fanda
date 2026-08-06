import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import allProductReducer from "../features/products/allProductSlice";
import faqReducer from "../features/products/faqSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductReducer,
    faq: faqReducer,
  },
});
