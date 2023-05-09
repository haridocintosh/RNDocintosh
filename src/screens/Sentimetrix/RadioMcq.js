import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Survay/SurvayStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";


const RadioMcq = ({ setLiftUpData, currentIndex, allMCQs, error,setError }) => {
  const [optId, setOptId] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
      setOptId(null);
  },[currentIndex])

  
  const validateAnswer = async (ans) => {
    setError(null)
    setLiftUpData(ans);
    setOptId(ans.opt_id);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <View style={{ paddingHorizontal: 15 }}>
        <View>
          {allMCQs[currentIndex]?.options.map((data, i) => {
            return (
              <TouchableOpacity
                style={
                  optId == data?.opt_id
                    ? styles.SurvayOptionsSelect
                    : styles.SurvayOptionsUnselect
                }
                onPress={() =>
                  validateAnswer(
                    data,
                    allMCQs[currentIndex]?.basic_id,
                    allMCQs[currentIndex]?.qid
                  )
                }
                key={i}
              >
                <View style={[styles.count,{backgroundColor: optId == data?.opt_id ? '#2C8892':"#F6F6F6"}]}>
                  <Text style={[styles.optionSeriel,{color: optId == data?.opt_id ? '#fff':"#51668A"}]}>
                    {/* styles.optionSeriel */}
                    {i == 0
                      ? "A"
                      : i == 1
                      ? "B"
                      : i == 2
                      ? "C"
                      : i == 3
                      ? "D"
                      : i == 4
                      ? "E"
                      : i == 5 
                      ? "F" 
                      : i == 6 
                      ? "G" 
                      : i == 7 
                      ? "H": "I"}
                  </Text>
                </View>
                <Text style={styles.optionS}> {data.options}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.error}>
            {error && <><Ionicons name="warning" size={15} color="#D01212"/> {error}</>}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RadioMcq;
