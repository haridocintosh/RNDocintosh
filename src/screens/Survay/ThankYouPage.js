import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import beginnerBadge from "../../assets/dr-icon/beginnerBadge.png";
import intermediateBadge from "../../assets/dr-icon/intermediateBadge.png";
import ExpertBadge from "../../assets/dr-icon/ExpertBadge.png";
import legendBadge from "../../assets/dr-icon/legendBadge.png";
import dcoin from "../../assets/dr-icon/dcoin.png";
import tankyouCelebration from "../../assets/dr-icon/tankyouCelebration.png";
import { Button } from "react-native-elements";
import { Card } from "react-native-paper";
import ScratchOffer from "./ScratchOffer";
import Lottie from 'lottie-react-native';
import { styles } from "./SurvayStyle";
import ThankYouFireBlast from '../../assets/intro/ThankYou_FireBlast.json'

const ThankYouPage = ({ route,navigation }) => {
  const [showOffer, setShowOffer] = useState(true);
  const { surveyid } = route.params;

  useEffect(() =>{
    navigation.setOptions({ title: `Surveys`});
  },[])

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#2C8892", position: "relative" }}
    >
      {showOffer && <ScratchOffer setShowOffer={setShowOffer} />}
      <Card style={styles.cardbody}>
        <View>
          {/* <View style={styles.badgeConatiner}>
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
                    <Text style={styles.coinsCount}>400</Text>
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
          </View> */}

          {/* <Image
            source={tankyouCelebration}
            style={styles.tankyouCelebration}
          /> */}
          <View style={styles.tankyouCelebration}>
          <Lottie
            source={require('../../assets/intro/ThankYou_FireBlast.json')}
            autoPlay
            loop
          />
          </View>

          <View style={{ paddingHorizontal: 15, marginTop: -60 }}>
            <Text style={styles.thankutxt}>Thank You</Text>
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                fontFamily: "Inter-Regular",
              }}
            >
              for your time and response.
            </Text>
            <Text style={styles.Congratulation}>
               Congratulation! 
            </Text>
            <Text style={styles.wonCoinMsg}>
              You have earned <Text style={styles.wonCoins}>300</Text> DocCoins.
            </Text>

            <Button
              title="Back"
              buttonStyle={styles.buttonStyle}
              titleStyle={{ color: "#fff", fontFamily: "PlusJakartaSans-Bold" }}
              onPress={() =>
                navigation.navigate("Surveys", { surveyid: surveyid })
              }
            />
          </View>

          {/* 
          <View>
            <Text style={{ color: "blue", alignSelf: "center", marginTop: 16 }}>
              View All
            </Text>
          </View> */}
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default ThankYouPage;
