import { View, Text, StyleSheet, Modal,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ConfirmModal = ({modalToggle,setModalToggle,handleOkay,activityTitle}) => {
    const dispatch = useDispatch();

    // const handleOkay =  async () =>{

    // }
  return (
    <Modal animationType="fade" transparent={true} visible={modalToggle} >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            {/* <Text style={styles.textBold}>Are you sure,</Text> */}
            <Text style={styles.textNormal}>{activityTitle}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                onPress={() =>{setModalToggle(false)}}>
                <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
                </TouchableOpacity>
                <Text>{"  "}</Text>
                <TouchableOpacity 
                style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                onPress={() => handleOkay()}>
                <Text style={[styles.textBold,styles.RightText]}>Okay</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    </Modal>
  )
}

export default ConfirmModal

export const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.4)'  
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textBold:{
      fontFamily:'Inter-SemiBold',
    },
    textNormal:{
      fontFamily:"Inter-Regular",
      textAlign:'center'

    },
    buttonsContainer:{
      flexDirection:'row',
    },
    buttonsDesign:{
      borderWidth:1,
      paddingHorizontal:25,
      borderRadius:5,
      paddingVertical:7,
      marginTop:20,
      flex:1,
      justifyContent:'center',
      alignItems:'center'
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
      color:'#fff'
    },
});