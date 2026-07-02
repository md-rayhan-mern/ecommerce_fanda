import {createSlice} from "@reduxjs/toolkit"

const savedUser = localStorage.getItem("user");

const auth =  savedUser ?  JSON.parse(savedUser) : null;

const initialState = {
    user: auth,
    token: "",
    isLoading: false,
    isLogIn: false,
    isError: false,
    message: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authStart: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isLogIn = false;
            state.message = "";
        },
        authSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.isLogIn = true;
            //state.token = action.payload.token;

            //localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            
            
        },
        authFailure: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isError = false;
            state.message = null;
            //state.token = null;
            //localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    },
})

export const {authStart, authSuccess, authFailure, logout} = authSlice.actions;
export default authSlice.reducer;