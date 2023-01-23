import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./SurvayStyle";
import { Ionicons } from '@expo/vector-icons';

const RadioMcq = ({ setLiftUpData, currentIndex, allMCQs, error }) => {
  const [optId, setOptId] = useState(null);

  const validateAnswer = async (ans) => {
    setLiftUpData(ans.opt_id);
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
                      : "F"}
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
