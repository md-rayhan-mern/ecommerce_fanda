import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import { toast } from "react-hot-toast";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(userData);
      //console.log(response);
      
      if (response?.success) {
        localStorage.setItem("user", JSON.stringify(response?.data));
      }
      return response;
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      //console.log(error?.response?.data?.message);
      return rejectWithValue(errorMessage || "Login failed. Please try again.");
    }
  },
);

//REGISTER USER
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(userData);
      
      if (response?.success) {
        localStorage.setItem("user", JSON.stringify(response?.data));
      }
      return response;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
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
  isAuthModelOpen: false,
  authModelType: "login",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openAuthModel: (state, action) => {
      state.isAuthModelOpen = true;
      state.authModelType = action.payload;
    },
    closeAuthModel: (state, action) => {
      state.isAuthModelOpen = false;
    },
    switchAuthModel: (state, action) => {
        state.authModelType = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      state.isLogIn = false;
      state.isLoading = false;
      state.isAuthModelOpen = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthModelOpen = false;
        state.user = action.payload?.data;
        state.isLogIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message;
      })
      //   REGESTER USER
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLogIn = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthModelOpen = false;
        state.user = action?.payload?.data;
        state.isLogIn = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message;
      });
  },
});
export const {openAuthModel, closeAuthModel, switchAuthModel, logout } = authSlice.actions;
export default authSlice.reducer;
