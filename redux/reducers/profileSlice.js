import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const profileSpeciality = createAsyncThunk("profile/speciality", async(data)=>{
    console.log('paramter', data);
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

export const profileSlice= createSlice({
    name : 'Profile',
    initialState : {
        loading     : false,
        isLoggedIn  : false,
        error       : false,
        userInfo    : {},
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
    }


})  