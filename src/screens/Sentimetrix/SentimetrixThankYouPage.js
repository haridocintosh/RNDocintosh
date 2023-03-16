
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";
import { Card } from "react-native-paper";
import Lottie from 'lottie-react-native';
import { styles } from "../Survay/SurvayStyle";
import ScratchOffer from "../Survay/ScratchOffer";


const SentimetrixThankYouPage = ({navigation}) => {
    const [showOffer, setShowOffer] = useState(true);

    useEffect(() =>{
        navigation.setOptions({ title: `Sentimetrix`});
    },[]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#2C8892", position: "relative" }}
    >
      {showOffer && <ScratchOffer setShowOffer={setShowOffer} />}
      <Card style={styles.cardbody}>
        <View>
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

            <Button
              title="Back"
              buttonStyle={styles.buttonStyle}
              titleStyle={{ color: "#fff", fontFamily: "PlusJakartaSans-Bold" }}
              onPress={() =>
                navigation.navigate("SentimetrixList")
              }
            />
          </View>
        </View>
      </Card>
    </SafeAreaView>
  )
}

export default SentimetrixThankYouPage