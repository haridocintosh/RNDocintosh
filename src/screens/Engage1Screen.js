import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

import { View, Text,Image,StyleSheet,
  SafeAreaView,ScrollView,TouchableOpacity,ImageBackground,TextInput, Button } from 'react-native'
import {  Card } from 'react-native-paper';
//import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import docintoshlgblk from '../assets/dr-icon/doclg1.png'

const EngageScreen = () => {
  const navigation = useNavigation();

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
     showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{}}>
    <Card style={{marginTop:30,margin:10}}>
<View style={{ borderRadius:2/20, marginTop:10, }}>
  <Text style={{margin:10 , fontSize:16, fontWeight:'900',paddingLeft:10}}> <Text>1. </Text>What is this medication called? Medications usually have two names: a brand name and a generic name</Text>
  <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        multiline 
        placeholder="Write something with multilines  here.."
        // keyboardType="numeric"
      />
</View>
<Button
  title="Next"
 
  buttonStyle={{
                marginTop:30,
                width:100,
                borderColor: '#fff',
                borderRadius:15/2,
                backgroundColor:'#000',
                color:'#fff',
                alignSelf:'flex-end',
                margin:10

              }}
              titleStyle={{
                color:'#fff'
              }}
             
              onPress={() => navigation.navigate('Engage1Screen')}
/>
</Card>
   </ScrollView>
  </SafeAreaView>

  )
};
const styles = StyleSheet.create({
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#51668A',
  },
});

export default EngageScreen