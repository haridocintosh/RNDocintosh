import { View, Text,SafeAreaView,Image } from 'react-native'
import React,{useState} from 'react'
import { styles } from './SentimetrixStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from "react-native-elements";

const Sentimetrix = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Below 5', value: 'below 5'},
    {label: 'Between 6-10', value: 'between 6-10'},
    {label: 'Between 11-15', value: 'between 11-15'},
    {label: 'Between 16-20', value: 'between 16-20'},
    {label: 'More than 20', value: 'more than 20'},
  ]);

  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <View style={styles.sentiContainer}>
          <Image source={require('../../assets/images/sentimetrixFpage.png')} style={styles.sentimetrixImage}/>
          <Text style={styles.sentimetrixTitle}>Welcome to Sentimetrix</Text>
          <Text style={styles.sentimetrixSubTitle}>Sentimetrix is a paid market research survey and an online communication testing tool. The survey will take anywhere between 10-12 minutes to be completed.</Text>
      </View>
      <View style={styles.dopDownContainer}>
      <Text style={styles.dopDownLabel}>Your Practice Experience (in years)*</Text>
      <DropDownPicker
        style={styles.DropDownField}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        autoScroll={true}
        disableBorderRadius={true}
      />
       <Button
          title="Start Survey"
          buttonStyle={styles.buttonStyle}
          titleStyle={{ color: "#fff", fontFamily: "PlusJakartaSans-Bold"}}
        //   onPress={() =>
        //     // navigation.navigate("Surveys", { surveyid: surveyid })
        //   }
        />
      </View>
    </SafeAreaView>
  )
}

export default Sentimetrix