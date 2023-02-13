import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const profileSpeciality = createAsyncThunk("profile/speciality", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/login`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        const userresult=  await responce.json();
        return userresult
    }
    catch(e){
       console.log(e);
    }
})
export const addworkexperianceAPI = createAsyncThunk("addWorkexp", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/addworkexperiance`, {
            method : 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body : JSON.stringify(data)
        });
        const userResult=  await responce.json();
        return userResult
    }
    catch(e){
       console.log(e);
    }
})

export const profileSlice= createSlice({
    name : 'Profile',
    initialState : {
        loading     : false,
        isLoggedIn  : false,
        error       : false,
        userInfo    : {},
        workExp    : {},
        registerData: {},
        registerTwoData : {}

    },
    reducers : {
      
    },

    extraReducers : builder =>{
        //-------------------------userLogin-----------------------------
        builder.addCase(userLogin.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.usertoken     = 'userLogin'
            state.userInfo      =  action.payload;
        })
        builder.addCase(userLogin.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })

        builder.addCase(addworkexperianceAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(addworkexperianceAPI.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.workExp      =  action.payload;
        })
        builder.addCase(addworkexperianceAPI.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })
    }


})  