import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../../../apis/constant";

export const resetPasswordAPI = createAsyncThunk("resetPassword", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/changePassword`, {
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
})
