import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const getSentimetrixListAPI = createAsyncThunk("getSentimetrixList", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/Sentimetrix_list`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);
     }
})
export const SentimetrixGetByIdAPI = createAsyncThunk("SentimetrixGetById", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/SentimetrixGetById`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);
     }
})

export const SentimetrixSaveAPI = createAsyncThunk("SentimetrixSave", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/SentimetrixSave`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);
     }
})

export const getSentimetrix = createSlice({
    name : "getSentimetrix",
    initialState :{
        sentimetrixList   : {},
        SentimetrixMcq    : {},
        SentimetrixSave   : {},
        loading     : false,
        error       : false,
    },
    reducers : {},

    extraReducers: builder => {
        //-------------------------getSentimetrixListAPI----------------------------------
        builder.addCase(getSentimetrixListAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getSentimetrixListAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.sentimetrixList    = action.payload;
        })
        builder.addCase(getSentimetrixListAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------SentimetrixGetByIdAPI----------------------------------
        builder.addCase(SentimetrixGetByIdAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(SentimetrixGetByIdAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.SentimetrixMcq    = action.payload;
        })
        builder.addCase(SentimetrixGetByIdAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------SentimetrixSaveAPI----------------------------------
        builder.addCase(SentimetrixSaveAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(SentimetrixSaveAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.SentimetrixSave    = action.payload;
        })
        builder.addCase(SentimetrixSaveAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

    },
});


export default getSentimetrix.reducer;