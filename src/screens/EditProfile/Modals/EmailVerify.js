import React,{useState, useEffect} from 'react';
import { View, Text ,Image,Pressable,TouchableOpacity, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import OTPTextView from 'react-native-otp-textinput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getLocalData } from '../../../apis/GetLocalData';
 

const  EmailVerify = ({emailVerify,setemailVerify,emailId}) => {
  const [counter, setCounter] = useState(30);
  const [otpInput, setotpInput ] = useState(null);
  const [editEmail , setEditEmail] = useState(false);
  const [userId, setuserId] = useState();
  const [email ,setEmail] = useState("");
  const [emailID, setEmailID] = useState();
  const [verify, setVerifying] = useState('Verify');
  const dispatch    = useDispatch();
  const navigation  = useNavigation();

  const handleSubmit = async ()=>{
      if(phone){
        const token =await dispatch(userIdupdate({
          email:email,
          id:userId
        }))
        
        if(token?.payload?.status == 'Success'){
          setEmailID(phone);
          Toast.show(token.payload.message, Toast.LONG);
        }
      }else{
        Toast.show("Please Enter Mobile No.",Toast.LONG);
      }   
  }

  const handleEdit = () => {
    setEditEmail(!editEmail)
  }


  useEffect(() => {
    setEmailID(emailId);
    getLocalData('USER_INFO').then((res) => {
      const reData = res?.data;
      setuser(reData)
      setuserId(reData?.id)
    });
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);

   
}, [counter]);


  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={emailVerify}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setemailVerify(!emailVerify)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <View style={styles.ModalBody}>
                <Image source={require('../../../assets/images/Phone_Verification.png')} style={{width:95,height:95}}/>
                <Text style={styles.OTPtext}>Please enter OTP sent</Text>
                <View style={styles.NumberEditBox}>
                  <TextInput style={editEmail ? styles.numInputEdit:styles.numInput } 
                        autoCapitalize="none"
                        value={editEmail ? email: emailId}
                        onChangeText={e => setPhone(e)}
                        clearTextOnFocus={true}
                        
                    />
                     <TouchableOpacity onPress={() => handleEdit()}>
                    {editEmail ? 
                        <AntDesign name="closecircleo" size={20} color="#2c9dd1" style={{margin:5}} />
                    :
                       <Entypo name="edit" size={23} color="#2C8892" style={{margin:5}}/>
                    }
                    </TouchableOpacity>
                    {editEmail &&
                    <TouchableOpacity onPress={() => handleSubmit()}>
                        <Ionicons name="send-outline" size={20} color="#2c9dd1" style={{margin:5,paddingLeft:7}} />
                    </TouchableOpacity>
                    }
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
                    <TouchableOpacity>
                      <Text style={styles.resendOtpSec}>Resend in 15s</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.modalBtnContainer}>
                    <Button title="Verify" buttonStyle={{ backgroundColor:'#2C8892',width:'100%',marginTop:25}}
                        titleStyle={{ color:'#fff', textAlign:"center"}} />
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default EmailVerify