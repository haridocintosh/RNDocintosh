import { View, Text,SafeAreaView,Image } from 'react-native'
import React from 'react';
import { styles } from './SentimetrixStyles';
import { Button } from "react-native-elements";

const CongratulationPage = ({route,navigation}) => {
  const {ImgPath,Content,prev} = route?.params;

  const ContinueSurvey = () => {
    prev(ImgPath);
    navigation.navigate("SentimetrixMcq");
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <View style={styles.sentiContainer}>
        {
          ImgPath == 2 ? <Image source={require('../../assets/images/congratulationsLevelOne.png')} style={styles.sentimetrixImage}/>
          :
          ImgPath == 7 ? <Image source={require('../../assets/images/congratulationsLevelTwo.png')} style={styles.sentimetrixImage}/>
          :
          ImgPath == 13 && <Image source={require('../../assets/images/congratulationsLevelThree.png')} style={styles.sentimetrixImage}/>
        }
        <Text style={styles.sentimetrixSubTitle}>{Content}</Text>
      </View>
      <View style={styles.dopDownContainer}>
        <Button
          title="Continue Survey"
          buttonStyle={styles.blueButtonStyle}
          titleStyle={{ color: "#fff", fontFamily: "PlusJakartaSans-Bold"}}
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Previous"
          buttonStyle={styles.whiteButtonStyle}
          titleStyle={{ color: "#2C8892", fontFamily: "PlusJakartaSans-Bold"}}
          onPress={() => ContinueSurvey()}
        />
      </View>
    </SafeAreaView>
  )
}

export default CongratulationPage