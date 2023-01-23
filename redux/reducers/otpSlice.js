import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const doctorOtp = createAsyncThunk("doctor/otp", async(doctorOtp)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/verifyregotp`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(doctorOtp)
        });
        const result =  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const userIdupdate = createAsyncThunk("user/otp", async(userUpdate)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/user_email_mobile_update`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(userUpdate)
        });
        const result =  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const otpSlice = createSlice({
    name : "AllOTP",
    initialState :{
        doctorOtp   : {},
        loading     : false,
        error       : false,
    },
    reducers : {

    },
    extraReducers : builder =>{
        //-------------------------doctorOtp-----------------------------
        builder.addCase(doctorOtp.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(doctorOtp.fulfilled, (state, action) => {
            state.loading  =  false;
            state.doctorOtp = action.payload;
        })
        builder.addCase(doctorOtp.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

    }
});

export default otpSlice.reducer