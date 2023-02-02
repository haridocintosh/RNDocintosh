import { StyleSheet,TouchableOpacity,View,Text,Modal } from 'react-native';
import React, { useEffect } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import { deviceVersion } from '../../redux/reducers/ALL_APIs';


const UpdatedModal = () => {
    const dispatch = useDispatch(); 
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        checkAppUpdate();
      }, [])


      const checkAppUpdate = async()=>{
            const result = await dispatch(deviceVersion());
            console.log("resultpayload",result?.payload);
            let readableVersion = DeviceInfo.getReadableVersion().split('.');
            console.log('ceje',readableVersion);
            let serverVersion = result?.payload?.current.split('.')
            console.log('ceje',readableVersion[0]);
            console.log('dsfsd',serverVersion[0]); 
            // serverVersion[0] > readableVersion[0] && console.log(result?.payload?.majorMsg.title);
            {serverVersion[0] > readableVersion[0] ?  console.log(result?.payload?.majorMsg.title)  : serverVersion[1] > readableVersion[1]  &&  console.log(result?.payload?.majorMsg.title) }
          }


    return  (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textBold}>title</Text>
                <Text style={styles.textNormal}>titletitledmasjhdjsahuj</Text>
                <View style={styles.buttonsContainer}>
                  {/* <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                    onPress={() =>{setToggle(false)}}>
                  <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
                  </TouchableOpacity> */}
                  <Text>{"        "}</Text>
                  <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                    onPress={() => handleExit()}>
                  <Text style={[styles.textBold,styles.RightText]}>Okay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>  
      )
}

export default UpdatedModal;

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
})