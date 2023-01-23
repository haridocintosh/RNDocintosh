import { View,SafeAreaView, ScrollView,Text, TextInput, } from 'react-native'
import Toast from 'react-native-simple-toast';
import React, { useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
const styelcss = require('../assets/css/style');
import { useNavigation } from '@react-navigation/native';
import { forgotPassword_ } from '../../redux/reducers/forgotPass';
import { useFonts } from 'expo-font';


const ForgetPassword = () => {
   const navigation = useNavigation();
   const dispatch = useDispatch();
   const [buttonChange, setbuttonChange]=useState(false);
   const [inputtext, getinput] = useState();
   const forgotpasswordState = useSelector((state)=>{
    return state.forgotpass;
  });
  const isValidemailRegex  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.[a-z]{1,3})+([a-zA-Z0-9]{1,3})|(^[0-9]{10})+$/;

   const handleSubmit = async ()=>{
    // if(!isValidemailRegex.test(text)){
    if(isValidemailRegex.test(inputtext)){
      const token =await dispatch(forgotPassword_({
        email:inputtext
      }))
      if(token?.payload?.status == 'Success'){
        navigation.navigate('ForgotPasswordOTP',{
          mobile_no: inputtext,
          email:token.payload.email,
          user_id :token.payload.userid
        })
      }else{
        Toast.show(token.payload.message);
      }
    }else{
      Toast.show("Please Enter valid Email address or Phone number.");
    }   
  }

  useEffect(()=>{
   // window.location.reload();
  },[])

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'PlusJakartaSans-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
  });
  if(!fontsLoaded) {
    return null;
  }
  return (
  <SafeAreaView style={styelcss.maindDivBannerForget}>
    <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}
     keyboardShouldPersistTaps='handled'
    >
        <View style={styelcss.forgetmainPara}>
            <Text style={[styelcss.forgetPara,{fontFamily:'Inter-Regular'}]}>Enter the email address or mobile number associated with your account</Text>
        </View>
        <TextInput style={[styelcss.customInputVerifyFull,{fontFamily:"PlusJakartaSans-Regular"}]} 
         autoCapitalize="none"
         placeholder='Email/Mobile Number*'
         placeholderTextColor='#51668A'
         onChangeText={(e)=>{getinput(e);}}
       />
        <View style={{marginVertical:23}}>
    <CustomButton label={(forgotpasswordState.loading)?'Sending OTP...':'Receive OTP'}  onPress={()=>{handleSubmit()}} disabled={!forgotpasswordState.loading} />
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default ForgetPassword