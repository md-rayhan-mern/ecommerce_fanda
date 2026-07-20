// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // অথবা fetch ব্যবহার করতে পারেন

// ১. এপিআই থেকে প্রোডাক্ট ডেটা আনার জন্য Async Thunk তৈরি
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // আপনার আসল এপিআই ইউআরএল (API URL) এখানে বসাবেন
      const response = await axios.get('https://example.com'); 
      return response.data; // এটি সফল হলে payload হিসেবে যাবে
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'ডেটা লোড করতে সমস্যা হয়েছে');
    }
  }
);

// ২. স্লাইসের প্রাথমিক অবস্থা (Initial State) ডিফাইন করা
const initialState = {
  allProducts: [ {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", // ডামি ইমেজ লিংক, আপনার ইমেজ বসিয়ে নিবেন
      name: "skin'O Strawberry Scented Shower Gel -...",
      price: "২৫০",
      oldPrice: "২৬০",
      discount: "1",
      rating: 1.5,
      review: 120,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      name: "Casio Black Resin All-Season Digital Sports...",
      price: "২৩৫",
      oldPrice: "৫২৫",
      discount: "৫৫",
      rating: 2.5,
      review: 160,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1571380401583-72ca84994796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "TEL Premium Shoe Rack Red 4 Step Red 861587",
      price: "৪৭৬",
      oldPrice: "৬১০",
      discount: "২২",
      rating: 3.5,
      review: 190,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1530630458144-014709e10016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Royal Cafe Classic Coffee 200g | Premium...",
      price: "৬৪০",
      oldPrice: "৭০০",
      discount: "৩",
      rating: 5,
      review: 380,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Realme C100i 4/64GB Smartphone - 7000mAh...",
      price: "১৫,৮৪৫",
      oldPrice: "১৬,৯৯৯",
      discount: "৭",
      rating: 4,
      review: 940,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1555487505-8603a1a69755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Top-Tier Option - Cute humidifier egg lighting...",
      price: "১৮৭",
      oldPrice: "৬००",
      discount: "৬৯",
      rating: 3.5,
      review: 170,
    },],
  isLoading: false,
  error: null,
};

// ৩. প্রোডাক্ট স্লাইস তৈরি
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // যদি কখনো লোকাল ডেটা সরাসরি সেট করতে চান তার জন্য অ্যাকশন
    setLocalProducts: (state, action) => {
      state.allProducts = action.payload;
    }
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
        state.allProducts = action.payload; // এপিআই-এর ডেটা স্টোরে সেভ হলো
      })
      // যখন এপিআই কলে কোনো ভুল বা এরর হবে
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'কিছু একটা ভুল হয়েছে';
      });
  },
});

export const { setLocalProducts } = productSlice.actions;
export default productSlice.reducer;
