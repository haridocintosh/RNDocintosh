import React, {useState} from 'react'
import { View, Text,Image,
  SafeAreaView,ScrollView,StyleSheet } from 'react-native'
 import {Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const Sentimentixscreen2 = () => {
    const navigation = useNavigation();
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

  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
     showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{}}>
<View style={{padding:10}}>
<View style={{marginTop:40}}>
    <Text style={{alignSelf:'center', fontSize:20, fontWeight:'600'}}>Congratulations!</Text>
</View>
<View style={{alignSelf:'center'}}><Text style={{fontSize:12, fontWeight:'400', color:'#51668A', }}>You are almost there.</Text></View>
<View style={{ alignSelf:'center', marginTop:60, marginBottom:'10%'}}>
    <Image source={require('../assets/dr-icon/cong.png')}/>
</View>

<View>
    <Text style={{alignSelf:'center',fontSize:14, textAlign:'center', color:'#51668A', fontWeight:'400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem sapien, rhoncus vitae rhoncus in, fermentum in sapien. </Text>
</View>

 <Button
  title="Continue Survey"
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
    onPress={() => navigation.navigate('Engage1Screen')}
             
/>
<Button
  title="Previous"
  type='outline'
 
  buttonStyle={{
    marginTop:16,
    width:"100%",
    height:48,
   alignSelf:'center',
                borderColor: '#2C8892',
                borderRadius:15/2,
              
                
              }}
              titleStyle={{
                color:'#2C8892'
              }}
              onPress={() => navigation.navigate('')}
             
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
export default Sentimentixscreen2;