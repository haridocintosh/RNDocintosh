import React from 'react'
import { View, Text,Image,SafeAreaView,ScrollView,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Layer_2 from '../assets/images/Layer_2.png';

const Polls = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
     showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{}}>
    <View style={{padding:10}}>
    <View style={{ alignSelf:'center', marginTop:80, marginBottom:'10%'}}>
        <Image source={require('../assets/images/Layer_2.png')}/>
    </View>
    <View>
        <Text style={{alignSelf:'center', fontSize:20, fontWeight:'600'}}>You have attemped all Polls.</Text>
    </View>
    <View>
        <Text style={{alignSelf:'center',fontSize:14, color:'#51668A', fontWeight:'400'}}>You can come back later</Text>
    </View>
    <CustomButton label={"Continue"} onPress={() =>navigation.navigate('Polls1')}  />
    </View>
   </ScrollView>
  </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({
  paddingLeft:{
  paddingLeft:10,
  },
  cardfooterstyle:{
    
zIndex:9999,
marginTop:-140,

  },
  imgcolor:{
    width:'100%'
  }
 
 });
export default Polls;