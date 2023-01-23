import React, {useState} from 'react'
import { View, Text,Image,
  SafeAreaView,ScrollView,StyleSheet } from 'react-native'
import {  Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const SentimentrixCong = () => {
    // const navigation = useNavigation();
    // const [open, setOpen] = useState(false);
    // const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);
    // const [items, setItems] = useState([
    //   {label: 'Spain', value: 'spain'},
    //   {label: 'Madrid', value: 'madrid', parent: 'spain'},
    //   {label: 'Barcelona', value: 'barcelona', parent: 'spain'},
  
    //   {label: 'Italy', value: 'italy'},
    //   {label: 'Rome', value: 'rome', parent: 'italy'},
  
    //   {label: 'Finland', value: 'finland'}
    // ]);

  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
     showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{}}>
<View style={{padding:10}}>
<Card style={{marginTop:40,borderRadius:20/2, }}>
    <View style={{margin:10}}>
         <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Pediasure</Text>
        <Text style={{fontSize:12, fontWeight:'400',color:'#51668A'}}>
        Pediasure Sentimetrix
        </Text>
    </View>
    <View style={{borderRadius:20/1,  width:52, height:34, borderColor:'#45B5C0', borderWidth:2 ,alignSelf:'flex-end', marginTop:-10, marginRight:30, bottom:20, zIndex:1}}>
<Image source={require('../assets/dr-icon/coupon1.png')} style={{alignSelf:'center',marginVertical:5,}}></Image>
    </View>
</Card>
<Card style={{marginTop:20,borderRadius:20/2, }}>
    <View style={{margin:10}}>
         <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Pediasure</Text>
        <Text style={{fontSize:12, fontWeight:'400',color:'#51668A'}}>
        Pediasure Sentimetrix
        </Text>
    </View>
    <View style={{borderRadius:20/1, width:52, height:34, borderColor:'#45B5C0', borderWidth:2 ,alignSelf:'flex-end', marginTop:-10, marginRight:30, bottom:20, zIndex:1}}>
<Image source={require('../assets/dr-icon/coupon1.png')} style={{alignSelf:'center',marginVertical:5,}}></Image>
    </View>
</Card>
<Card style={{marginTop:20,borderRadius:20/2, }}>
    <View style={{margin:10}}>
         <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Pediasure</Text>
        <Text style={{fontSize:12, fontWeight:'400', color:'#51668A'}}>
        Pediasure Sentimetrix
        </Text>
    </View>
    <View style={{borderRadius:20/1, width:52, height:34, borderColor:'#45B5C0', borderWidth:2 ,alignSelf:'flex-end', marginTop:-10, marginRight:30, bottom:20, zIndex:1}}>
<Image source={require('../assets/dr-icon/coupon1.png')} style={{alignSelf:'center',marginVertical:5,}}></Image>
    </View>
</Card>
<Card style={{marginTop:20,borderRadius:20/2, }}>
    <View style={{margin:10}}>
         <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Pediasure</Text>
        <Text style={{fontSize:12, fontWeight:'400',color:'#51668A'}}>
        Pediasure Sentimetrix
        </Text>
    </View>
    <View style={{borderRadius:20/1, width:52, height:34, borderColor:'#45B5C0', borderWidth:2 ,alignSelf:'flex-end', marginTop:-10, marginRight:30, bottom:20, zIndex:1}}>
<Image source={require('../assets/dr-icon/coupon1.png')} style={{alignSelf:'center',marginVertical:5,}}></Image>
    </View>
</Card>
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
export default SentimentrixCong;