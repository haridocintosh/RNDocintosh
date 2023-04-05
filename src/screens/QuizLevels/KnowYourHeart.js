import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Pressable,
  Dimensions
} from "react-native";
import beginnerBadge from "../../assets/dr-icon/beginnerBadge.png";
import intermediateBadge from "../../assets/dr-icon/intermediateBadge.png";
import ExpertBadge from "../../assets/dr-icon/ExpertBadge.png";
import legendBadge from "../../assets/dr-icon/legendBadge.png";
import Accesstime from "../../assets/dr-icon/Accesstime.png";
import outoffBadge from "../../assets/dr-icon/outoffBadge.png";
import dcoin from "../../assets/dr-icon/dcoin.png";
import goldCrown from "../../assets/dr-icon/gold-crown.png";
import orangeCrown from "../../assets/dr-icon/orange-crown.png";
import greenCrown from "../../assets/dr-icon/green-crown.png";
import outoffWhiteBadge from "../../assets/dr-icon/outoffWhiteBadge.png";
import whiteAccesstime from "../../assets/dr-icon/whiteAccesstime.png";
import { Button } from "react-native-elements";
import { Card } from "react-native-paper";
import axios from "axios";
import { mainApi } from "../../apis/constant";
import { styles } from "./QuizLevelsStyles";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getLocalData } from "../../apis/GetLocalData";
import { showLeaderBoard } from "../../../redux/reducers/mcqSlice";
import { useDispatch } from "react-redux";

