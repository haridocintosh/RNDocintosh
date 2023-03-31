import { View, Text, StyleSheet, Modal,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { deletePublicationsAPI, deleteQualificationAPI, deleteAwardAPI, deleteWorkexperianceAPI } from '../../../../../redux/reducers/profileSlice';
import { useDispatch } from 'react-redux';



const DeleteModal = ({deleteToggle,deleteData,setDeleteToggle,handleWorkReload,getQualification,handleAward,getPublication}) => {
    
    const dispatch = useDispatch();

    const handleOkay =  async () =>{
        if(deleteData.name == "WorkExperience"){
            const result = await dispatch(deleteWorkexperianceAPI({id : deleteData?.id}));
            setDeleteToggle(false)
            handleWorkReload();
        }else if(deleteData.name == "Qualification"){
            const result = await dispatch(deleteQualificationAPI({id : deleteData?.id}));
            setDeleteToggle(false);
            getQualification();
        }else if(deleteData.name == "Award"){
            const result = await dispatch(deleteAwardAPI({id : deleteData?.id}));
            setDeleteToggle(false);
            handleAward();
        }else if(deleteData.name == "Publication"){
            const result = await dispatch(deletePublicationsAPI({id : deleteData?.id}));
            setDeleteToggle(false);
            getPublication();
        }
    }
    
    return (
    <Modal animationType="fade" transparent={true} visible={deleteToggle} >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.textBold}>Are you sure,</Text>
            <Text style={styles.textNormal}> Do you want to Delete?</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                onPress={() =>{setDeleteToggle(false)}}>
                <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
                </TouchableOpacity>
                <Text>{"            "}</Text>
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

export default DeleteModal;

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
    },
    buttonsContainer:{
      flexDirection:'row',
    },
    buttonsDesign:{
      borderWidth:1,
      paddingHorizontal:25,
      borderRadius:5,
      paddingVertical:7,
      marginTop:20
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