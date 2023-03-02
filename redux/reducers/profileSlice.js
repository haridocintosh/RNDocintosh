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

export const getWorkExpAPI = createAsyncThunk("getWorkExp", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/workexperiance`, {
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

export const getAwardAPI = createAsyncThunk("getAward", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/award`, {
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

export const getQualificationAPI = createAsyncThunk("getQualification", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/get_ug_qualification`, {
            method : 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body : JSON.stringify(data)
        });
        const userResult =  await responce.json();
        return userResult;
    }
    catch(e){
       console.log(e);
    }
})

export const updateMobileNumber = createAsyncThunk("updateMobilenumber", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/UpdateMobileNo`, {
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

export const updateEmailID = createAsyncThunk("updateEmailID", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/Update_Email_ID`, {
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


export const userInfo = createAsyncThunk("userInfo", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/user_profileReact`, {
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

    export const EditProfileAwardAPI = createAsyncThunk("editAward", async(data)=>{
        try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/EditProfileAward`, {
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

    export const Edit_ProfileOTP = createAsyncThunk("Edit_Profile_OTP", async(data)=>{
        try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/EditProfileOTP`, {
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
        workExp     : {},
        award       : {},
        editAward   : {},
        getQualification   : {},
        updateData  : {},
        user_data   : {},
        updateEmail : {}
    },
    reducers : {
      
    },

    extraReducers : builder =>{
        //-------------------------userInfo-----------------------------
        builder.addCase(userInfo.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(userInfo.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.user_data    =  action.payload;
        })
        builder.addCase(userInfo.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })


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
    //===========================addworkexperianceAPI=============================
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

    //===========================updateMobileNumber=============================

        builder.addCase(updateMobileNumber.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(updateMobileNumber.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.updateData    =  action.payload;
        })
        builder.addCase(updateMobileNumber.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })

    //===========================updateEmailID=============================

        builder.addCase(updateEmailID.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(updateEmailID.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.updateEmail    =  action.payload;
        })
        builder.addCase(updateEmailID.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })

    //===========================getWorkExpAPI=============================
        builder.addCase(getWorkExpAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getWorkExpAPI.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.workExp      =  action.payload;
        })
        builder.addCase(getWorkExpAPI.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })

   //===========================getAwardAPI=============================
   
        builder.addCase(getAwardAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getAwardAPI.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.award      =  action.payload;
        })
        builder.addCase(getAwardAPI.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })

   //===========================EditProfileAwardAPI=============================
   
        builder.addCase(EditProfileAwardAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(EditProfileAwardAPI.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.editAward      =  action.payload;
        })
        builder.addCase(EditProfileAwardAPI.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })

    //===================Edit_ProfileOTP===============================

        builder.addCase(Edit_ProfileOTP.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(Edit_ProfileOTP.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.editAward      =  action.payload;
        })
        builder.addCase(Edit_ProfileOTP.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })

    //===================getQualificationAPI===============================

        builder.addCase(getQualificationAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(getQualificationAPI.fulfilled, (state, action) => {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.getQualification      =  action.payload;
        })
        builder.addCase(getQualificationAPI.rejected, (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        })
    }
})  