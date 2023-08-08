import { configureStore } from "@reduxjs/toolkit";
import { allSpeciality } from "./reducers/getSpeciality";
import addLocal from "./reducers/loginAuth";
import  otpSlice  from "./reducers/otpSlice";
import { result } from "./reducers/forgotPass";
import  surveyData  from "./reducers/survaySlice";
import CommunityPD  from "../src/screens/Community/JoinCommunitySlice";
import PostData  from "./reducers/postData";


const store = configureStore({
    reducer : {
        myspeciality : allSpeciality,
        forgotpass:result,
        surveyGetList : surveyData,
        myOtp: otpSlice,
        localData: addLocal,
        communityData: CommunityPD,
        homeData: PostData
    }
})

export default store;
