import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../apis/constant";

export const CommunityPostDataAPI = createAsyncThunk("communitypostdata", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/CommunityPostData`, {
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

export const addCommunityApi = createAsyncThunk("addCommunity", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/addCommunity`, {
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


export const CommunityPD = createSlice({
    name : "pollsData",
    initialState :{
        result   : {},
        CommunityPostData  : {},
        loading     : false,
        error       : false,
    },
    reducers : {},

    extraReducers: builder => {
        
        //-------------------------CommunityPostDataAPI----------------------------------
        builder.addCase(CommunityPostDataAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(CommunityPostDataAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.result    = action.payload;
        })
        builder.addCase(CommunityPostDataAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------addCommunityApi----------------------------------
        builder.addCase(addCommunityApi.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(addCommunityApi.fulfilled, (state, action) => {
            state.loading       =  false;
            state.CommunityPostData    = action.payload;
        })
        builder.addCase(addCommunityApi.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })


    },
});


export const { reducer : result } = CommunityPD;