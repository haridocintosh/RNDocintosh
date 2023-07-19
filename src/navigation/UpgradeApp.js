import { StyleSheet,TouchableOpacity,View,Text,Modal, Platform,Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import { deviceVersion } from '../../redux/reducers/ALL_APIs';


const UpgradeApp = () => {
    const dispatch = useDispatch(); 
    const [modalVisible, setModalVisible] = useState(false);
    const [apptitle, setapptitle] = useState('');
    const [appmsg, setmsg] = useState('');

    useEffect(() => {
        checkAppUpdate();
      }, [])

      const handleExit = () => {
        DeviceInfo.getBaseOs().then((baseOs) => {
            if(Platform.OS == 'android'){
                Linking.openURL(
                    'https://play.google.com/store/apps/details?id=com.docintosh.tech'
                );
            }
          });
    };

      const checkAppUpdate = async()=>{
          const result = await dispatch(deviceVersion());
          //console.log("checkAppUpdate",result);
          let readableVersion = DeviceInfo.getReadableVersion().split('.');
          // console.log("appverion",readableVersion);
          let serverVersion = result?.payload?.current.split('.');
         // console.log("webversion",serverVersion);
          {serverVersion[0] > readableVersion[0] ? (setmsg(result?.payload?.majorMsg.msg), setapptitle(result?.payload?.majorMsg.title), setModalVisible(!modalVisible)): serverVersion[1] > readableVersion[1]  && (setapptitle(result?.payload?.minorMsg.title), setmsg(result?.payload?.minorMsg.msg), setModalVisible(!modalVisible))}
      }

    return  (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textBold}>{apptitle}</Text>
                <Text style={styles.textNormal}>{appmsg}</Text>
                <View style={styles.buttonsContainer}>
                  {/* <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                    onPress={() =>{setModalVisible(!modalVisible)}}>
                  <Text style={[styles.textBoldBtn,styles.leftText]}>Cancel</Text>
                  </TouchableOpacity>
                  <Text>{"        "}</Text> */}
                  <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                    onPress={() => handleExit()}>
                  <Text style={[styles.textBoldBtn,styles.RightText]}>Update Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>  
      )
}

export default UpgradeApp;

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
      color:'#071B36',
      fontSize:20
    },
    textBoldBtn:{
      fontFamily:'Inter-SemiBold',
      color:'#071B36',
    },
    textNormal:{
      fontFamily:"Inter-Regular",
      textAlign:'center',
      color:'#071B36',
      marginTop:10
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