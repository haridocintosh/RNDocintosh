import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const QlifnCourseAPI = createAsyncThunk("QlifnCourse", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/course_list`, {
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
export const QlifnCollegeAPI = createAsyncThunk("QlifnCollege", async ()=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/college_list`, {
            method : 'GET',
            headers:{
                'Content-Type': 'application/json'
            },
         });
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
});

export const AddQualificationAPI = createAsyncThunk("addQualification", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/addqualification`, {
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

export const qualification = createSlice({
    name : "qualification",
    initialState :{
        courseData   : {},
        collegeData  : {},
        loading     : false,
        error       : false,
    },
    reducers : {},

    extraReducers: builder => {
        //-------------------------QlifnCourseAPI----------------------------------
        builder.addCase(QlifnCourseAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(QlifnCourseAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.courseData    = action.payload;
        })
        builder.addCase(QlifnCourseAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------QlifnCollegeAPI----------------------------------
        builder.addCase(QlifnCollegeAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(QlifnCollegeAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.collegeData    = action.payload;
        })
        builder.addCase(QlifnCollegeAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        //-------------------------AddQualificationAPI----------------------------------
        builder.addCase(AddQualificationAPI.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(AddQualificationAPI.fulfilled, (state, action) => {
            state.loading       =  false;
            state.collegeData    = action.payload;
        })
        builder.addCase(AddQualificationAPI.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })

        
    },
});


export const { reducer : courseData } = qualification;