import { View,SafeAreaView, ScrollView,Text, TextInput,StyleSheet ,Modal,TouchableOpacity} from 'react-native'
import Toast from 'react-native-simple-toast';
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
const styelcss = require('../assets/css/style');
import { useNavigation } from '@react-navigation/native';
import { forgotPassword_ } from '../../redux/reducers/forgotPass';


const ForgetPassword = () => {
   const navigation = useNavigation();
   const dispatch = useDispatch();
   const [inputtext, getinput] = useState();
   const [modalVisible, setModalVisible] = useState(false);
   const [incptData, setIncptData] = useState();
   const forgotpasswordState = useSelector((state)=>{
    return state.forgotpass;
  });
  const isValidemailRegex  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.[a-z]{1,3})+([a-zA-Z0-9]{1,3})|(^[0-9]{10})+$/;

   const handleSubmit = async ()=>{
    // if(!isValidemailRegex.test(text)){
    if(isValidemailRegex.test(inputtext)){
      const token = await dispatch(forgotPassword_({
        email:inputtext
      }))
      // console.log("token",token);
      if(token?.payload?.status == 'Success'){
        navigation.navigate('ForgotPasswordOTP',{
          mobile_no: inputtext,
          email:token.payload.email,
          user_id :token.payload.userid
        })
      }else if(token?.payload?.status_code == 6){
        setIncptData(token?.payload);
        setModalVisible(true);
      }else{
        Toast.show(token.payload.message, Toast.LONG);
      }
    }else{
      Toast.show("Please Enter valid Email address or Phone number.", Toast.LONG);
    }   
  }

  
  const handleRedirect = () => {
    navigation.navigate('DoctorOtp', {
      mobile_no : incptData?.data?.mobilenumber,
      email     : incptData?.data?.email,
      user_id   : incptData?.data?.id,
      role      : incptData?.data?.user_role,
      speciality: incptData?.data?.speciality_id,
    });
    setModalVisible(false);
  }

  return (
  <SafeAreaView style={styelcss.maindDivBannerForget}>
    <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}
     keyboardShouldPersistTaps='handled'>
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

    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textBold}>We noticed that your sign-up process is 
            incomplete. To continue accessing our services, please complete the 
            registration by providing the necessary information.</Text>
            <Text style={styles.textBold}>Click here to complete your sign-up</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                onPress={() => handleRedirect()} >
                  <Text style={[styles.RightText]}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </Modal> 
  </SafeAreaView>
  )
}

export default ForgetPassword;

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.4)'  
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'75%'
  },
  textBold:{
    fontFamily:'Inter-SemiBold',
    textAlign:'center',
    color:'#071B36',
    marginBottom:20
  },
  textNormal:{
    fontFamily:"Inter-Regular",
    color:'#071B36',
    textAlign:'center',
    marginTop:15,
    fontSize:12,
  },
  buttonsContainer:{
    flexDirection:'row',
  },
  buttonsDesign:{
    borderWidth:1,
    paddingHorizontal:25,
    borderRadius:5,
    paddingVertical:7,
  },
  leftButtonsDesign:{
    borderColor:'#1A7078'
  },
  RightButtonsDesign:{
    borderColor:'#1A7078',
    backgroundColor:'#1A7078'
  },
  leftText:{
    color:'#1A7078'
  },
  RightText:{
    color:'#fff',
    fontFamily:'Inter-SemiBold',
    textAlign:'center',
  },
})