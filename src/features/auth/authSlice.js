import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/Api";
import { toast } from "react-hot-toast";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post(
        import.meta.env.VITE_USER_API_URL_LOGIN,
        userData,
      );
      if (response.data?.success) {
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("Login successful!");
      }
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage || "Login failed. Please try again.");
      return rejectWithValue(errorMessage || "Login failed. Please try again.");
    }
  },
);

//REGISTER USER
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post(
        import.meta.env.VITE_USER_API_URL_REGISTER,
        userData,
      );
      if (response.data?.success) {
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("Registration successful!");
      }
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage || "Registration failed. Please try again.");
      return rejectWithValue(
        errorMessage || "Registration failed. Please try again.",
      );
    }
  },
);

const savedUser = localStorage.getItem("user");
const auth = savedUser ? JSON.parse(savedUser) : null;

const initialState = {
  user: auth,
  token: "",
  isLoading: false,
  isLogIn: !!localStorage.getItem("user"),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      state.isLogIn = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLogIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLogIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLogIn = false;
      })
      //   REGESTER USER
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLogIn = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLogIn = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
