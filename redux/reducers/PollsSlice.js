import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const GetPollsData = createAsyncThunk("pollsData", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getPollData`, {
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
        console.log(e);;
     }
})

export const SavePollAns = createAsyncThunk("savePollAns", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/savePollAns`, {
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
        console.log(e);;
     }
})

export const pollsData = createSlice({
    name : "pollsData",
    initialState :{
        savePostResult   : {},
        loading     : false,
        error       : false,
    },
    reducers : {},

    extraReducers: builder => {
        
        //-------------------------GetPollsData----------------------------------
        builder.addCase(GetPollsData.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(GetPollsData.fulfilled, (state, action) => {
            state.loading       =  false;
            state.savePostResult    = action.payload;
        })
        builder.addCase(GetPollsData.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------SavePollAns----------------------------------
        builder.addCase(SavePollAns.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(SavePollAns.fulfilled, (state, action) => {
            state.loading       =  false;
            state.savePostResult    = action.payload;
        })
        builder.addCase(SavePollAns.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

    },
});


export const { reducer : SavePostResult } = pollsData;