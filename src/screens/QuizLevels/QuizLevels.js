import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image
} from "react-native";
import { styles } from "./QuizLevelsStyles";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { quizPostData } from "../../../redux/reducers/mcqSlice";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getLocalData } from "../../apis/GetLocalData";
import LinearGradient from 'react-native-linear-gradient';


const QuizLevels = () => {
  const dispatch = useDispatch();
  // const [toggle, setToggle] = useState(false);
  const [quizData, setQuizData] = useState([]);
  // const [topicId, setTopicId] = useState(null);
  const [loader, setLoader] = useState(true);
  const navigation = useNavigation();

  const McqDataHandle = (basic_id,title) => {
    navigation.navigate("QuizGame", {basicId: basic_id,title: title});
  };

  // const goToNext = () => {
  //   navigation.navigate("QuizGame", {
  //     basicId: basicId,
  //     title: filterId[0].title,
  //   });
  //   //
  //   toggle(false);
  // };

  const asyncFetchDailyData = async () => {
    navigation.setOptions({ title: 'Quiz Levels' });
    getLocalData("USER_INFO").then( async (res) => {
      const resData = res?.data;
      const postDetails = {role:resData?.role, city_id:resData?.city_id,assoc_id:resData?.assoc_id,circle_type:resData?.circle_type,userId:resData?.id};
       const result = await dispatch(quizPostData(postDetails));
      setQuizData(result.payload);
      setLoader(false);
    });
  };

  useEffect(() => {
    asyncFetchDailyData();
  }, []);

  if (loader) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#2C8892"} />
      </View>
    );
  }
 
  
  return (
    <View style={styles.QuizLevelcontainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}>
        {/* <ActivityIndicator color={"#2C8892"}/> */}

        {quizData &&
          quizData?.map((user, index) => {
            return (
              <TouchableOpacity
                onPress={() => McqDataHandle(user?.basic_id, user?.title)}
                key={index}
              >
                <LinearGradient
                  colors={["#fff", "#fff"]}
                  start={{ x: 0.0, y: 1.0 }}
                  end={{ x: 1.0, y: 1.0 }}
                  style={styles.cartGradiant}
                >
                  <Text style={styles.cartText}>{user.title}</Text>
                  <View style={styles.ListsMcqPlay}>
                    <View style={styles.doccoin}>
                        <View style={styles.d}>
                          <Image
                            source={require("../../assets/dr-icon/dcoin.png")}
                            style={{ width: 20, height: 20, marginRight: 5 }}
                          />
                          <Text>25</Text>
                        </View>
                      </View>
                    <AntDesign name="play" size={26}/>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default QuizLevels
