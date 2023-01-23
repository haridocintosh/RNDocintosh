import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./QuizLevelsStyles";
import { useFonts } from "expo-font";

const McqListModal = ({ toggle, quizData, topicId }) => {
  const navigation = useNavigation();
  const filterId = quizData.filter((el) => el.topic_id === topicId);

  const basicId = filterId[0].basic_id;

  const goToNext = () => {
    navigation.navigate("QuizGame", {
      basicId: basicId,
      title: filterId[0].title,
    });
    //
    toggle(false);
  };
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => toggle(false)}
      />
      <View style={styles.McqSelection}>
        <LinearGradient
          colors={["#50CDC7", "#15b3ac"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.ModalcartGradiant}
        >
          <Text style={styles.mcqsListText}>{filterId[0]?.title}</Text>
          <AntDesign
            name="play"
            size={35}
            style={styles.playIcon}
            color={"#000128"}
          />
          <TouchableOpacity
            style={styles.mcqStartBtn}
            onPress={() => goToNext()}
          >
            <Text style={styles.startText}>Let's Start</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
};

export default McqListModal;
