import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const MemberOptionsModal = ({modalVisible,setModalVisible}) => {
    const navigation = useNavigation();

    const handleMessage = () => {
        navigation.navigate('MessageScreen');
        setModalVisible(false)
    }
  return (
    <View style={styles.container}>
        {modalVisible &&
        <View style={styles.optionModal}>
        <View>
            <TouchableOpacity style={styles.optionList} onPress={() => handleMessage()} >
            <MaterialIcons name={'messenger'} size={24} color={"#45B5C0"} style={styles.optionListIcon}/>
                <Text style={styles.optionListText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionList}>
                <Image source={require('../../assets/dr-icon/optionDcoin.png')} style={{width:25,height:25,marginRight:5}}/>
                <Text style={styles.optionListText}>Send Coins</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionList}>
                <MaterialIcons name="report-problem" size={24} color="#45B5C0" style={styles.optionListIcon}/>
                <Text style={styles.optionListText}>Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionList} >
            <Entypo name="block" size={24} color="#45B5C0" style={styles.optionListIcon}/>
                <Text style={styles.optionListText}>Block</Text>
            </TouchableOpacity>
        </View>
        </View>}
    </View>
  )
}

export default MemberOptionsModal;

export const styles = StyleSheet.create({
    container:{
    //   width:150,
      position:'absolute',
      right:40,
      borderRadius:5,
      zIndex:1,
    },
    optionModal:{
      width:155,
      backgroundColor:'#fff',
      borderRadius:5,
      justifyContent:"center",
      paddingHorizontal:15,
      paddingVertical:10,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 10,
      elevation: 3,
    },
    optionList:{
      paddingVertical:8,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
    },
    optionListText:{
      color:'#071B36',
      fontFamily:"Inter-Regular",
    },
    optionListImage:{
      width:15.5,
      height:20.7,
      marginRight:7
    },
    optionListIcon:{
      marginRight:7
    },
  
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