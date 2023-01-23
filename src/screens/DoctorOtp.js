import { View,
    Text, 
    SafeAreaView,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import CustomButton from '../components/CustomButton';
  import {AntDesign,Ionicons,FontAwesome} from 'react-native-vector-icons';
  import OTPTextView from 'react-native-otp-textinput';
  import { useDispatch } from 'react-redux';
  import Toast from 'react-native-simple-toast';
  import { doctorOtp } from '../../redux/reducers/otpSlice';
  import { resendOTP } from '../../redux/reducers/loginAuth';
  import { userIdupdate } from '../../redux/reducers/otpSlice';

 
 const DoctorOtp = ({route}) => {
   const dispatch = useDispatch(); 
  //  console.log("routedata",route);
  //  const mobile_no = '9029634011';
  //  const email ='tara@docintosh.com';
  //  const user_id = '228737';
  //  const role = '4'

  const {mobile_no, email, user_id, role, speciality} = route.params;

   const [phone ,setPhone] =useState("");
   const navigation = useNavigation();
   const [counter, setCounter] = useState(30);
   const [otpInput, setotpInput ] = useState('');
   const [message , setmessage] = useState();
   const [loader, setLoader] = useState(false);
   const [editNumber , setEditNumber] = useState(false);
 
     const resendUserOtp = async() =>{ 
       setCounter(30);
        const result = await dispatch(resendOTP({email:email, mobile_no:mobile_no}));
        Toast.show(result.payload.message);
     }
 
     const submitOtp = async()=>{
       if(otpInput !== ""){
         const result = await dispatch(doctorOtp({user_id:user_id, otp:otpInput, user_role:role}));
         Toast.show(result.payload.message);
         if((result.payload.role == '4') && (result.payload.status == 'Success')){
            navigation.navigate('RegisterTwoScreen', {
                user_id     : result.payload.user_id,
                fullname    : result.payload.fullname,
                role        : result.payload.role,
                specialityId: speciality,
            })
        }else{
          if(result.payload.status == 'Success'){
            navigation.navigate('RegisterStudentScreen', {
              user_id   : result.payload.user_id,
              fullname  : result.payload.fullname,
              role      : result.payload.role,
          }) 
         }
        }
       }else{
           setmessage('Please Enter Otp');
       }
    };
     

   useEffect(() => {
       const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
       return () => clearInterval(timer);
   }, [counter]);


   const handleEdit = () => {
    setEditNumber(!editNumber)
   }

   const handleSubmit = async ()=>{
    if(phone){
      const token =await dispatch(userIdupdate({
        email:phone,
        id:user_id
      }))
      Toast.show(token.payload.message);
      if(token?.payload?.status == 'Success'){
        navigation.navigate('DoctorOtp',{
          mobile_no: token.payload.userdetails,
          email:email,
          user_id : token.payload.userid,
          role:role
        })
      }
      // Toast.show("Please Enter Mobile No. OR Email");
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
     <SafeAreaView style={{paddingTop:32,paddingHorizontal:20}}>
       <ScrollView showsVerticalScrollIndicator={false} 
       nestedScrollEnable={true} 
       keyboardShouldPersistTaps='handled'>

      <View style={styles.topImgVerify}>
         <Image source={require('../assets/images/image-verification-otp.png')}  />
     </View>

     <Text style={styles.verifyText}>
     Please enter OTP sent to 
     </Text>

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

 {/* <Icon name="pencil" size={20} color="#2c9dd1"/>     */}


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
           inputCount={4}
         />
         <View
           style={styles.verifiactionSubText}>
           <Text style={styles.verifiactionInnerText}>Didn’t Receive OTP? </Text>
           <TouchableOpacity onPress={() => counter == 0 ? resendUserOtp() : null}>
           <Text style={{color: '#2376E5', fontWeight: '600',fontSize:16,}}>
              {counter == 0? "Resend OTP" : `Resend in ${counter}s`}
            </Text>
           </TouchableOpacity>
         </View>
         <Text style={{color:'red',fontFamily:"PlusJakartaSans-Regular",fontSize:16,textAlign:"center",marginBottom:12}}>{message}</Text>
    <View>
       <View style={{paddingHorizontal:6}}>
   
         <CustomButton label={"Verify"}  onPress={()=>submitOtp()} />
 

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
     fontFamily:"Inter-Regular"
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
     fontFamily:"Inter-Regular"
  
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
 export default DoctorOtp