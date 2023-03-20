import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import CheckBox from "react-native-check-box";
import { styles } from "../Survay/SurvayStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';


const SurvayCheckBoxMcq = ({ setLiftUpData, currentIndex, allMCQs,error,setError }) => {
  const [allMcq, setAllMcq] = useState(allMCQs[currentIndex]);

  const handleChange = (opt_id) => {
    setError(null)
    let temp = allMcq?.options.map((mcq) => {
      if (opt_id === mcq.opt_id) {
        return { ...mcq, checked: !mcq.checked };
      }
      return mcq;
    });
    setAllMcq({ ...allMcq, options: temp });
    const optId = temp
      .filter((val) => val.checked == true)
      .map((temp) => temp);
      console.log("optId",optId);
    setLiftUpData(optId);
  };

  
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <View style={{ paddingHorizontal: 15 }}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} style={{marginBottom:50}}>
          {allMcq?.options?.map((data, i) => {
            return (
              <TouchableOpacity style={styles.SurvayOptions} key={i} onPress={() => handleChange(data.opt_id)}>
                <CheckBox
                  style={{ padding: 5 }}
                  onClick={() => handleChange(data.opt_id)}
                  isChecked={data.checked}
                  checkBoxColor="#2C8892"
                />
                <Text style={styles.optionS}>{data.options}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Text style={styles.error}>
            {error && <><Ionicons name="warning" size={15} color="#D01212"/> {error}</>}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default SurvayCheckBoxMcq;
