import { View,SafeAreaView, ScrollView,Text, TextInput, StyleSheet ,} from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
const styelcss = require('../assets/css/style');
import {useDispatch} from 'react-redux';
import { setpassword } from '../../redux/reducers/forgotPass';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateNewPass = ({route}) => {
 const dispatch   = useDispatch();
 const navigation = useNavigation();
 const [password,set_password]  = useState();
 const [passworderr, setpassworderr] = useState('');
 const [cpassword,setcpassword] = useState();
 const [cpassworderr,setcpassworderr] = useState();
 const [showeye, setshoweye]    = useState(true);
 const {user_id} = route.params;


 const checkpassword= async(e)=>{
  console.log(e);
  const isValidpswdRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const passwordcheck = e;
  if(!isValidpswdRegex.test(passwordcheck)){
    setpassworderr("Min 8 characters which contain at least one numeric digit and a special character.")
  }else{
    setpassworderr('')
  }
  set_password(passwordcheck)
}

const checkConfirmpassword= async(e)=>{
  const isValidpswdRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const confirmpassword = e;
  if(!isValidpswdRegex.test(confirmpassword)){
    setcpassworderr("Min 8 characters which contain at least one numeric digit and a special character.")
  }else{
    setcpassworderr('')
  }
  setcpassword(confirmpassword)
}

 const handleSubmit = async ()=>{
  if(!password){
    setpassworderr('Please Enter Password');
  }
  else if(!cpassword){
    setcpassworderr('Please Enter Confirm Password')
  }else{
    if(password!==cpassword){
      Toast.show("Please Check Both Password", Toast.LONG);
    }else{
      const token =await dispatch(setpassword({
        id:user_id,
        pwd:password
    }));
      if(token?.payload?.status=="Success"){
      Toast.show(token.payload.message,Toast.LONG);
      navigation.navigate('Login');
    }
  }
  }
 }

 return (
  <SafeAreaView style={styelcss.maindDivBannerCnp}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    keyboardShouldPersistTaps='handled'
  >
    <View style={styelcss.forgetmainPara}>
      <Text style={styelcss.forgetPara}>Enter New Password. </Text>
    </View>
    <TextInput style={styelcss.customInputVerifyFull} 
      placeholder="Password"
      returnKeyType='go'
      secureTextEntry
      onChangeText={(e)=> checkpassword(e)}
   />
    <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{passworderr}</Text>
 
    <TextInput style={styelcss.customInputVerifyFull} 
      placeholder="Confirm Password*"
      returnKeyType='go'
      secureTextEntry={showeye}
      onChangeText={(e)=>checkConfirmpassword(e)}
      hideShow={showeye}
      autoCapitalize="none"
   />
   <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{cpassworderr}</Text>
    <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
   
     <Text style={styelcss.forgetParapaasb}>Both passwords must match.</Text>

    <View style={{marginVertical:23}}>
  <CustomButton label={'Reset Password'} onPress={() =>{
   handleSubmit()
  } } />
  </View>
  </ScrollView>
 </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 
  eyeIcon:{
    zIndex:1, 
    alignSelf:'flex-end', 
    marginTop:-60,
     marginRight:30,
     marginBottom:30
},
});


export default CreateNewPass
