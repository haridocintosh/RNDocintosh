import {Text,SafeAreaView,TextInput,Image,View } from 'react-native'
import React, { useState } from 'react'
const styelcss = require('../assets/css/style');
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { quicklogin } from '../apis/Apicall';


const MobileScreen = () => {
  const navigation = useNavigation();
  const isValidphoneRegex     =    /^(\[0-9]?)?\d{10}$/;
  const isValidemailRegex     =    /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const [register , setregister] = useState({
    mobile_no : "",
    email:"",
  });


const updatePhone = (text)=>{
  if(!isValidphoneRegex.test(text)){
      setmessage("Please enter valid Phone Number");
  }else{
      setmessage('');
  }
  setregister({ ...register, 
      mobile_no: text,
  });
}

const  updateEmail = (text)=>{
  if(!isValidemailRegex.test(text)){
      setmessage("Please enter valid email");
  }else{
      setmessage('');
  }
  setregister({ ...register, 
      email: text,
  });
}

const [message , setmessage] = useState();

const userRegister = ()=>{
  if(register.email !== "" &&  register.mobile_no !== ""){
    quicklogin(register.email,register.mobile_no)
     .then(res => {
       if(res['status'] == 'Success'){
        setTimeout(() => {
          navigation.navigate('OtpVerification', {
            mobile_no : register.mobile_no,
            email : register.email,
            user_id :res['userid'],
          })
         }, 1000);
       }
    })
    .catch(err => {
      setmessage('Error occured!');
      console.log(err);
    });
  }else{
      setmessage('Please fill the above form');
  }
  };


  return (
   <SafeAreaView  style={styelcss.mainDivBannerMoble}>
  
    <View style={styelcss.subDivBannerMoble}>
    <Image
        source={require('../assets/icons/logo.png')}
      />
       <View style={styelcss.mainContentLogin}>
        <Text style={styelcss.logMainText}>Welcome to Docintosh</Text>
        {/* <Text style={styelcss.logMainPara}>Welcome to Docintosh. </Text> */}
    </View>
    <Text style={styelcss.verifyText}></Text>  
      <TextInput style={styelcss.customInputVerifyFullMobile} 
          autoCapitalize="none"
          onChangeText={(text)=>updatePhone(text)}
          keyboardType="numeric"
          placeholder='Mobile number'/>
      <TextInput style={styelcss.customInputVerifyFullMobile} 
          autoCapitalize="none"
          keyboardType="email-address" 
          placeholder='Email'
          onChangeText={(text)=>updateEmail(text)}
         />

         <Text style={{color:'red'}}>{message}</Text>
  
    <CustomButton label={'Submit'} onPress={() => userRegister()} />
  
    </View>

   </SafeAreaView>
  )
}

export default MobileScreen