import { StyleSheet,TouchableOpacity,View,Text,Modal } from 'react-native';
import React, { useEffect,useState } from 'react';

const IncompleteRegistrationModal = ({modalVisible}) => {
  
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
    >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textBold}>Phone number and email already recorded.</Text>
            <Text style={styles.textNormal}>Please complete remaining registration</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                // onPress={() => handleExit()}
                >
              <Text style={[styles.textBold,styles.RightText]}>Redirect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </Modal>  
  )
}

export default IncompleteRegistrationModal;

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
    width:'70%'
  },
  textBold:{
    fontFamily:'Inter-SemiBold',
    textAlign:'center',
    color:'#071B36',
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
})