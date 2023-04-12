import { View, Text, SafeAreaView,TouchableOpacity,Image,ScrollView } from 'react-native'
import React, { useEffect,useState } from 'react'
import { styles } from './SentimetrixStyles';
import { useDispatch } from 'react-redux';
import { ProgressBar } from "react-native-paper";
import { SentimetrixGetByIdAPI, SentimetrixSaveAPI } from '../../../redux/reducers/SentimetrixSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getLocalData } from '../../apis/GetLocalData';
import TypoMcq from './TypoMcq';
import SurvayCheckBoxMcq from './SurvayCheckBoxMcq';
import RadioMcq from './RadioMcq';
import MultipleTypoMcq from './MultipleTypoMcq';
import { Button } from "react-native-elements";

const num1Content = `Great job! You've completed the first leg of the Sentimetrix. Keep it up! Keep answering those questions and stay on track.`;
const num2Content = `Congrats on making it to the second milestone. You're well on your way to achieving the final milestone.`;
const num3Content = `You did it! Congrats on completing the 3rd milestone. Thank you for your time! Please continue answering the final questions.`;

const SentimetrixMcq = ({navigation,route}) => {
    const [allMCQs, setAllMCQs] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [liftUpData, setLiftUpData] = useState(null);
    const [liftUpCheckData, setLiftUpCheckData] = useState();
    const [error, setError] = useState();
    const basicId = route?.params?.basicId;
    // const ImgPrevPath  = route?.params?.ImgPrevPath;
    const dispatch = useDispatch();
    
    const getAllMcq = () => {
      getLocalData("USER_INFO").then(async(res) =>{
        const resData = res?.data;
        const getList = await dispatch(SentimetrixGetByIdAPI({basicId:basicId,assoc_id:resData?.assoc_id}));
        setAllMCQs(getList?.payload)
      })
    }

    const forwardFunction = () => {
      setLiftUpData(null);
      if(currentQuestionIndex == 2){
        navigation.navigate("CongratulationPage", {ImgPath:currentQuestionIndex, Content:num1Content, prev:setCurrentQuestionIndex});
      }
      if(currentQuestionIndex == 7){
        navigation.navigate("CongratulationPage", {ImgPath:currentQuestionIndex, Content:num2Content, prev:setCurrentQuestionIndex });
      }
      if(currentQuestionIndex == 13){
        navigation.navigate("CongratulationPage", {ImgPath:currentQuestionIndex, Content:num3Content, prev:setCurrentQuestionIndex });
      }
    }

    const MCQsLength = parseInt(allMCQs?.length);
    // console.log("undefined", liftUpCheckData?.filter(d => d !== undefined).length);

    const prevMcq = async () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setLiftUpData(null);
      }
    }

    const nextMcq = async (basic_id, sqid, type) => {
      getLocalData("USER_INFO").then((res) =>{
        const resData = res?.data;
        if(type == 1){
          if (liftUpData) {
            forwardFunction();
            PosData(resData?.id, basic_id, "" , liftUpData.opt_id, "",liftUpData.qid)
            setLiftUpData(null);
            if (currentQuestionIndex !== MCQsLength - 2) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setError(null);
            } else {
              navigation.navigate("SentimetrixThankYouPage");
            }
          }else{
              setError("Please Select your answer");
          }
        }
        if(type == 2){
          if (liftUpCheckData && (liftUpCheckData.length != 0)) {
            forwardFunction();
            liftUpCheckData.map((data) =>
              PosData(resData?.id, basic_id, "" , data.opt_id, "",data.qid)
              // userId, basicId, subquestionId, optionId, ans, id
            );
            setLiftUpCheckData(null);
            if (currentQuestionIndex !== MCQsLength - 2) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setError(null);
            }else{
              navigation.navigate("SentimetrixThankYouPage");
            }
          }else{
              setError("Please Select your answer");
          }
        }
        if(type == 3){
          if (liftUpData) {
            forwardFunction();
            PosData(resData?.id, basic_id, sqid, "", liftUpData, "");
            setLiftUpData(null);
            if (currentQuestionIndex !== MCQsLength - 2) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setError(null);
            } else {
              navigation.navigate("SentimetrixThankYouPage");
            }
          }else{
              setError("Please type your answer");
          }
        }
        if(type == 5){
          if (liftUpCheckData && (liftUpCheckData?.filter(d => d.x_val !== undefined).length == 3)) {
            forwardFunction();
            liftUpCheckData.map((data) =>
              PosData(resData?.id, basic_id, sqid, "", data.main, "",data.key, data.x_val)
            );
            setLiftUpCheckData(null);
            if (currentQuestionIndex !== MCQsLength - 2) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setError(null);
            } else {
              navigation.navigate("SentimetrixThankYouPage");
            }
          }else{
              setError("Please type all 3 your answer");
          }
        }
      })
    }

    const PosData = async (userId, basicId, subquestionId, optionId, ans, id, key, x_val ) => {
      const postDetails = {userId, basicId, subquestionId, optionId, ans, id, key, x_val};
      // console.log("postDetails",postDetails);
      const result = await dispatch(SentimetrixSaveAPI(postDetails));
      // console.log("result",result);
    };

    useEffect(() => {
        navigation.setOptions({ title: `Sentimetrix`});
        getAllMcq();
    },[])

    // useEffect(() => {
    //   if(ImgPrevPath){
    //     setCurrentQuestionIndex(ImgPrevPath);
    //   }
    // },[])

  const outOff = currentQuestionIndex / allMCQs?.length;
  
  return (
    <SafeAreaView style={{ backgroundColor:"#ecf2f6",flex:1}}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}
      >
      <View style={{ padding: 15 }}>
        {(currentQuestionIndex < 8 && currentQuestionIndex > 2) &&
          <View>
            <Image  source={{uri:allMCQs[currentQuestionIndex]?.file_name}} style={styles.bannerStyle}/>
          </View>
        }
        <View style={styles.TopScoreContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.SurvayOutOff}>
              {currentQuestionIndex > 8
                ? currentQuestionIndex + 1
                : `0${currentQuestionIndex + 1}`}
            </Text>
            <Text style={styles.OutOffTotal}>/{allMCQs?.length}</Text>
          </View>
          {/* <Text>{allMCQs[currentQuestionIndex]?.type}</Text> */}
          <View style={styles.NexrPrevIcons}>
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => prevMcq()} >
              <AntDesign name="leftcircle" size={32} color="#2C8892" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => 
                nextMcq(
                  allMCQs[currentQuestionIndex]?.basicId, 
                  allMCQs[currentQuestionIndex]?.sqid,
                  allMCQs[currentQuestionIndex]?.type)}>
              <AntDesign name="rightcircle" size={32} color="#2C8892" />
            </TouchableOpacity>
          </View>
        </View>
        <ProgressBar
          style={styles.Progressbar}
          color={"#45B5C0"}
          progress={outOff ? outOff : 0}
        />
        <Text style={styles.SurvayQuestion}>
          {allMCQs[currentQuestionIndex]?.question.replace(/(<([^>]+)>)/gi, "")}
        </Text>
      </View>

      {allMCQs[currentQuestionIndex]?.type == 1 && (
        <RadioMcq
          setLiftUpData={setLiftUpData}
          // liftUpData={liftUpData}
          currentIndex={currentQuestionIndex}
          allMCQs={allMCQs}
          error={error}
          setError={setError}
        />
      )}

      {allMCQs[currentQuestionIndex]?.type == 2 && (
        <SurvayCheckBoxMcq
          setLiftUpData={setLiftUpCheckData}
          currentIndex={currentQuestionIndex}
          allMCQs={allMCQs}
          error={error}
          setError={setError}
        />
      )}

      {allMCQs[currentQuestionIndex]?.type == 3 && (
        <TypoMcq
          setLiftUpData={setLiftUpData}
          currentIndex={currentQuestionIndex}
          allMCQs={allMCQs}
          length={liftUpData}
          error={error}
        />
      )}
      {allMCQs[currentQuestionIndex]?.type == 5 && (
        <MultipleTypoMcq
          setLiftUpData={setLiftUpCheckData}
          // currentIndex={currentQuestionIndex}
          currentData={allMCQs[currentQuestionIndex]}
          liftUpData={liftUpCheckData}
          error={error}
        />
      )}
        <View style={styles.ButtonsContainer}>
          <TouchableOpacity style={styles.prevButton} onPress={() => prevMcq()}>
            <Text style={{ fontSize:16, color:"#2C8892", fontFamily: "PlusJakartaSans-Bold"}}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}onPress={() => 
                  nextMcq(
                    allMCQs[currentQuestionIndex]?.basicId, 
                    allMCQs[currentQuestionIndex]?.sqid,
                    allMCQs[currentQuestionIndex]?.type)}>
            <Text style={{ fontSize:16,color: "#fff", fontFamily: "PlusJakartaSans-Bold"}}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SentimetrixMcq