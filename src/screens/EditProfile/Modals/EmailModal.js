import React,{useEffect, useState} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import EmailVerify from './EmailVerify';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { getLocalData } from '../../../apis/GetLocalData';
import { Edit_ProfileOTP } from '../../../../redux/reducers/profileSlice';



const EmailModal = ({emailid,setemailid}) => {
    const [message , setmessage] = useState();
    const [email , setEmail] = useState();
    const [userId, setuserId] = useState();
    const [emailVerify,setemailVerify] = useState(false);
    const dispatch = useDispatch();

    const handleVerify = () => {
        setemailVerify(true);
        setemailid(false)
    }

    const isValidemailRegex    =    /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const  handleOnChangeEmail = (text)=>{
        if(!isValidemailRegex.test(text)){
            setEmail('');
            setmessage("Please enter valid email!");
        }else{
            setmessage('');
            setEmail(text);
        }
      }
 
      const onSubmitEmail = async() => {
          if(email != ""){
            setemailid(false);
            const result = await dispatch(Edit_ProfileOTP({email:email, id:userId}));
            console.log(result.payload);
            if(result?.payload?.status == 'Success'){
              Toast.show(result.payload.message, Toast.LONG);
              setemailVerify(true);
          }else{
            Toast.show(result.payload.message,Toast.LONG);
            }  
          }
        }

      useEffect(()=>{
        getLocalData('USER_INFO').then((res) => {
          const reData = res?.data;
          // setuser(reData)
          setuserId(reData?.id)
        });
      })
     


  return (
    <>
    <EmailVerify emailVerify={emailVerify} setemailVerify={setemailVerify} emailId={email} />
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={emailid}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setemailid(!emailid)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Edit Email ID</Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Email ID*</Text>
                    <TextInput autoCapitalize="none" 
                    keyboardType="email-address"
                    placeholder="docintosh@gmail.com" 
                    onChangeText={(value) => handleOnChangeEmail(value)}/>
                </View>
                {message ? (<Text style={{color:'red', fontSize:12, alignSelf:'center'}}>{message}</Text>):null}
                <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}}
                        onPress={() => onSubmitEmail()} />
                </View>
            </View>
        </View>
    </Modal>
    </>
  )
}

export default EmailModal