  import { View, Text, SafeAreaView,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Keyboard, ActivityIndicator
   } from 'react-native';
   import React, { useState, useEffect } from 'react';
   import {useDispatch, useSelector} from 'react-redux';
   import { useNavigation } from '@react-navigation/native';
   import CustomButton from '../components/CustomButton';
   import {AntDesign,Ionicons,FontAwesome} from 'react-native-vector-icons';
   import Icon from 'react-native-vector-icons/FontAwesome';
   import { forgotverifyOtp } from '../apis/Apicall';
   import OTPTextView from 'react-native-otp-textinput';
   import Toast from 'react-native-simple-toast';
   import { forgotPassword_ } from '../../redux/reducers/forgotPass';
   import { resendOTP } from '../../redux/reducers/loginAuth';

   const ForgotPasswordOTP = ({route}) => {
    const navigation = useNavigation();
   const dispatch = useDispatch();
   const {mobile_no, email, user_id} = route.params;
   const [phone ,setPhone] =useState("");
   const [counter, setCounter] = useState(30);
   const [otpInput, setotpInput ] = useState('');
   const [message , setmessage] = useState();
   const [editNumber , setEditNumber] = useState(false);
   const [loader, setLoader] = useState(false);
   const [verify, setVerifying] = useState('Verify');

    
   const submitOtp = ()=>{
    setVerifying("Verifying...")
   if(otpInput !== ""){
   forgotverifyOtp(otpInput,user_id)
    .then(res => {
    if(res['status'] == 'Success'){
      navigation.navigate('CreateNewPass',{user_id})
    }
   })
   .catch(err => {
   setmessage('Error occured!');
   console.log(err);
   });
   }else{
   setmessage('Please Enter Otp');
   }
   setVerifying("Verify")
   };


   const resendUserOtp = async() =>{ 
      // setLoader(true);
      setCounter(30)
      const result = await dispatch(resendOTP({email:email, mobile_no:mobile_no}));
      Toast.show(result.payload.message);
   }


   useEffect(() => {
    
   const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
   return () => clearInterval(timer);
   }, [counter]);

  
  const handleEdit = () => {
    setEditNumber(!editNumber)
   }
  
   const handleSubmit = async ()=>{
    if(phone){
      const token =await dispatch(forgotPassword_({
        email:phone
      }))
      Toast.show(token.payload.message);
      if(token?.payload?.status == 'Success'){
        navigation.navigate('ForgotPasswordOTP',{
          mobile_no: phone,
          email:'',
          user_id :token.payload.userid
        })
      }
    }else{
      Toast.show("Please Enter Mobile No. OR Email");
    }   
  }

   if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
  }

   return (
   <SafeAreaView style={{display:"flex",alignItems:"center",paddingTop:120,}}>
   <ScrollView showsVerticalScrollIndicator={false}
   nestedScrollEnable={true}
   keyboardShouldPersistTaps='handled'
   style={{width:'100%', padding:20, marginTop:-100}}>

    <View style={styles.topImgVerify}>
      <Image source={require('../assets/images/image-verification-otp.png')}/>
   </View>

   <Text style={styles.verifyText}>Please enter OTP sent to</Text>

   <View style={styles.InputFieldVerify}>

    {/* <TextInput style={{fontSize:16,color:"#071B36",paddingRight:12}} 
          autoCapitalize="none"
          keyboardType="email-address"
          value={mobile_no}
          onChangeText={e=>
          setPhone(e)
      }
      /> */}

    <TextInput style={editNumber ? styles.numInputEdit:styles.numInput } 
        autoCapitalize="none"
        value={editNumber ? phone: mobile_no}
        onChangeText={e => setPhone(e)}
        // keyboardType="tel"
        clearTextOnFocus={true}
    />
      
   {/* <Icon name="pencil" size={20} color="#2c9dd1"/> */}


   <View style={styles.InputSendIcons}>
    <TouchableOpacity onPress={() => handleEdit()}>
        {editNumber ? 
          <AntDesign name="closecircleo" size={20} color="#2c9dd1" style={{margin:5}} />
        :
          <FontAwesome name="pencil" size={20} color="#2c9dd1" style={{margin:5}} />
        }
    </TouchableOpacity>
    {editNumber &&
    <TouchableOpacity onPress={() => handleSubmit()}>
        <Ionicons name="send-outline" size={20} color="#2c9dd1" style={{margin:5,paddingLeft:7}} />
    </TouchableOpacity>
    }
   </View>

   </View>
   {/* <Otp/> */}
   
   <OTPTextView 
      handleTextChange={(text) => setotpInput(text)}
      containerStyle={styles.textInputContainer}
      textInputStyle={styles.roundedTextInput}
      autoComplete="sms-otp"
      inputCount={4}
   />
   <View
   style={styles.verifiactionSubText}>
   <Text style={styles.verifiactionInnerText}>Didn’t Receive OTP? </Text>
   <TouchableOpacity onPress={() => counter == 0 ? resendUserOtp() : null }>
     {/* userRegister() */}
    <Text style={{color: '#2376E5', fontWeight: '600',fontSize:16,}}>
      {counter == 0? "Resend OTP" : `Resend in ${counter}s`}
    </Text>
   </TouchableOpacity>
   </View>
    <View >
   <View style={{paddingHorizontal:6}}>
   <CustomButton label={verify}onPress={()=>submitOtp()} />
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
     borderRadius: 0,
     borderBottomWidth: 1,
     borderBottomColor:"#51668A"
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
   },
   numInput:{
    fontSize:16,
    color:"#071B36",
    width:110,
    paddingLeft:10
   },
   numInputEdit:{
    fontSize:16,
    color:"#071B36",
    borderBottomWidth: 1,
    borderColor:"#ccc",
    width:200,
    paddingLeft:10
    },
    InputSendIcons:{
        flexDirection:'row',
    }
   
   })
   export default ForgotPasswordOTP
    
    