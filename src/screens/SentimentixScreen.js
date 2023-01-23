import React, {useState,useEffect} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text,Image,
  SafeAreaView,ScrollView,StyleSheet } from 'react-native'
 import {Button, Input  } from 'react-native-elements';


const SentimentixScreen = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);
    const [items, setItems] = useState([
      {label: 'Spain', value: 'spain'},
      {label: 'Madrid', value: 'madrid', parent: 'spain'},
      {label: 'Barcelona', value: 'barcelona', parent: 'spain'},
  
      {label: 'Italy', value: 'italy'},
      {label: 'Rome', value: 'rome', parent: 'italy'},
  
      {label: 'Finland', value: 'finland'}
    ]);

    useEffect(() => {
      navigation.setOptions({ title: 'Sentimetrix'});
    },[])

  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
     showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{}}>
<View style={{padding:10}}>
<View style={{ alignSelf:'center', marginTop:80, marginBottom:'10%'}}>
    <Image source={require('../assets/dr-icon/OBJECTS.png')}/>
</View>
<View>
    <Text style={{alignSelf:'center', fontSize:20, fontWeight:'600'}}>Welcome to Sentimetrix</Text>
</View>
<View>
    <Text style={{alignSelf:'center',fontSize:14, textAlign:'center', color:'#51668A', fontWeight:'400'}}>Sentimetrix is a paid market research survey and an online communication testing tool. The survey will take anywhere between 10-12 minutes to be completed.</Text>
</View>
<View style={{marginTop:40}}>
<Text style={{fontSize:12, fontWeight:'400', margin:5}}>Your Practice Experience (in years)*</Text>
<DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        mode="SIMPLE"
        style={{borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
      />
</View>
 <Button
  title="Start Survey"
 
  buttonStyle={{
    marginTop:40,
    width:"100%",
    height:48,
    alignSelf:'center',
    borderColor: '#fff',
    borderRadius:15/2,
    backgroundColor:'#2C8892',
    
  }}
  titleStyle={{
    color:'#fff'
  }}
  onPress={() => navigation.navigate('SentimentrixCong')}
             
/>
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
export default SentimentixScreen;