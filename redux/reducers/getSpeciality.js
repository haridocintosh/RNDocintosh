import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant"

export const getAllSpeciality = createAsyncThunk("getAllSpeciality", async ()=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/getSpecialities`);
    const allSpeciality = await response.json();
    return allSpeciality;
})

export const getAllUniversity = createAsyncThunk("getAllUniversity", async ()=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/getUniversity`);
    const allUniversity = await response.json();
    return allUniversity;
})

export const getcollegelist = createAsyncThunk("getcollegelist", async (university_id)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/regiUniversityChange`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(university_id)
    });
    const getcollegelist = await response.json();
    return getcollegelist;
})

export const getAllState = createAsyncThunk("getAllState", async ()=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/getStates`);
    const allState = await response.json();
    return allState;
})

export const getSpeciality = createSlice({
    name : "speciality",
    initialState :{
        speciality : [],
        loading : false,
        error :false,
    },
    reducers : {
    },
    // extraReducers :{
    //    [getAllSpeciality.pending] : (state)=>
    //     {
    //         state.loading =  true;
    //     }, 
    //     [getAllSpeciality.fulfilled] : (state, action)=>
    //     {   
    //         state.loading =  false;
    //         state.speciality = action.payload;
    //      }, 
    //      [getAllSpeciality.rejected] : (state)=>
    //      {
    //         state.loading = false;
    //         state.error = true
    //       }, 
    // }
});

export const { reducer : allSpeciality } = getSpeciality;
