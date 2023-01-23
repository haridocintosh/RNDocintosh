import { View,
   Text, 
   SafeAreaView,
   Image,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   TextInput
    } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
// import Otp from '../components/Otp';
import Icon from 'react-native-vector-icons/FontAwesome';
import { quicklogin, verifyOtp } from '../apis/Apicall';
import OTPTextView from 'react-native-otp-textinput';

const OtpVerification = ({route}) => {

  const {mobile_no, email, user_id} = route.params;
  const [phone ,setPhone] =useState("");
  const navigation = useNavigation();
  const [counter, setCounter] = useState(30);
  const [otpInput, setotpInput ] = useState('');
  const [message , setmessage] = useState();

  const userRegister = ()=>{
      setCounter(30)
      quicklogin(email,mobile_no)
       .then(res => {
         if(res['status'] == 'Success'){
         }
      })
      .catch(err => {
        setmessage('Error occured!');
        console.log(err);
      });
    };


    const submitOtp = ()=>{
      if(otpInput !== ""){
        verifyOtp(otpInput,user_id)
         .then(res => {
           if(res['status'] == 'Success'){
            setTimeout(() => {
              navigation.navigate('Home')
             }, 1000);
           }
        })
        .catch(err => {
          setmessage('Error occured!');
          console.log(err);
        });
      }else{
          setmessage('Please Enter Otp');
      }
      };
    


  useEffect(() => {
      const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);

 
  return (
    <SafeAreaView style={{display:"flex",alignItems:"center",paddingTop:120,}}>
      <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnable={true}
          
            >
 <View style={styles.topImgVerify}>
        <Image source={require('../assets/images/image-verification-otp.png')}  />
    </View>
    <Text style={styles.verifyText}>
    Please enter OTP sent to 
    </Text>
    <View style={styles.InputFieldVerify}>
      
    <TextInput style={{fontSize:16,color:"#071B36",paddingRight:12}} 
         autoCapitalize="none"
         keyboardType="email-address"
         value={mobile_no}
         onChangeText={e=>
          setPhone(e)
         }
       />
<Icon name="pencil" size={20} color="#2c9dd1"/>    
    </View>
    {/* <Otp/> */}

    <OTPTextView 
          handleTextChange={(text) => setotpInput(text)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          inputCount={4}
        />
        <View
          style={styles.verifiactionSubText}>
          <Text style={styles.verifiactionInnerText}>Didn’t Receive OTP? </Text>
          <TouchableOpacity onPress={() => counter == 0? userRegister() : null}>
          <Text style={{color: '#2376E5', fontWeight: '600',fontSize:16,}}>
            {counter == 0? "Resend OTP" : `Resend in ${counter}s`}
          </Text>
          </TouchableOpacity>
        </View>
   <View >
      <View style={{paddingHorizontal:6}}>
        <CustomButton label={"Verify"}  onPress={()=>submitOtp()} />

        <CustomButton label={"Continue"}  onPress={() => navigation.navigate('RegisterTwoScreen')} />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
   
  )
}


const styles = StyleSheet.create({
  topImgVerify:{
    paddingTop:50,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  verifyText:{
    textAlign:"center",
    fontSize:16,
    color:"#071B36",
    lineHeight:40,
    fontWeight:"400",
    marginTop:17,
  },
  verifiactionSubText:{
    flexDirection: 'row',
    justifyContent: 'center',       
   paddingBottom:32,
   marginTop:-8,
  },
  verifiactionInnerText:{
    fontSize: 16,
    fontWeight: '400',
    color:'#8C97AB',
  },
  InputFieldVerify:{
display:"flex",
flexDirection:"row",
justifyContent:"center",
marginBottom:25,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
   
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
export default OtpVerification