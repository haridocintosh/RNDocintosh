import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';

const GetProfile = ({profile,setProfile,changeProfile}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={profile}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setProfile(!profile)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <TouchableOpacity style={styles.pickFrom} onPress={() => changeProfile(1)}>
                    <Entypo name='camera' size={25} color="#009688"/>
                    <Text style={styles.PicModalSubText}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pickFrom} onPress={() => changeProfile(2)}>
                    <FontAwesome name='image' size={25} color="#009688"/>
                    <Text style={styles.PicModalSubText}>Library</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

export default GetProfile