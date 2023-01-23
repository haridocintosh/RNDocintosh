import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const quizPostData = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getQuizData`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify({
                postType:0,
                role:data.role,
                circle_type:data.circle_type,
                city_id:data.city_id,
                assoc_id:data.assoc_id,
                pageCounter:600,
                id:data.userId 
            })
         });
        const result=  await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
})
export const GetQuizQuestions = createAsyncThunk("getQuizQuestions", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getQuizQuestions`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result=  await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
});

export const saveQuizAnswer = createAsyncThunk("saveQuizAnswer", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/saveQuizAnswer`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result=  await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
});

export const quizData = createSlice({
    name : "quiz",
    initialState :{
        postData : [],
        loading : false,
        error :false,
    },
    reducers : {},
    extraReducers :builder =>{

        //-------------------------quizPostData-----------------------------
        builder.addCase(quizPostData.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(quizPostData.fulfilled, (state, action) => {
            state.loading  =  false;
            state.postData = action.payload;
        })
        builder.addCase(quizPostData.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //-------------------------GetQuizQuestions-----------------------------
        builder.addCase(GetQuizQuestions.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(GetQuizQuestions.fulfilled, (state, action) => {
            state.loading  =  false;
            state.postData = action.payload;
        })
        builder.addCase(GetQuizQuestions.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

        //-------------------------saveQuizAnswer-----------------------------
        builder.addCase(saveQuizAnswer.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(saveQuizAnswer.fulfilled, (state, action) => {
            state.loading  =  false;
            state.postData = action.payload;
        })
        builder.addCase(saveQuizAnswer.rejected, (state) => {
            state.loading = false;
            state.error = false
        })

    }
});

export const { reducer : result } = quizData;