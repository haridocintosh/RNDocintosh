import React,{useState} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import EmailVerify from './EmailVerify';


const EmailModal = ({emailid,setemailid}) => {
    const [message , setmessage] = useState();
    const [emailVerify,setemailVerify] = useState(false);

    const handleVerify = () => {
        setemailVerify(true);
        setemailid(false)
    }

    const isValidemailRegex    =    /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    const  handleOnChangeEmail = (text)=>{
        if(!isValidemailRegex.test(text)){
            setmessage("Please enter valid email!");
        }else{
            setmessage('');
        }
        // setUserInfo({ ...userInfo, 
        //   email: text,
        // });
      }


  return (
    <>
    <EmailVerify emailVerify={emailVerify} setemailVerify={setemailVerify}/>
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
                    <TextInput autoCapitalize="none" keyboardType="email-address" placeholder="docintosh@gmail.com" onChangeText={(value) => handleOnChangeEmail(value)}/>
                </View>
                {message ? (<Text style={{color:'red', fontSize:12, alignSelf:'center'}}>{message}</Text>):null}
                <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}}
                        onPress={() => handleVerify()} />
                </View>
            </View>
        </View>
    </Modal>
    </>
  )
}

export default EmailModal