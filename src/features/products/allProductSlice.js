// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../services/Api.js";

//Flesh sell product fetching
export const fetchingFlasSel = createAsyncThunk(
  "products/fetchingFlashSel",
  async () => {},
);

// ১. এপিআই থেকে প্রোডাক্ট ডেটা আনার জন্য Async Thunk তৈরি
export const fetchProducts = createAsyncThunk(
  "products/fetchProductsPg",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const url = import.meta.env.VITE_GET_PRODUCT_PG || "";
      console.log(`Product pagination get api = ${url}?page=${1}&limit=${1}`);

      // আপনার আসল এপিআই ইউআরএল (API URL) এখানে বসাবেন
      const response = await Api.get(`${url}?page=${1}&limit=${1}`);

      return response; // এটি সফল হলে payload হিসেবে যাবে
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "ডেটা লোড করতে সমস্যা হয়েছে",
      );
    }
  },
);
//Singal product fetching
export const fetchingSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      const url = import.meta.env.VITE_GET_PRODUCT_PG || "";
      console.log(url);

      const response = await Api.get(`${url}/${id}`);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "ডেটা লোড করতে সমস্যা হয়েছে",
      );
    }
  },
);

// ২. স্লাইসের প্রাথমিক অবস্থা (Initial State) ডিফাইন করা
const initialState = {
  allProducts: {
    items: [],
    meta: {
      page: 0,
      limit: 0,
      totalProducts: 0,
      totalPages: 0,
    },
  },
  singleProduct: null,
  isLoading: false,
  error: null,
  errorMessage: null,
  flashProduct: {
    items: [],
    meta: {
      page: 0,
      limit: 0,
      totalProducts: 0,
      totalPages: 0,
    },
  },
};

// ৩. প্রোডাক্ট স্লাইস তৈরি
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // যদি কখনো লোকাল ডেটা সরাসরি সেট করতে চান তার জন্য অ্যাকশন
    cleareProducts: (state) => {
      state.allProducts.items = [];
      state.allProducts.meta.page = 1;
    },
  },
  // এপিআই কলের অবস্থা (Pending, Fulfilled, Rejected) হ্যান্ডেল করার জন্য extraReducers
  extraReducers: (builder) => {
    builder
      // যখন এপিআই কল শুরু হবে (Loading...)
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // যখন এপিআই থেকে ডেটা সফলভাবে চলে আসবে
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProducts.items = action.payload.data; // এপিআই-এর ডেটা স্টোরে সেভ হলো
        state.allProducts.meta = action.payload.meta; // এপিআই-এর ডেটা স্টোরে সেভ হলো
      })
      // যখন এপিআই কলে কোনো ভুল বা এরর হবে
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "কিছু একটা ভুল হয়েছে";
      })
      // *** নতুন যুক্ত করা হলো: সিঙ্গেল প্রডাক্টের কেসসমূহ ***
      .addCase(fetchingSingleProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.singleProduct = null; // নতুন ডাটা আসার আগে আগের প্রডাক্ট মুছে ফেলা
      })
      .addCase(fetchingSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        // আপনার এপিআই রেসপন্সের ফরম্যাট অনুযায়ী action.payload অথবা action.payload.data লিখুন
        state.singleProduct = action.payload.data || action.payload;
      })
      .addCase(fetchingSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "সিঙ্গেল প্রডাক্ট আনতে সমস্যা হয়েছে";
      });
  },
});

export const { cleareProducts } = productSlice.actions;
export default productSlice.reducer;
