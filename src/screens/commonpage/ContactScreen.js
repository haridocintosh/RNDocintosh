import React, { useState } from 'react'
import { View,SafeAreaView, ScrollView,Text,Image, TextInput, } from 'react-native'
import {FontAwesome, Entypo} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const ContactScreen = () => {
   
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
    'PlusJakartaSans-Regular': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Bold':require('../../assets/fonts/PlusJakartaSans-Bold.ttf')
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
  <SafeAreaView>
    <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}
    >
       <View>
        <View style={{alignSelf:'center', marginVertical:50}}>
            <Image source={require('../../assets/images/contactimg.png')}/>
        </View>
        <Text style={{alignSelf:'center',fontFamily:'PlusJakartaSans-Bold', fontWeight:'600', fontSize:20, color:'#013F60'}}>We are ready to help you</Text>
        <Text style={{alignSelf:'center', marginTop:24, fontFamily:'Inter-Regular', color: '#51668A'}}>Call support timings are from 24 Hours.</Text>
        <Text style={{alignSelf:'center', marginTop:12, paddingLeft:20, paddingRight:20 ,  fontFamily:'Inter-Regular', color: '#51668A'}}>Beware of fraudulent Calls - Docintosh will never call you asking for your bank/card details or OTP</Text>
<View style={{flexDirection:'row', alignSelf:'center', marginTop:40}}>
<View>
<View style={{borderRadius:50, backgroundColor:'#ffff', width:64, height:64}}>
<View style={{margin:20}}>
<Entypo name="mail" size={26} color="#51668A" />

</View>

</View>
<Text style={{alignSelf:'center', fontFamily:'PlusJakartaSans-Regular', color: '#013F60'}}>Email Us</Text>
</View>



<View style={{marginHorizontal:20}}></View>
<View>


<View style={{borderRadius:50, backgroundColor:'#ffff', width:64, height:64}}>
<View style={{margin:20}}>
<FontAwesome name="phone" size={26} color="#51668A" />


</View>
<Text style={{alignSelf:'center', fontFamily:'PlusJakartaSans-Regular', color: '#013F60'}}>Call Us</Text>
</View>
</View>
</View>

       </View>

    </ScrollView>
  </SafeAreaView>
  )
}

export default ContactScreen