const KnowYourHeart = ({ route,navigation }) => {
  const dispatch = useDispatch();
  const { score, seconds ,TotalMcq} = route?.params;
  const [modalVisible, setModalVisible] = useState(true);
  const [userData, setUserData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [sliceData, setSliceData] = useState(10);

  const getLeaderboardData = () => {
    navigation.setOptions({ title: 'Know Your Heart' });
    getLocalData('USER_INFO').then(async (res) => {
      // console.log(res.data.role);
      const uresult = await dispatch(showLeaderBoard({role : res.data.role}));
      // console.log(uresult);
      setUserData(uresult?.payload);
      setLoader(false);
    });
    // axios.get(`${mainApi.baseUrl}/ApiController/global_leaderboard`)
    //   .then((res) => {
    //     setUserData(res.data);
    //     setLoader(false);
    //   });
  };
  useEffect(() => {
    getLeaderboardData();
  },[]);
  
  const handleAlldata = () => {
    setSliceData();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#2C8892", position: "relative" }}>
      <Image source={require('../../assets/images/KnowYourHeartBI.png')} style={styles.ThankYouBgImage}/>
      <View style={styles.cardbody}>
        <View style={styles.scoreboard}>
          <Image source={outoffWhiteBadge} style={styles.outoffBadge}/>
          <Text style={styles.scoreboardText}>
            {score}/{TotalMcq}
          </Text>
          <Text
            style={[
              styles.WhiteDevider,
              { fontFamily: "PlusJakartaSans-Regular" },
            ]}
          />
          <Image source={whiteAccesstime} style={styles.Accesstime} />
          <Text
            style={[
              styles.scoreboardText,
              { fontFamily: "PlusJakartaSans-Regular" },
            ]}
          >
            {60-seconds} sec
          </Text>
        </View>
        <View>
          <View style={styles.badgeConatiner}>
            <Text style={styles.cardheading}>
              386 Coins Left to reach Level 5!!!
            </Text>
            <View style={styles.badgeparent}>
              <View style={styles.levelsBadge}>
                <Image source={beginnerBadge} style={styles.badgeimg} />
                <View>
                  <Text style={styles.levelText}>Beginner</Text>
                  <View style={styles.row}>
                    <Image source={dcoin} style={styles.imaguser} />
                    <Text style={styles.coinsCount}>200</Text>
                  </View>
                </View>
              </View>

              <View style={styles.levelsBadge}>
                <Image source={intermediateBadge} style={styles.badgeimg} />
                <View>
                  <Text style={styles.levelText}>Intermediate</Text>
                  <View style={styles.row}>
                    <Image source={dcoin} style={styles.imaguser} />
                    <Text
                      style={[
                        styles.coinsCount,
                        { fontFamily: "Inter-Regular" },
                      ]}>
                      400
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.levelsBadge}>
                <Image source={ExpertBadge} style={styles.badgeimg} />
                <View>
                  <Text style={styles.levelText}>Expert</Text>
                  <View style={styles.row}>
                    <Image source={dcoin} style={styles.imaguser} />
                    <Text style={styles.coinsCount}>600</Text>
                  </View>
                </View>
              </View>

              <View style={styles.levelsBadge}>
                <Image source={legendBadge} style={styles.badgeimg} />
                <View>
                  <Text style={styles.levelText}>Legend</Text>
                  <View style={styles.row}>
                    <Image source={dcoin} style={styles.imaguser} />
                    <Text style={styles.coinsCount}>800</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
            <View style={{ height: Dimensions.get('window').height/2.7,backgroundColor: "#ffff", padding: 15 }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnable={true} >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    fontFamily: "Inter-SemiBold",
                  }}>
                  Winners for this Challenge
                </Text>

                {loader && (
                  <ActivityIndicator
                    color={"#2C8892"}
                    style={{ marginTop: 130 }}
                  />
                )}

                {userData &&
                  userData?.slice(0, sliceData).map((data, index) => {
                    return (
                      <View style={styles.collectedUsers} key={index}>
                        <View style={styles.row}>
                          <Text style={styles.count}>{index + 1}</Text>
                          <View style={styles.picContainer}>
                            <Image
                              style={styles.avtatsize}
                              source={{ uri: data.profile }}
                            />
                            <Image
                              style={styles.goldCrown}
                              source={index == 0 ? goldCrown : index == 1 ? orangeCrown :index == 2 && greenCrown}
                            />
                          </View>
                          <View style={styles.marginleft}>
                            <Text style={styles.listitemtst}>
                              Dr. {data.first_name} {data.last_name}
                            </Text>
                            <View style={styles.userScoreCount}>
                              {/* <Image
                                source={outoffBadge}
                                style={styles.outoffBadge}
                              />
                              <Text style={styles.itemlisttxt2}>
                                {data.coinTotal}
                              </Text> */}
                              {/* <Text style={styles.devider}> | </Text> */}
                              {/* <Image
                                source={Accesstime}
                                style={styles.Accesstime}
                              /> */}
                              <Text style={styles.itemlisttxt2}>
                                {/* {parseInt(data.total_time.split(".")[0]) % 60}
                                  {data.total_time.split(".")[1] &&
                                    `:` +
                                      (parseInt(
                                        data.total_time.split(".")[1]
                                      ).toFixed(2) %
                                        60)}{" "}
                                  min */}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.row}>
                          <Image source={dcoin} style={styles.imaguser} />
                          <Text style={styles.TotalDCoins}>{data.coinTotal}</Text>
                        </View>
                      </View>
                    );
                  })}
                  <View>
                    {sliceData &&
                    <TouchableOpacity onPress={() => handleAlldata()}>
                      <Text style={styles.ViewAllText}>View All</Text>
                    </TouchableOpacity>}
                    
                    <Button
                      title="Back to Categories"
                      buttonStyle={styles.buttonStyle}
                      titleStyle={{
                        color: "#fff",
                        fontFamily: "PlusJakartaSans-Bold",
                      }}
                      onPress={() => navigation.navigate("QuizLevels")}
                    />
                  </View>
              </ScrollView>
            </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setModalVisible(!modalVisible)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.textBold}>WELL DONE!</Text>
                <Text style={styles.textNormal}>{score} out of {TotalMcq} correct answers in {60-seconds} seconds.</Text>
              </View>
            </View>
        </Modal>  
    </SafeAreaView>
  );
};
export default KnowYourHeart;
