import React,{useState, useEffect} from 'react';
import { View, Text ,Image,Pressable,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import OTPTextView from 'react-native-otp-textinput';

const MobileNumberModal = ({mobileNumber,setMobileNumber}) => {
  const [editNum, setEditNum] = useState(false);
  const setotpInput = (text) => {
    console.log("text",text);
  }
  const handleEdit = () => {
    setEditNum(!editNum)
  }
  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={mobileNumber}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setMobileNumber(!mobileNumber)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <View style={styles.ModalBody}>
                  <Image source={require('../../../assets/images/Phone_Verification.png')} style={{width:95,height:95}}/>
                  <Text style={styles.OTPtext}>Please enter OTP sent</Text>
                  <View style={styles.NumberEditBox}>
                    <Text style={styles.NumberText}>+91 9842839100</Text>
                    <TouchableOpacity onPress={() => handleEdit()}>
                      <Entypo name="edit" size={23} color="#2C8892" style={styles.NumberEditIcon}/>
                    </TouchableOpacity>
                  </View>
                  <OTPTextView 
                    handleTextChange={(text) => setotpInput(text)}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    tintColor="#51668A"
                  />
                  <View style={styles.NumberEditBox}>
                    <Text style={styles.resendOtp}>Didn’t Receive OTP?</Text>
                    <Text style={styles.resendOtpSec}>Resend in 15s</Text>
                  </View>
                </View>
                <View style={styles.modalBtnContainer}>
                    <Button title="Verify" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}}
                        onPress={() => setLocationModal(false)}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default MobileNumberModal