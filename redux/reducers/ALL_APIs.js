import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const SavePostApi = createAsyncThunk("savePost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/savepost`, {
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

export const BlockUserApi = createAsyncThunk("blockUserApi", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/blockPost`, {
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

export const followApi = createAsyncThunk("follow", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/change_follow_status`, {
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

export const getsearchSplData = createAsyncThunk("searchSplData", async ()=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getsearchSplData`);
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
})


export const sendInvitation = createAsyncThunk("sendinvite", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/sendInvitation`, {
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

export const singlePostDataAPI = createAsyncThunk("singlePostData", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/singlePostData`, {
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

export const savePost = createSlice({
    name : "savePost",
    initialState :{
        savePostResult   : {},
        blockUserResult   : {},
        getsearchResult   : {},
        followResult   : {},
        sendInviteResult   : {},
        singlePostDataResult   : {},
        loading     : false,
        error       : false,
    },
    reducers : {},

    extraReducers: builder => {
        //-------------------------SavePostApi----------------------------------
        builder.addCase(SavePostApi.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(SavePostApi.fulfilled, (state, action) => {
            state.loading       =  false;
            state.savePostResult    = action.payload;
        })
        builder.addCase(SavePostApi.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------BlockUserApi----------------------------------
        builder.addCase(BlockUserApi.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(BlockUserApi.fulfilled, (state, action) => {
            state.loading       =  false;
            state.blockUserResult    = action.payload;
        })
        builder.addCase(BlockUserApi.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------getsearchSplData----------------------------------
        builder.addCase(getsearchSplData.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getsearchSplData.fulfilled, (state, action) => {
            state.loading       =  false;
            state.getsearchResult    = action.payload;
        })
        builder.addCase(getsearchSplData.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------followApi----------------------------------
        builder.addCase(followApi.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(followApi.fulfilled, (state, action) => {
            state.loading       =  false;
            state.followResult    = action.payload;
        })
        builder.addCase(followApi.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------sendInvitation----------------------------------
        builder.addCase(sendInvitation.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(sendInvitation.fulfilled, (state, action) => {
            state.loading       =  false;
            state.sendInviteResult    = action.payload;
        })
        builder.addCase(sendInvitation.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------single Post Data----------------------------------
        builder.addCase(singlePostDataAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(singlePostDataAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.singlePostDataResult    = action.payload;
        })
        builder.addCase(singlePostDataAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })
    },
});

export const { reducer : SavePostResult } = savePost;