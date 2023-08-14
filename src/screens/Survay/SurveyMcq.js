import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getSurveyQuestions,
  saveSurveyAnswers,
} from "../../../redux/reducers/survaySlice";
import RadioMcq from "./RadioMcq";
import TypoMcq from "./TypoMcq";
import SurvayCheckBoxMcq from "./SurvayCheckBoxMcq";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ProgressBar } from "react-native-paper";
import { styles } from "./SurvayStyle";
import { getLocalData } from "../../apis/GetLocalData";


const SurveyMcq = ({ route }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [liftUpData, setLiftUpData] = useState(null);
  const [liftUpCheckData, setLiftUpCheckData] = useState([]);
  const [error, setError] = useState();
  const { surveyid } = route.params;

  const postData = useSelector((state) => state.surveyGetList.postData?.questions);
  console.log("postData",postData);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const asyncFetchDailyData = async () => {
    navigation.setOptions({ title: `Surveys`});
    getLocalData("USER_INFO").then( async (res) =>{
      const resData = res?.data;
      const postDetails = {surveyid: surveyid, id: resData?.id};
      const result = await dispatch(getSurveyQuestions(postDetails));
    })
  };

  const MCQsLength = parseInt(postData?.length);
  //-----------------save survay ans--------------------------
  

  const nextMcq = async (basic_id, qid, Q_type) => {
    getLocalData("USER_INFO").then((res) =>{
      const resData = res?.data;

      if(Q_type == 1){
        if (liftUpData) {
          PosData(resData?.id, basic_id, qid, liftUpData, resData?.profileimage);
          setLiftUpData(null);
          if (currentQuestionIndex !== MCQsLength - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setError(null)
          } else {
            navigation.navigate("ThankYouPage", { surveyid: surveyid });
          }
        }else{
            setError("Please Select your answer");
        }
      }
      
      if(Q_type == 2){
        if (liftUpCheckData && (liftUpCheckData.length != 0)) {
          liftUpCheckData.map((data) =>
            PosData(resData?.id, basic_id, qid, data, resData?.profileimage)
          );
          setLiftUpCheckData(null);
          if (currentQuestionIndex !== MCQsLength - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setError(null)
          } else {
            navigation.navigate("ThankYouPage", { surveyid: surveyid });
          }
        }else{
            setError("Please Select your answer");
        }
      }

      if(Q_type == 3){
        if (liftUpData) {
          PosData(resData?.id, basic_id, qid, liftUpData, resData?.profileimage);
          setLiftUpData(null);
          if (currentQuestionIndex !== MCQsLength - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setError(null)
          } else {
            navigation.navigate("ThankYouPage", { surveyid: surveyid });
          }
        }else{
            setError("Please type your answer");
        }
      }

    })
  };

  const PosData = async (id, basic_id, qid, opt_id, profileimage) => {
    const postDetails = {id: id, basic_id: basic_id, qid: qid, opt_id: opt_id,profileimage: profileimage};
    const result = await dispatch(saveSurveyAnswers(postDetails));
  };

  const prevMcq = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setLiftUpData(null);
    }
  };



  useEffect(() => {
    asyncFetchDailyData();
  }, []);

  useEffect(() => {
    if(liftUpData){
      setError(null);
    }
  }, [liftUpData,liftUpCheckData]);

  const outOff = currentQuestionIndex / postData?.length;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6" }}>
      <View style={{ padding: 15 }}>
        <View style={styles.TopScoreContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.SurvayOutOff}>
              {currentQuestionIndex > 9
                ? currentQuestionIndex + 1
                : `0${currentQuestionIndex + 1}`}
            </Text>
            <Text style={styles.OutOffTotal}>/{postData?.length}</Text>
          </View>
          <View style={styles.NexrPrevIcons}>
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => prevMcq()} >
              <AntDesign name="leftcircle" size={32} color="#2C8892" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => 
                nextMcq(
                  postData?.[currentQuestionIndex]?.basic_id, 
                  postData?.[currentQuestionIndex]?.qid,
                  postData?.[currentQuestionIndex]?.question_type)} >
              <AntDesign name="rightcircle" size={32} color="#2C8892" />
            </TouchableOpacity>
          </View>
        </View>

        {/* score bar */}
        <ProgressBar
          style={styles.Progressbar}
          color={"#45B5C0"}
          progress={outOff ? outOff : 0}
        />
        <Text style={styles.SurvayQuestion}>
          {postData?.[currentQuestionIndex]?.question_title}
        </Text>
      </View>

      {postData?.[currentQuestionIndex]?.question_type == 1 && (
        <RadioMcq
          setLiftUpData={setLiftUpData}
          liftUpData={liftUpData}
          currentIndex={currentQuestionIndex}
          allMCQs={postData}
          error={error}
        />
      )}

      {postData?.[currentQuestionIndex]?.question_type == 2 && (
        <SurvayCheckBoxMcq
          setLiftUpData={setLiftUpCheckData}
          currentIndex={currentQuestionIndex}
          allMCQs={postData}
          error={error}
          setError={setError}
        />
      )}

      {postData?.[currentQuestionIndex]?.question_type == 3 && (
        <TypoMcq
          setLiftUpData={setLiftUpData}
          currentIndex={currentQuestionIndex}
          allMCQs={postData}
          length={liftUpData}
          error={error}
        />
      )}
      
    </SafeAreaView>
  );
};

export default SurveyMcq;
