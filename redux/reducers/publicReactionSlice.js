import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const postLikeDataAPI = createAsyncThunk("postLikeData", async (data)=>{
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
        console.log(e);
     }
})

export const getallLikesAPI = createAsyncThunk("getallLikes", async (data)=>{
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
        console.log(e);
     }
})
export const getallcommentAPI = createAsyncThunk("getcomment", async (data)=>{
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

export const commentPostAPI = createAsyncThunk("commentpost", async (data)=>{
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

export const deleteCommentAPI = createAsyncThunk("deleteComment", async (data)=>{
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

const likesData = createSlice({
    name : "likesPage",
    initialState :{
        likeData : [],
        allcommentsData:[],
        commentsData:[],
        getAllLikes:[],
        deleteComment:[],
        loading : false,
        error :false,
    },

  reducers: {},
  extraReducers: builder => {
    //--------------------------postLikeDataAPI-------------------------------
    builder.addCase(postLikeDataAPI.pending, (state) => {
      state.loading       =  true;
    })
    builder.addCase(postLikeDataAPI.fulfilled, (state, action) => {
        state.loading       =  false;
        state.likeData    = action.payload;
    })
    builder.addCase(postLikeDataAPI.rejected, (state) => {
        state.loading = false;
        state.error = true
    })
    //--------------------------getallLikesAPI-------------------------------
    builder.addCase(getallLikesAPI.pending, (state) => {
      state.loading       =  true;
    })
    builder.addCase(getallLikesAPI.fulfilled, (state, action) => {
        state.loading       =  false;
        state.getAllLikes    = action.payload;
    })
    builder.addCase(getallLikesAPI.rejected, (state) => {
        state.loading = false;
        state.error = true
    })

    //--------------------------getallcommentAPI-------------------------------
    builder.addCase(getallcommentAPI.pending, (state) => {
      state.loading       =  true;
    })
    builder.addCase(getallcommentAPI.fulfilled, (state, action) => {
        state.loading       =  false;
        state.allcommentsData  = action.payload;
    })
    builder.addCase(getallcommentAPI.rejected, (state) => {
        state.loading = false;
        state.error = true
    })

    //--------------------------commentPostAPI-------------------------------
    builder.addCase(commentPostAPI.pending, (state) => {
      state.loading       =  true;
    })
    builder.addCase(commentPostAPI.fulfilled, (state, action) => {
        state.loading       =  false;
        state.commentsData  = action.payload;
    })
    builder.addCase(commentPostAPI.rejected, (state) => {
        state.loading = false;
        state.error = true
    })
    //--------------------------deleteCommentAPI-------------------------------
    builder.addCase(deleteCommentAPI.pending, (state) => {
      state.loading       =  true;
    })
    builder.addCase(deleteCommentAPI.fulfilled, (state, action) => {
        state.loading       =  false;
        state.deleteComment  = action.payload;
    })
    builder.addCase(deleteCommentAPI.rejected, (state) => {
        state.loading = false;
        state.error = true
    })
  },
});
export const { reducer:  getAllcommentsData } = likesData;

export default likesData.reducer;