import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import ScratchOffer from "./ScratchOffer";
import Lottie from 'lottie-react-native';
import { styles } from "./SurvayStyle";

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
      <Image source={require('../../assets/images/KnowYourHeartBI.png')} style={styles.CongratulationBgImage}/>
      {showOffer && <ScratchOffer setShowOffer={setShowOffer} />}
      <View style={styles.cardbody}>
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
                color:"#071B36"
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
          </View>
          <View style={{position:'absolute',bottom:0,padding:10,width:'100%'}}>
              <Button
                title="Back"
                buttonStyle={styles.buttonStyle}
                titleStyle={{ color: "#fff", fontFamily: "PlusJakartaSans-Bold" }}
                onPress={() =>
                  navigation.navigate("Surveys", { surveyid: surveyid })
                }
              />
            </View>
      </View>
    </SafeAreaView>
  );
};

export default ThankYouPage;
