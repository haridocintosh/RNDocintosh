import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";
 

export const userLogin = createAsyncThunk("user/login", async(loginData)=>{
    console.log('paramter', loginData);
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/login`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(loginData)
        });
        
        const userresult=  await responce.json();
        // console.log('loginResult', userresult);
        return userresult
    }
    catch(e){
        // console.log("catchBlock");
       console.log(e);
    }
})

export const userRegisterOne = createAsyncThunk("user/register", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/userCreate1`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})

export const userRegisterSecond = createAsyncThunk("user/regSecond", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/updateReg`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})

export const checkEmail = createAsyncThunk("user/email_check", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/email_check`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const checkMobile = createAsyncThunk("user/check_mobile", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/mobile_check`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const resendOTP = createAsyncThunk("user/resendOTP", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/loginwithotp`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        return result
    }catch(e){
       console.log(e);
    }
})


export const forgotverifyOtp = createAsyncThunk("user/forgotverifyOtp", async(regData)=>
{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/verifyotp`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        return result
    }catch(e){
       console.log(e);
    }
})

export const loginAuth = createSlice({
    name : "auth",
    initialState : {
        userInfo    : {},
        userName    : "test user",
        loading     : false,
        isLoggedIn  : false,
        error       : false,
        usertoken   : null,
        registerData: {},
        registerTwoData : {}

    },
    reducers : {
        logout : (currentState)=>{
            currentState.loading    = false;
            currentState.usertoken  = null;
            currentState.loading    = false;
        },
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

        //-------------------------userRegisterOne-----------------------------
        builder.addCase(userRegisterOne.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(userRegisterOne.fulfilled, (state, action) => {
            state.loading       = false,
            state.isLoggedIn    = true
            state.registerData  = action.payload;
        })
        builder.addCase(userRegisterOne.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })


        //-------------------------userRegisterSecond-----------------------------
        builder.addCase(userRegisterSecond.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(userRegisterSecond.fulfilled, (state, action) => {
            state.loading       = false,
            state.isLoggedIn    = true
            state.registerTwoData  = action.payload;
        })
        builder.addCase(userRegisterSecond.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })

    }
});


export const { reducer : userresult} = loginAuth;
export const { logout } = loginAuth.actions
