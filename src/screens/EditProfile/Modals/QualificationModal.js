import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';

const QualificationModal = ({qualification,setQualification}) => {
  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={qualification}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setQualification(!qualification)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Edit Qualification</Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Course*</Text>
                    <TextInput 
                        autoCapitalize="none" 
                        placeholder="write about you..."/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>College Name*</Text>
                    <TextInput 
                        autoCapitalize="none" 
                        placeholder="write your College Name..."/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Year of Completion*</Text>
                    <TextInput 
                        autoCapitalize="none" 
                        placeholder="write your College Name..."/>
                </View>
                <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default QualificationModal