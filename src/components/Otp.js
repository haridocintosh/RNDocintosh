import { View,StyleSheet,Text } from 'react-native';
import React, { useState } from 'react';
import OTPTextView from 'react-native-otp-textinput';


const Otp = () => {
    const [otpInput, setotpInput ] = useState('');
 

  return (
    <View>
       <OTPTextView 
          handleTextChange={(text) => setotpInput(text)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          inputCount={4}
        />
    </View>
  )
}

const styles = StyleSheet.create({container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      fontSize: 22,
      fontWeight: '500',
      textAlign: 'center',
      color: '#333333',
      marginBottom: 20,
 
    },
    textInputContainer: {
      marginBottom: 20,
    },
    roundedTextInput: {
      borderRadius: 10,
      borderWidth: 1,
     borderBottomWidth:1,
    
     backgroundColor:"white",
     borderColor:"red!importanat",
    },
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
      width: '60%',
      
    },
    textInput: {
      height: 40,
      width: '60%',
      borderColor: '#000',
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      letterSpacing: 5,
      marginBottom: 10,
      textAlign: 'center',
    },
    buttonStyle: {
      marginHorizontal: 20,
    }
  
  })
export default Otp