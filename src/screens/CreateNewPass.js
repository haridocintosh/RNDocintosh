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
 const [cpassword,setcpassword] = useState();
 const [showeye, setshoweye]    = useState(true);
 const {mobile_no, email, user_id} = route.params;
 const handleSubmit = async ()=>{
  if(password!==cpassword){
   Toast.show("Please Check Both Password");
  }else{
   const token =await dispatch(setpassword({
    id:user_id,
    pwd:password
  }));
  if(token?.payload?.status=="Success"){
   Toast.show(token.payload.message);
  navigation.navigate('Login');
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
      <Text style={styelcss.forgetPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
    </View>
    <TextInput style={styelcss.customInputVerifyFull} 
    placeholder="Password"
     returnKeyType='go'
     secureTextEntry
   onChangeText={set_password}
   />
   <View>
   </View>
    <TextInput style={styelcss.customInputVerifyFull} 
    placeholder="Confirm Password*"
     returnKeyType='go'
     secureTextEntry={showeye}
     onChangeText={setcpassword}
     hideShow={showeye}
     autoCapitalize="none"
   />
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
    marginTop:-50,
     marginRight:30,
     marginBottom:30
},
});


export default CreateNewPass
