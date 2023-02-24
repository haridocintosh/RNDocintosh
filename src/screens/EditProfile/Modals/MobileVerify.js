import React,{useState, useEffect} from 'react';
import { View, Text ,Image,Pressable,TouchableOpacity,TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import OTPTextView from 'react-native-otp-textinput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { userIdupdate } from '../../../../redux/reducers/otpSlice';
import { getLocalData } from '../../../apis/GetLocalData';
import { updateMobileNumber } from '../../../../redux/reducers/profileSlice';
import { storeData } from '../../../apis/Apicall';

const MobileVerify = ({numVerify,setNumVerify,mobNumber}) => {
    const [editNumber , setEditNumber] = useState(false);
    const [counter, setCounter] = useState(30);
    const [otpInput, setotpInput ] = useState(null);
    const [phone ,setPhone] =useState("");
    const [userId, setuserId] = useState();
    // const [alluser, setuser] = useState();
    const [mobileNumb, setmobileNumb] = useState();
    const [verify, setVerifying] = useState('Verify');
    const dispatch = useDispatch();
    const navigation = useNavigation();


    const submitOtp = async() =>{
      setVerifying("Verifying...")
        if(otpInput !== ""){
        const result = await dispatch(updateMobileNumber({otp:otpInput, user_id:userId, mobilenumber:mobileNumb}));
        console.log(result.payload);
        if(result.payload.status == 'Success'){
          Toast.show(result.payload.message,Toast.LONG);
          navigation.navigate('EditProfileScreen');
          setNumVerify(false);
        } 
          Toast.show(result.payload.message,Toast.LONG);
        }else{
          Toast.show('Please Enter OTP',Toast.LONG);
        }
          setVerifying("Verify");
    };
    

    const handleEdit = () => {
        setEditNumber(!editNumber)
    }

    const resendUserOtp = async() =>{
        setLoader(true);
        setCounter(30)
        const result = await dispatch(resendOTP({email:email, mobile_no:mobile_no}));
        Toast.show(result.payload.message,Toast.LONG);
     }

    const handleSubmit = async ()=>{
        if(phone){
          const token =await dispatch(userIdupdate({
            email:phone,
            id:userId
          }))
          
          if(token?.payload?.status == 'Success'){
            setmobileNumb(phone);
            Toast.show(token.payload.message, Toast.LONG);
          }
        }else{
          Toast.show("Please Enter Mobile No.",Toast.LONG);
        }   
    }

    useEffect(() => {
        setmobileNumb(mobNumber);
        getLocalData('USER_INFO').then((res) => {
          const reData = res?.data;
          // setuser(reData)
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
        visible={numVerify}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setNumVerify(!numVerify)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <View style={styles.ModalBody}>
                <Image source={require('../../../assets/images/Phone_Verification.png')} style={{width:95,height:95}}/>
                <Text style={styles.OTPtext}>Please enter OTP sent</Text>
                <View style={styles.NumberEditBox}>
                    {/* <TextInput style={editNumber ? styles.numInputEdit:styles.numInput } 
                        autoCapitalize="none"
                        value={editNumber ? phone: mobNumber}
                        onChangeText={e => setPhone(e)}
                        clearTextOnFocus={true}
                        maxLength={10}
                    />
                    <TouchableOpacity onPress={() => handleEdit()}>
                    {editNumber ? 
                        <AntDesign name="closecircleo" size={20} color="#2c9dd1" style={{margin:5}} />
                    :
                       <Entypo name="edit" size={23} color="#2C8892" style={{margin:5}}/>
                    }
                    </TouchableOpacity>
                    {editNumber &&
                    <TouchableOpacity onPress={() => handleSubmit()}>
                        <Ionicons name="send-outline" size={20} color="#2c9dd1" style={{margin:5,paddingLeft:7}} />
                    </TouchableOpacity>
                    } */}
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
                    <TouchableOpacity onPress={() => counter == 0 ? resendUserOtp() : null }>
                        <Text style={styles.resendOtpSec}>
                          {counter == 0? "Resend OTP" : `Resend in ${counter}s`}
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.modalBtnContainer}>
                    <Button title="Verify" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}} onPress={()=>submitOtp()}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default MobileVerify