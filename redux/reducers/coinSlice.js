import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const coinTransfer = createAsyncThunk("cointransfer", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/cointransfer`, {
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

export const coinSlice = createSlice({
    name : "Coin",
    initialState :{
        coinResult   : {},
        loading     : false,
        error       : false,
    },
    reducers : {
    },
    extraReducers :builder=> {
        builder.addCase(coinTransfer.pending, (state) => {
             state.loading       =  true;
        })
        builder.addCase(coinTransfer.fulfilled, (state, action) => {
            state.loading       =  false;
            state.coinResult    = action.payload;
        })
        builder.addCase(coinTransfer.rejected, (state) => {
            state.loading       = false;
            state.error         = true
        })
    }
});

export const { reducer : result } = coinSlice;