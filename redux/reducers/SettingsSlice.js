import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";


export const getSavedPostsApi = createAsyncThunk("savedPosts", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/getSavedPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result = await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
});
  
export const getBlockedUsersApi = createAsyncThunk("blockedUsers", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/getBlockedPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
});

export const getNotificationApi = createAsyncThunk("notificationSetting", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/notificationsSetting`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
});

export const getUpdateNotificationApi = createAsyncThunk("updateNotification", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/updatenotificationsSetting`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
});

export const getDeactiveDeleteApi = createAsyncThunk("deactiveDelete", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/deactiveDelete`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
});

export const circleSlice = createSlice({
    name : "getSavedPost",
    initialState :{
        users : [],
        getBlockedUsers : [],
        NotifSettings : {},
        DeactiveDelete : {},
        UpdateNotification : {},
        loading : false,
        error :false,
    },
    reducers : {

    },
    extraReducers : builder => {
      //--------------------------getSavedPostsApi-------------------------------
      builder.addCase(getSavedPostsApi.pending, (state) => {
          state.loading       =  true;
      })
      builder.addCase(getSavedPostsApi.fulfilled, (state, action) => {
          state.loading       =  false;
          state.users    = action.payload;
      })
      builder.addCase(getSavedPostsApi.rejected, (state) => {
          state.loading = false;
          state.error = false
      })

      //--------------------------getBlockedUsersApi-------------------------------
      builder.addCase(getBlockedUsersApi.pending, (state) => {
          state.loading       =  true;
      })
      builder.addCase(getBlockedUsersApi.fulfilled, (state, action) => {
          state.loading       =  false;
          state.getBlockedUsers    = action.payload;
      })
      builder.addCase(getBlockedUsersApi.rejected, (state) => {
          state.loading = false;
          state.error = false
      })

      //--------------------------getNotificationApi-------------------------------
      builder.addCase(getNotificationApi.pending, (state) => {
          state.loading       =  true;
      })
      builder.addCase(getNotificationApi.fulfilled, (state, action) => {
          state.loading       =  false;
          state.NotifSettings   = action.payload;
      })
      builder.addCase(getNotificationApi.rejected, (state) => {
          state.loading = false;
          state.error = false
      })

      //--------------------------getUpdateNotificationApi-------------------------------
      builder.addCase(getUpdateNotificationApi.pending, (state) => {
          state.loading  =  true;
      })
      builder.addCase(getUpdateNotificationApi.fulfilled, (state, action) => {
          state.loading  =  false;
          state.UpdateNotification   = action.payload;
      })
      builder.addCase(getUpdateNotificationApi.rejected, (state) => {
          state.loading = false;
          state.error = false
      })

      //--------------------------getDeactiveDeleteApi-------------------------------
      builder.addCase(getDeactiveDeleteApi.pending, (state) => {
          state.loading       =  true;
      })
      builder.addCase(getDeactiveDeleteApi.fulfilled, (state, action) => {
          state.loading       =  false;
          state.DeactiveDelete   = action.payload;
      })
      builder.addCase(getDeactiveDeleteApi.rejected, (state) => {
          state.loading = false;
          state.error = false
      })

    },
});

export const { reducer : result } = circleSlice;