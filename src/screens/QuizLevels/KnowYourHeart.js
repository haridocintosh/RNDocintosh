import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import beginnerBadge from "../../assets/dr-icon/beginnerBadge.png";
import intermediateBadge from "../../assets/dr-icon/intermediateBadge.png";
import ExpertBadge from "../../assets/dr-icon/ExpertBadge.png";
import legendBadge from "../../assets/dr-icon/legendBadge.png";
import Accesstime from "../../assets/dr-icon/Accesstime.png";
import outoffBadge from "../../assets/dr-icon/outoffBadge.png";
import dcoin from "../../assets/dr-icon/dcoin.png";
import goldCrown from "../../assets/dr-icon/gold-crown.png";
import outoffWhiteBadge from "../../assets/dr-icon/outoffWhiteBadge.png";
import whiteAccesstime from "../../assets/dr-icon/whiteAccesstime.png";
import { Button } from "react-native-elements";
import { Card } from "react-native-paper";
import axios from "axios";
import { mainApi } from "../../apis/constant";
import { styles } from "./QuizLevelsStyles";

const KnowYourHeart = ({ route,navigation }) => {
  const { score, seconds ,TotalMcq} = route?.params;

  const [userData, setUserData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [sliceData, setSliceData] = useState(10);

  const getLeaderboardData = () => {
    navigation.setOptions({ title: 'Know Your Heart' });
    axios.get(`${mainApi.baseUrl}/ApiController/global_leaderboard`)
      .then((res) => {
        setUserData(res.data);
        setLoader(false);
      });
  };
  useEffect(() => {
    getLeaderboardData();
  }, []);
  
  const handleAlldata = () => {
    setSliceData();
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#2C8892", position: "relative" }}
    >
      <Card style={styles.cardbody}>
        <View style={styles.scoreboard}>
          <Image source={outoffWhiteBadge} style={styles.outoffBadge} />
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
          <View style={{ backgroundColor: "#ffff", padding: 15 }}>
            <View style={{ height: 300 }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnable={true}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    fontFamily: "Inter-SemiBold",
                  }}
                >
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
                              source={{ uri: data.profileimage }}
                            />
                            <Image
                              style={styles.goldCrown}
                              source={goldCrown}
                            />
                          </View>
                          <View style={styles.marginleft}>
                            <Text style={styles.listitemtst}>
                              Dr. {data.username}
                            </Text>
                            <View style={styles.userScoreCount}>
                              <Image
                                source={outoffBadge}
                                style={styles.outoffBadge}
                              />
                              <Text style={styles.itemlisttxt2}>
                                {data.mcq_contest}
                              </Text>
                              <Text style={styles.devider}> | </Text>
                              <Image
                                source={Accesstime}
                                style={styles.Accesstime}
                              />
                              <Text style={styles.itemlisttxt2}>
                                {parseInt(data.total_time.split(".")[0]) % 60}
                                {data.total_time.split(".")[1] &&
                                  `:` +
                                    (parseInt(
                                      data.total_time.split(".")[1]
                                    ).toFixed(2) %
                                      60)}{" "}
                                min
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.row}>
                          <Image source={dcoin} style={styles.imaguser} />
                          <Text style={styles.TotalDCoins}>20976</Text>
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
      </Card>
    </SafeAreaView>
  );
};
export default KnowYourHeart;
