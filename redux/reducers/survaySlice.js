import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const survayList = createAsyncThunk("getSurveyList", async (data) => {
  try {
    const responce = await fetch(
      `${mainApi.baseUrl}/ApiController/getSurveyList`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const surveyDatalist = await responce.json();
    return surveyDatalist;
  } catch (e) {
    console.log(e);
  }
});

export const getSurveyQuestions = createAsyncThunk(
  "getSurveyQuestions",
  async (data) => {
    try {
      const responce = await fetch(
        `${mainApi.baseUrl}/ApiController/getSurveyQuestions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await responce.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
);
export const saveSurveyAnswers = createAsyncThunk(
  "saveSurveyAnswers",
  async (data) => {
    try {
      const responce = await fetch(
        `${mainApi.baseUrl}/ApiController/saveSurveyAnswers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await responce.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
);

export const surveyData = createSlice({
  name: "survey",
  initialState: {
    postData: [],
    survayList:[],
    saveSurveyData:[],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: builder => {
    //--------------------------survayList-------------------------------
    builder.addCase(survayList.pending, (state) => {
      state.loading       =  true;
    })
    builder.addCase(survayList.fulfilled, (state, action) => {
        state.loading       =  false;
        state.survayList    = action.payload;
    })
    builder.addCase(survayList.rejected, (state) => {
        state.loading = false;
        state.error = false
    })

    //--------------------------getSurveyQuestions-------------------------------
    builder.addCase(getSurveyQuestions.pending, (state) => {
      state.loading       =  true;
    })
    builder.addCase(getSurveyQuestions.fulfilled, (state, action) => {
        state.loading       =  false;
        state.postData    = action.payload;
    })
    builder.addCase(getSurveyQuestions.rejected, (state) => {
        state.loading = false;
        state.error = false
    })

    //--------------------------saveSurveyAnswers-------------------------------
    builder.addCase(saveSurveyAnswers.pending, (state) => {
      state.loading       =  true;
    })
    builder.addCase(saveSurveyAnswers.fulfilled, (state, action) => {
        state.loading       =  false;
        state.saveSurveyData    = action.payload;
    })
    builder.addCase(saveSurveyAnswers.rejected, (state) => {
        state.loading = false;
        state.error = false
    })
  },
});


export const { reducer: surveyDatalist } = surveyData;
