import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';

const MobileNumberModal = ({mobileNumber,setMobileNumber}) => {
  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={mobileNumber}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
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