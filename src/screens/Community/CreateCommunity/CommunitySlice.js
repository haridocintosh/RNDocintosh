import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../../apis/constant";


export const GetSpecialityWiseUserAPI = createAsyncThunk("specialityWiseUser", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/specialityWiseUser`, {
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

export const specialityUser = createSlice({
    name : "specialityUser",
    initialState :{
        specialityUser   : {},
        loading     : false,
        error       : false,
    },
    reducers : {},

    extraReducers: builder => {
        //-------------------------GetSpecialityWiseUserAPI----------------------------------
        builder.addCase(GetSpecialityWiseUserAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(GetSpecialityWiseUserAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.specialityUser    = action.payload;
        })
        builder.addCase(GetSpecialityWiseUserAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })
    },
});


export const { reducer : savePostResult } = specialityUser;