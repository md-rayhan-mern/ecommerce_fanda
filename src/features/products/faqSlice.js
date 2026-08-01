import Api from "../../services/Api.js";
import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

const url = "/product/faq-add"


export const postFAQ = createAsyncThunk("faq/createFaq", async (faqData, {rejectWithValue}) => {
    try{
        const response = await Api.post(url, faqData);
    return response
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

