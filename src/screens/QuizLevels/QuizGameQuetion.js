import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,

} from "react-native";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { saveQuizAnswer } from "../../../redux/reducers/mcqSlice";
import { styles } from "./QuizLevelsStyles";
import { getLocalData } from "../../apis/GetLocalData";


const QuizGameQuetion = ({ mcqQue,singleMcq ,seconds,disabled,setDisabled}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const [score, setScore] = useState(0);
  const TotalMcq = parseInt(mcqQue.length);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  // const [progress, setProgress] = useState(new Animated.Value(0));
  //   const progressAnim = progress.interpolate({
  //       inputRange: [0, TotalMcq],
  //       outputRange: ['0%','100%']
  //   })

  const validateAnswer = async (ans) => {
    getLocalData("USER_INFO").then((res) => {
      const resData = res?.data
      fetchPostData(resData?.id, ans.qid, ans.opt_id, singleMcq);
    })

    if (currentQuestionIndex !== TotalMcq - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setDisabled(true);
      navigation.navigate("KnowYourHeart", {
        score: score,
        TotalMcq: TotalMcq,
        seconds:seconds
      });
    }
    if (ans.is_correct == 1) {
      setScore(score + 1);
    }
    //   Animated.timing(progress, {
    //     toValue: currentQuestionIndex+1,
    //     duration: 1000,
    //     useNativeDriver: false
    // }).start();
  };

  const fetchPostData = async (id, qid, opt_id, basic_id) => {
    const postDetails = {id: id,qid: qid,opt_id: opt_id,basic_id: basic_id};
    const result = await dispatch(saveQuizAnswer(postDetails));
  };

  const styling = {
    backgroundColor: "rgba(8, 1, 1, 0.05)",
    width: "100%",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  };

  const outOff = currentQuestionIndex / TotalMcq;


  // useEffect(() => {
  // if (isTop == false) {
  //   setIsOptionsDisabled(true);
  // }
  // }, [isTop]);
  return (
    <View style={{ marginTop: 10 }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Progress.Circle
            unfilledColor={"#046B74"}
            size={60}
            color={"#A7DFCC"}
            borderWidth={0}
            thickness={5}
            progress={outOff ? outOff : 0}
            style={styles.progressCircle}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                position: "absolute",
                fontFamily: "PlusJakartaSans-Bold",
              }}
            >
              {currentQuestionIndex}/{TotalMcq}
            </Text>
          </Progress.Circle>
          <Text style={styles.quizGamequestion}>
            {mcqQue[currentQuestionIndex]?.question_title}
          </Text>
        </View>
        {mcqQue[currentQuestionIndex]?.options.map((data, i) => {
          return (
            <TouchableOpacity
              key={i}
              disabled={disabled}
              onPress={() => validateAnswer(data)}
              style={styling}
            >
              <Text style={styles.ans}>{data.options}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
     </View>
  );
};

export default QuizGameQuetion;
