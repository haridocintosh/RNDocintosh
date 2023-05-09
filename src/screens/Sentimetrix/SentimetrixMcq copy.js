import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import { styles } from './SentimetrixStyles';
import { useDispatch } from 'react-redux';
import { ProgressBar } from "react-native-paper";
import { SentimetrixGetByIdAPI, SentimetrixSaveAPI } from '../../../redux/reducers/SentimetrixSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getLocalData } from '../../apis/GetLocalData';
import TypoMcq from '../Survay/TypoMcq';
import SurvayCheckBoxMcq from '../Survay/SurvayCheckBoxMcq';
import RadioMcq from '../Survay/RadioMcq';
import MultipleTypoMcq from './MultipleTypoMcq';



const SentimetrixMcq = ({route}) => {
    const [allMCQs, setAllMCQs] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [liftUpData, setLiftUpData] = useState(null);
    const [liftUpCheckData, setLiftUpCheckData] = useState([]);
    const [error, setError] = useState();
    const {basicId} = route?.params;

    const dispatch = useDispatch();

    const getAllMcq = () => {
      getLocalData("USER_INFO").then(async(res) =>{
        const resData = res?.data;
        console.log("resData",resData.assoc_id);
        const getList = await dispatch(SentimetrixGetByIdAPI({basicId:basicId,assoc_id:resData?.assoc_id}));
        console.log(getList?.payload);
        setAllMCQs(getList?.payload)
      })
        
    }

    const MCQsLength = parseInt(allMCQs?.length);

    const prevMcq = async () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setLiftUpData(null);
      }
    }
    const nextMcq = async (basicId, sqid, type) => {
      getLocalData("USER_INFO").then((res) =>{
        const resData = res?.data;
        // console.log("resData",resData);
        if(type == 1){
          if (liftUpData) {
            PosData(resData?.id, basicId, sqid, liftUpData);
            setLiftUpData(null);
            if (currentQuestionIndex !== MCQsLength - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setError(null)
            } else {
              // navigation.navigate("ThankYouPage", { surveyid: surveyid });
            }
          }else{
              setError("Please Select your answer");
          }
        }
        if(type == 2){
          if (liftUpCheckData && (liftUpCheckData.length != 0)) {
            liftUpCheckData.map((data) =>
              PosData(resData?.id, basicId, sqid, data)
            );
            setLiftUpCheckData(null);
            if (currentQuestionIndex !== MCQsLength - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setError(null)
            } else {
              // navigation.navigate("ThankYouPage", { surveyid: surveyid });
            }
          }else{
              setError("Please Select your answer");
          }
        }
        if(type == 3){
          if (liftUpData) {
            PosData(resData?.id, basicId, sqid, liftUpData );
            
            setLiftUpData(null);
            if (currentQuestionIndex !== MCQsLength - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setError(null)
            } else {
              // navigation.navigate("ThankYouPage", { surveyid: surveyid });
            }
          }else{
            setError("Please type your answer");
        }
        }
        if(type == 5){
          if (liftUpData) {
            PosData(resData?.id, basicId, sqid, liftUpData );
            
            setLiftUpData(null);
            if (currentQuestionIndex !== MCQsLength - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setError(null)
            } else {
              // navigation.navigate("ThankYouPage", { surveyid: surveyid });
            }
          }else{
            setError("Please type your answer");
        }
        }
      })
    }

    const PosData = async (id, basic_id, sqid, opt_id) => {
    const postDetails = {userId: id, basicId: basic_id, subquestionId: sqid, optionId: opt_id, ans: ""};
      // console.log("postDetails",postDetails);
      const result = await dispatch(SentimetrixSaveAPI(postDetails));
      // console.log("result",result);
    };

    useEffect(() => {
        getAllMcq()
    },[])

  const outOff = currentQuestionIndex / allMCQs?.length;
  
  return (
    <SafeAreaView style={{ backgroundColor:"#ecf2f6",flex:1}}>
      <View style={{ padding: 15 }}>
        <View style={styles.TopScoreContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.SurvayOutOff}>
              {currentQuestionIndex > 9
                ? currentQuestionIndex + 1
                : `0${currentQuestionIndex + 1}`}
            </Text>
            <Text style={styles.OutOffTotal}>/{allMCQs?.length}</Text>
          </View>
          <Text>{allMCQs[currentQuestionIndex]?.type}</Text>
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
          {allMCQs[currentQuestionIndex]?.question}
        </Text>
      </View>

      {allMCQs[currentQuestionIndex]?.type == 1 && (
        <RadioMcq
          setLiftUpData={setLiftUpData}
          liftUpData={liftUpData}
          currentIndex={currentQuestionIndex}
          allMCQs={allMCQs}
          error={error}
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
          setLiftUpData={setLiftUpData}
          currentIndex={currentQuestionIndex}
          allMCQs={allMCQs}
          length={liftUpData}
          error={error}
        />
      )}
    </SafeAreaView>
  )
}

export default SentimetrixMcq