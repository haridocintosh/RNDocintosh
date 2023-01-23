import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";


export const postLikeData = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/post_like`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const LikesResult=  await responce.json();
        return LikesResult;
     }
     catch(e){
        console.log(e);;
     }
})

export const getallLikes = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/allpostlike`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const commentResults =  await responce.json();
        return commentResults;
     }
     catch(e){
        console.log(e);;
     }
})
export const getallcomment = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getallcomment`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const commentResults =  await responce.json();
        return commentResults;
     }
     catch(e){
        console.log(e);;
     }
})

export const commentData = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/post_comment`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const commentResults =  await responce.json();
        return commentResults;
     }
     catch(e){
        console.log(e);;
     }
})

export const deleteComment = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/delete_comment`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const delResult =  await responce.json();
        return delResult;
     }
     catch(e){
        console.log(e);;
     }
})


export const likesData = createSlice({
    name : "likesData",
    initialState :{
        likesData : [],
        loading : false,
        error :false,
        commentsData:[],
        getAllLikes:[],
        deleteComment:[]
    },
    reducers : {},
    extraReducers : builder =>{
        //-------------------------postLikeData---------------------------
        builder.addCase(postLikeData.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(postLikeData.fulfilled, (state, action) => {
            state.loading       =  false;
            state.likesData    = action.payload;
        })
        builder.addCase(postLikeData.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //-------------------------commentData---------------------------
        builder.addCase(commentData.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(commentData.fulfilled, (state, action) => {
            state.loading       =  false;
            state.commentsData    = action.payload;
        })
        builder.addCase(commentData.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //-------------------------getallcomment---------------------------
        builder.addCase(getallcomment.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getallcomment.fulfilled, (state, action) => {
            state.loading       =  false;
            state.commentsData    = action.payload;
        })
        builder.addCase(getallcomment.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //-------------------------getallLikes---------------------------
        builder.addCase(getallLikes.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getallLikes.fulfilled, (state, action) => {
            state.loading       =  false;
            state.getAllLikes    = action.payload;
        })
        builder.addCase(getallLikes.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //-------------------------deleteComment---------------------------
        builder.addCase(deleteComment.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.loading       =  false;
            state.deleteComment    = action.payload;
        })
        builder.addCase(deleteComment.rejected, (state) => {
            state.loading = false;
            state.error = false
        })


        
  
    },
});

export const { reducer : commentResults} = likesData;
export const { reducer : LikesResult } = likesData;