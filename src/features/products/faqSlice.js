import FaqService from "../../services/faqService/FaqService.js"
import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

const url = "/product/faq-add"


export const postFAQ = createAsyncThunk("faq/createFaq", async (faqData, {rejectWithValue}) => {
    try{
        const response = await FaqService.getProductFaqsService(faqData);
         console.log(`faq thank: ${response} step - 2` );
         return response;
    }catch(error){
        return rejectWithValue(error.response?.data?.message || 'কিছু ভুল হয়েছে!');
    }
});

export const fetchFAQ = createAsyncThunk("faq/fetchFaq", async (page , {rejectWithValue}) => {
    try{
        const response = await Api.get(`${url}?page=${1}&limit=${5}`)
    }catch(error){
        return rejectWithValue(error.response?.data?.message || 'ডেটা আনা সম্ভব হয়নি');
    }
});

const faqSlice = createSlice({
    name: "faq",
    initialState: { isLoading: false, data: null, success: false, error: null },
    reducers: {
        resetFaqStatus: (state) => {
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
                .addCase(postFAQ.pending, (state) => {
                    state.isLoading = true;
                })
                .addCase(postFAQ.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.success = true;
                })
                .addCase(postFAQ.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                })
    }
})

export const {resetFaqStatus} = faqSlice.actions;
export default faqSlice.reducer;