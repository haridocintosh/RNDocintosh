import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect,useState,TouchableOpacity } from 'react'
import { styles } from './SentimetrixStyles';
import { useDispatch } from 'react-redux';
import { ProgressBar } from "react-native-paper";
import { SentimetrixGetByIdAPI } from '../../../redux/reducers/SentimetrixSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';


const SentimetrixMcq = ({route}) => {
    const [allMCQs, setAllMCQs] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [liftUpData, setLiftUpData] = useState(null);
    const [liftUpCheckData, setLiftUpCheckData] = useState([]);
    const [error, setError] = useState();
    const {basicId} = route?.params;
    console.log(basicId);

    const dispatch = useDispatch();

    const getAllMcq = async () => {
        const getList = await dispatch(SentimetrixGetByIdAPI({basicId:basicId}));
        console.log("getList",getList?.payload);
        // setListData()
        setAllMCQs(getList?.payload)
    }
    const prevMcq = async () => {
    }

    useEffect(() => {
        getAllMcq()
    },[])

  const outOff = currentQuestionIndex / allMCQs.length;
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
            <Text style={styles.OutOffTotal}>/{allMCQs.length}</Text>
          </View>
          <View style={styles.NexrPrevIcons}>
            {/* <TouchableOpacity style={{ marginRight: 15 }} onPress={() => prevMcq()} >
              <AntDesign name="leftcircle" size={32} color="#2C8892" />
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => 
                nextMcq(
                  allMCQs[currentQuestionIndex]?.basic_id, 
                  allMCQs[currentQuestionIndex]?.qid,
                  allMCQs[currentQuestionIndex]?.question_type)} >
              <AntDesign name="rightcircle" size={32} color="#2C8892" />
            </TouchableOpacity> */}
          </View>
        </View>
        <ProgressBar
          style={styles.Progressbar}
          color={"#45B5C0"}
          progress={outOff ? outOff : 0}
        />
        <Text style={styles.SurvayQuestion}>
          {allMCQs[currentQuestionIndex]?.question_title}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SentimetrixMcq