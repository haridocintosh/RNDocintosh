import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant"

export const getInterestSpl = createAsyncThunk("user/getInterestSplt", async(data)=>{
  try{
     const responce = await fetch(`${mainApi.baseUrl}/ApiController/getInterestSpecialities`, {
          method : 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body : JSON.stringify(data)
      });
      const result=  await responce.json();
    //  console.log('interestAPI',result);
      return result
  }
  catch(e){
     console.log(e);
  }
})

export const addCircle = createAsyncThunk("user/addCircle", async(data)=>{
  try{
     const responce = await fetch(`${mainApi.baseUrl}/ApiController/addCircle`, {
          method : 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body : JSON.stringify(data)
      });
      const result=  await responce.json();
      console.log('slice',result);
      return result
  }
  catch(e){
     console.log(e);
  }
})

export const removeCircle = createAsyncThunk("user/removeCircle", async(data)=>{
  try{
     const responce = await fetch(`${mainApi.baseUrl}/ApiController/removeCircle`, {
          method : 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body : JSON.stringify(data)
      });
      const result=  await responce.json();
      console.log('removeSlice',result);
      return result
  }
  catch(e){
     console.log(e);
  }
})

export const circleSlice = createSlice({
    name : "addCircle",
    initialState :{
        users : [],
        loading : false,
        error :false,
    },
    reducers : {

    },
    extraReducers :builder => {
//---------------------------------getInterestSpl-----------------------------
      builder.addCase(getInterestSpl.pending, (state) => {
        state.loading       =  true;
      })
      builder.addCase(getInterestSpl.fulfilled, (state, action) => {
          state.loading       =  false;
          state.users    = action.payload;
      })
      builder.addCase(getInterestSpl.rejected, (state) => {
          state.loading       = false;
          state.error         = true
      })

//---------------------------------addCircle-----------------------------

      builder.addCase(addCircle.pending, (state) => {
        state.loading       =  true;
      })
      builder.addCase(addCircle.fulfilled, (state, action) => {
          state.loading       =  false;
          state.users    = action.payload;
      })
      builder.addCase(addCircle.rejected, (state) => {
          state.loading       = false;
          state.error         = true
      })
      
//---------------------------------removeCircle-----------------------------

      builder.addCase(removeCircle.pending, (state) => {
        state.loading       =  true;
      })
      builder.addCase(removeCircle.fulfilled, (state, action) => {
          state.loading       =  false;
          state.users    = action.payload;
      })
      builder.addCase(removeCircle.rejected, (state) => {
          state.loading       = false;
          state.error         = true
      })
    }
});

export const { reducer : result } = circleSlice;