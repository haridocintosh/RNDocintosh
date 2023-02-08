import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const userPostData = createAsyncThunk("getAllPost", async (postData)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(postData)
         });
        const result=  await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
})

export const postCreate = createAsyncThunk("postupload", async(uploadData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/createPostReact`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(uploadData)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const getMycircle = createAsyncThunk("getCircle", async (data)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/getCircle`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    });
    const result = await response.json();
    return result;
})

export const getMyPostsApi = createAsyncThunk("MyPosts", async (data)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/getmyPost`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    });
    const getMyPostsResult = await response.json();
    return getMyPostsResult;
})

export const getAllCoins = createAsyncThunk("AllCoins", async (data)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/totalCoins`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    });
    const getAllCoinsResult = await response.json();
    return getAllCoinsResult;
});

export const getCointransfer = createAsyncThunk("Cointransfer", async (data)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/cointransfer`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    });
    const getCointransferResult = await response.json();
    return getCointransferResult;
})

export const getFollowersDataApi = createAsyncThunk("followers", async (data)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/followers`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    });
    const getFollowersResult = await response.json();
    return getFollowersResult;
})

export const getFollowingDataApi = createAsyncThunk("following", async (data)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/following`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    });
    const getFollowingResult = await response.json();
    return getFollowingResult;
})


export const postData = createSlice({
    name : "usersfetch",
    initialState :{
        postData : [],
        loading : false,
        error :false,
    },
    reducers : {},
    extraReducers : builder =>{

        //---------------------userPostData----------------------
        builder.addCase(userPostData.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(userPostData.fulfilled, (state, action) => {
            state.loading  =  false;
            state.postData = action.payload;
        })
        builder.addCase(userPostData.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //---------------------postCreate----------------------
        builder.addCase(postCreate.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(postCreate.fulfilled, (state, action) => {
            state.loading       = false,
            state.isLoggedIn    = true
            state.registerData  = action.payload;
        })
        builder.addCase(postCreate.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //---------------------getMycircle----------------------
        builder.addCase(getMycircle.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getMycircle.fulfilled, (state, action) => {
            state.loading       =  false;
            state.circleData    = action.payload;
        })
        builder.addCase(getMycircle.rejected, (state) => {
            state.loading = false;
            state.error = false
        })


        //---------------------getMyPostsApi----------------------
        builder.addCase(getMyPostsApi.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getMyPostsApi.fulfilled, (state, action) => {
            state.loading       =  false;
            state.circleData    = action.payload;
        })
        builder.addCase(getMyPostsApi.rejected, (state) => {
            state.loading = false;
            state.error = false
        })


        //---------------------getAllCoins----------------------
        builder.addCase(getAllCoins.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getAllCoins.fulfilled, (state, action) => {
            state.loading       =  false;
            state.circleData    = action.payload;
        })
        builder.addCase(getAllCoins.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //---------------------getCointransfer----------------------
        builder.addCase(getCointransfer.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getCointransfer.fulfilled, (state, action) => {
            state.loading       =  false;
            state.circleData    = action.payload;
        })
        builder.addCase(getCointransfer.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //---------------------getFollowersDataApi----------------------
        builder.addCase(getFollowersDataApi.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getFollowersDataApi.fulfilled, (state, action) => {
            state.loading       =  false;
            state.circleData    = action.payload;
        })
        builder.addCase(getFollowersDataApi.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //---------------------getFollowingDataApi----------------------
        builder.addCase(getFollowingDataApi.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getFollowingDataApi.fulfilled, (state, action) => {
            state.loading       =  false;
            state.circleData    = action.payload;
        })
        builder.addCase(getFollowingDataApi.rejected, (state) => {
            state.loading = false;
            state.error = false
        })
    }
});

export const { reducer : result } = postData;