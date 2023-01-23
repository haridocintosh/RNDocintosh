import React, { useState } from 'react'
import { View,SafeAreaView, ScrollView,Text,Image, TextInput, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const TermsAndCondition = () => {
  const navigation = useNavigation();

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
     nestedScrollEnable={true}>
<View style={{padding:20}}>
<Text style={{fontSize:14, fontWeight:'400', color: '#51668A', fontFamily:'PlusJakartaSans-Regular'}}>Please read this agreement carefully before using this site or the materials. Welcome to Docintosh.com - a social network and an online platform for medical professionals, institutions and organizations worldwide. This website and its materials are designed to comply with relevant laws and regulations. This is a binding agreement ("agreement") between Docintosh and its affiliates and you ("you" or your"). This Agreement governs Your use of the website (http://Docintosh.com) and our app (the "Site" or "Sites"), including, without limitation, all content such as text, information, images, Docintosh, Forums, Docintosh blog and online community, software and other information, services and materials (collectively, the "materials") and all information made available to you or by you through this Site by Docintosh and/or third parties.</Text>
<View style={{marginVertical:20}}></View>
<View style={{flexDirection: 'row'}}>
<Text style={{fontFamily:'PlusJakartaSans-Bold', color: '#071B36', fontWeight:'600',lineHeight:20, }}>1.</Text>
<Text style={{flex: 1, paddingLeft: 5, fontSize:16, fontWeight:'600',lineHeight:20, fontFamily:'PlusJakartaSans-Bold', color: '#071B36'}}>Materials</Text>
</View>
<View style={{flexDirection: 'row'}}>
<Text style={{fontFamily:'PlusJakartaSans-Bold', color: '#071B36'}} >A.</Text>
<Text style={{flex: 1, height: 22, width: 301, paddingLeft: 5, fontWeight:'500', fontSize:16, fontWeight:'500',lineHeight:20, fontFamily:'PlusJakartaSans-Bold', color: '#071B36'}}>OWNERSHIP OF MATERIALS</Text>
</View>
<Text style={{fontSize:14, fontWeight:'400', fontFamily:'Inter-Regular', color: '#51668A'}}>All materials are provided by Docintosh unless indicated otherwise. All intellectual property rights in the materials (including copyrights, trademarks, trade secrets and patents) are the property of Docintosh unless indicated otherwise. Docintosh retains all copyrights in the individual pages, and their components, and collective works available at the Site. They </Text>
       </View>
     
    </ScrollView>
  </SafeAreaView>
  )
}

export default TermsAndCondition