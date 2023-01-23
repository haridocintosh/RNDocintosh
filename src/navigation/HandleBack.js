import { StyleSheet, BackHandler, ActivityIndicator,Modal,TouchableOpacity,View,Text } from 'react-native';
import React,{useState,useEffect} from 'react'

const HandleBack = () => {
    const [toggle, setToggle] = useState(false);
    const handleExit = () => {
        BackHandler.exitApp();
        setToggle(false);
    };

    useEffect(() => {
        const backAction = () => {
          setToggle(true);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
        return () => backHandler.remove();
    }, []);
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={toggle}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textBold}>Hold on!,</Text>
                <Text style={styles.textNormal}>Are you sure you want to exit app?</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                    onPress={() =>{setToggle(false)}}>
                  <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
                  </TouchableOpacity>
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

export default HandleBack;

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