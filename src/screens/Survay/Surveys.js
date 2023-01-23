import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import Svg, { Path } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { survayList } from "../../../redux/reducers/survaySlice";
import moment from "moment";
import SweetAlert from "../SweetAlert/SweetAlert";
import { styles } from "./SurvayStyle";
import { getLocalData } from "../../apis/GetLocalData";

const Surveys = ({ route,navigation }) => {
  const [survayData, setSurvayData] = useState([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();

  const recall = route?.params?.surveyid;

  const asyncFetchDailyData = async () => {
    navigation.setOptions({ title: `Surveys`});
    getLocalData("USER_INFO").then(async (res)=>{
      const resData = res?.data;
      const postDetails = {speciality_id: null,city_id: null,assoc_id: resData?.assoc_id,earntype: 0,id: resData?.id};
      const result = await dispatch(survayList(postDetails));
      setSurvayData(result.payload);
      setLoader(false);
    })
  };

  const handleCardEntry = (value) => {
    // == 'No'
    if (value.isSolved) {
      navigation.navigate("SurveyMcq", { surveyid: value.surveyid });
    } else {
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000);
    }
  };

  useEffect(() => {
    asyncFetchDailyData();
  }, [recall]);

  if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
  }
  
  return (
    <SafeAreaView style={{ backgroundColor: "#E6E6E6", flex: 1 }}>
      {isAlertVisible && <SweetAlert />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}
      >
        <View style={{ padding: 10 }}>
          {survayData?.surveylist.map((data, i) => {
              return (
                <View style={{ marginBottom: 10 }} key={i}>
                  <Card
                    style={styles.CartStyle}
                    onPress={() => handleCardEntry(data)}
                  >
                    <View style={styles.ExpiringContainer}>
                      <View
                        style={[
                          styles.incompletebg,
                          {
                            backgroundColor:
                              data?.isSolved == "No" ? "#FFD6D6" : "#B0DBCC",
                          },
                        ]}
                      >
                        <Text style={styles.completeText}>
                          {data?.isSolved == "No" ? "Incomplete" : "Complete"}
                        </Text>
                      </View>
                      <View style={styles.ExpiringContainer}>
                        <MaterialCommunityIcons
                          name="clock-time-five-outline"
                          size={20}
                          color="red"
                        />
                        <Text style={styles.ExpiringText}>
                        Expiring on{" "}
                          {moment(data?.senddate, [
                            "DD-MM-YYYY",
                            "MM-DD-YYYY",
                          ]).format("DD MMMM")}
                        </Text>
                        {/* 27 August  */}
                      </View>
                    </View>
                    <Text style={styles.survatTitle}>{data.surveyname}</Text>

                    <View style={styles.miniContainer}>
                      <Svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path
                          d="M14.592 0H2.78397C1.24889 0 0 1.24903 0 2.78397V14.592C0 16.127 1.24903 17.3759 2.78397 17.3759H14.592C16.127 17.3759 17.3759 16.1269 17.3759 14.592V2.78397C17.3759 1.24889 16.127 0 14.592 0ZM8.68008 13.7438C8.11893 13.7438 7.66395 13.2889 7.66395 12.7276C7.66395 12.1665 8.11879 11.7115 8.68008 11.7115C9.24123 11.7115 9.69621 12.1664 9.69621 12.7276C9.69607 13.2889 9.24123 13.7438 8.68008 13.7438ZM10.8627 8.64069C10.2852 9.07059 9.66792 9.4199 9.54713 10.2114V10.7221H7.73482V10.1181C7.81504 8.94953 8.36551 8.4264 8.90256 8.01017C9.4261 7.59432 9.88251 7.28575 9.88251 6.5604C9.88251 5.74128 9.45315 5.3521 8.74183 5.3521C7.77552 5.3521 7.37266 6.14417 7.35888 7.09731L5.38557 7.09745C5.42601 5.17786 6.68787 3.78164 8.64768 3.78164C11.185 3.78164 11.9908 5.33897 11.9908 6.3721C11.9907 7.67454 11.4402 8.19822 10.8627 8.64072L10.8627 8.64069Z"
                          fill="#45B5C0"
                        />
                      </Svg>
                      <Text style={styles.HowManyQuetions}>{data.totalques} Questions</Text>
                      <Text style={styles.deviderLine}> | </Text>
                      <Svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.384 7.98099H7.29835C3.66532 8.00497 0.687851 11.0723 0.500482 14.9386L0.500657 14.9384C0.493461 15.0848 0.54559 15.2278 0.644757 15.3339C0.743923 15.44 0.881354 15.5 1.0251 15.5H13.6638C13.8063 15.4984 13.9422 15.4375 14.0399 15.3316C14.1375 15.2257 14.1886 15.0837 14.1814 14.9384C13.9945 11.072 11.0168 8.00509 7.38351 7.98081L7.384 7.98099ZM11.1545 7.9563C12.1504 8.55168 13.0124 9.35378 13.6846 10.3105C14.3568 11.2674 14.8244 12.3576 15.0568 13.5104H20.9749C21.1186 13.5104 21.2561 13.4505 21.3552 13.3444C21.4544 13.2382 21.5065 13.0953 21.4993 12.9489C21.3245 9.33358 18.5289 6.46862 15.1265 6.46862C13.6718 6.47094 12.2647 6.99781 11.1544 7.95612L11.1545 7.9563ZM7.34154 0.9973C6.50364 0.9973 5.69993 1.3366 5.10735 1.94077C4.51496 2.54495 4.18201 3.36418 4.18201 4.21855C4.18201 5.07287 4.51497 5.89233 5.10753 6.49651C5.69993 7.10069 6.50359 7.43998 7.34154 7.43998C8.17945 7.43998 8.98316 7.1005 9.57555 6.49651C10.1681 5.89233 10.5011 5.07292 10.5011 4.21855C10.5006 3.36437 10.1676 2.54514 9.57524 1.94114C8.98289 1.33714 8.17936 0.997667 7.34159 0.9973H7.34154ZM15.1266 0.5C14.4698 0.5 13.84 0.765931 13.3756 1.23947C12.9112 1.71299 12.6502 2.35524 12.6502 3.02494C12.6502 3.69459 12.9112 4.33688 13.3756 4.81022C13.84 5.28375 14.4698 5.54988 15.1266 5.54988C15.7834 5.54988 16.4133 5.28377 16.8778 4.81022C17.3422 4.33688 17.603 3.69459 17.603 3.02494C17.6027 2.35547 17.3417 1.71336 16.8773 1.24002C16.413 0.766495 15.7834 0.500367 15.1266 0.500046L15.1266 0.5Z"
                          fill="#45B5C0"
                        />
                      </Svg>
                      <Text style={styles.ParticipantsText}>
                      {data.totalcount} Participants
                      </Text>
                    </View>

                    <View style={styles.ScoreContainer}>
                      <View style={styles.doccoin}>
                        <View style={styles.d}>
                          <Image
                            source={require("../../assets/dr-icon/dcoin.png")}
                            style={{ width: 20, height: 20, marginRight: 5 }}
                          />
                          <Text>25</Text>
                        </View>
                      </View>
                      <View style={styles.doccoin}>
                        <View style={styles.d}>
                          <Image
                            source={require("../../assets/dr-icon/coupon1.png")}
                            style={{ width: 22, height: 22, marginRight: 5 }}
                          />
                          <Text>1</Text>
                        </View>
                      </View>
                    </View>
                  </Card>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Surveys;
