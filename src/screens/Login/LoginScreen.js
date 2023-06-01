import React,{ useState , useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
  } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
const styelcss = require('../../assets/css/style');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CheckBox from "react-native-check-box";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData, singlestoreData } from '../../apis/Apicall';
import { addLocal, userLogin } from '../../../redux/reducers/loginAuth';
import Toast from 'react-native-simple-toast';
import OneSignal from 'react-native-onesignal';
import IncompleteRegistrationModal from './IncompleteRegistrationModal';
import { getLocalData } from '../../apis/GetLocalData';
import { getdeviceId } from '../PushNotification';


const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loader, setloader] = useState(true);
  const [showeye, setshoweye] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [message , setmessage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const isValidemailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.[a-z]{1,3})+([a-zA-Z0-9]{1,3})|(^[0-9]{10})+$/;
  const [register,setregister] = useState({
    email:"",
    password:"", 
  });
  const [device_id , setDeviceId]  = useState('');
  const [data, setdata] = useState();
  const [datarm, setdatarm] = useState();
  const [reloadID, setReloadID] = useState(false);
  const isFocused = useIsFocused();

  const toggleRememberMe = () => {
    setChecked(!isChecked);
  }
  // const userInfo = useSelector((state) => state.userLocalData);
  // console.log("userInfo", userInfo);

  const  updateEmail = (text)=>{
    if(!isValidemailRegex.test(text)){
        setmessage("Please enter valid emailId address or phone number.");
    }else{
        setmessage('');
    }
    setregister({...register, 
      email: text,
    });
  }

  const getData = async () => {
    await getLocalData('USER_INFO').then(async(res) => {
      setdata(res?.data);
    });
    await getLocalData('rememberme').then((res) => {
      setdatarm(res?.data?.register); 
      setChecked(res?.data?.isChecked);
      if(res == null){
        setregister({email:"",password:""});
      }
    });
    setloader(false);
  }


  const authLogin = async ()=>{
    register.email = register.email? register.email : datarm?.email;
    register.password = register.password ? register.password : datarm?.password ;
    // if(register.email !== "" &&  register.password !== "" && register.email !== undefined &&  register.password !== undefined){
    if(register.email !== ("" || undefined)  &&  register.password !== ("" || undefined)){
      setloader(true);
      const uploadData = {register};
      await dispatch(userLogin(uploadData)).then(async (res)=>{
        const status = await res?.payload?.status;
        if(status == 'Success'){
            await dispatch(addLocal(res.payload.session_data));
            storeData('USER_INFO',JSON.stringify({
            login:true,
            data:res.payload.session_data,
          }));
          singlestoreData('profileImage', res.payload.session_data.profileimage); 
          singlestoreData('isloggedin',"true"); 
          // setshoweye(true);
          if(isChecked){
              storeData('rememberme',JSON.stringify({
              data:{...res.meta.arg, isChecked:isChecked}
          }))}else{
            AsyncStorage.removeItem("rememberme");
          }
          navigation.navigate('HomeScreen');
          setloader(false);
        }else{
          setloader(false)
          Toast.show(res.payload.message, Toast.LONG);
        }
      })}else{
      setloader(false)
      setmessage('Please fill the above details');
    }
  }

  useEffect(() => {
    if(isFocused){
      getData();
    }
  },[isFocused]);

  if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
  }

  return (
    <SafeAreaView style={{paddingHorizontal:30}}>
      <IncompleteRegistrationModal modalVisible={modalVisible}/>
      <View style={{marginTop:40}}>
        <Text  style={styles.headingtexts}>Welcome</Text>
          <Text  style={styles.headingtext}>
            {data?((data?.role<='4')?'Dr. ':''):''}{data? data?.first_name+' '+data?.last_name:''}
          </Text>
        <Text style={styles.headingpara}>Log in to your own personal space in one of the fastest growing professional network for doctors.</Text>
    
      <TextInput style={[styelcss.customInputVerifyFullMobile,{ fontFamily: 'PlusJakartaSans-Regular',}]} 
          autoCapitalize="none"
          keyboardType="email-address" 
          placeholder='Email ID / Mobile Number*'
          placeholderTextColor='#51668A'
          onChangeText={(text)=>updateEmail(text)}
          defaultValue={datarm?.email}
          blurOnSubmit={true}
          autoComplete={"off"}
      />

      <TextInput style={[styelcss.customInputVerifyFullMobile,{ fontFamily: 'PlusJakartaSans-Regular',}]} 
          autoCapitalize="none"
          secureTextEntry={showeye}
          onChangeText={(text)=>setregister({...register, 
            password: text,
          })}
          inputType="password"
          placeholder="password"
          placeholderTextColor='#51668A'
          hideShow={showeye}
          defaultValue={datarm?.password}
          blurOnSubmit={true}
          autoComplete={"off"}
      />
      <Ionicons  style={styles.eyeIcon} name={showeye ? 'md-eye-off' : 'md-eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
      
      <View style={styles.forgetPassContainer}>
      <View style={styles.section}>
        <CheckBox
          onClick={() => toggleRememberMe()}
          isChecked={isChecked}
          checkBoxColor="#2C8892"
        />
        <Text style={{
            fontSize: 12,
            marginLeft:5,
            fontWeight: '400',
            fontStyle: 'normal',
            letterSpacing: 1,
            color: '#51668A',
            fontFamily: 'Inter-Regular',
          }}>
          Remember Me
        </Text>
      </View>
          <Text style={{
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'PlusJakartaSans-Bold',
            fontStyle: 'normal',
            lineHeight: 24,
            letterSpacing: 1,
            color: '#2376E5'}}
            onPress={()=>navigation.navigate('ForgetPassword')}
          >
          Forgot Password?
          </Text>
        </View>
        <Text style={{color:'red' , textAlign:'center', marginBottom:10,fontFamily: 'PlusJakartaSans-Regular' }}>{message}</Text>
        <CustomButton label={"Login"} onPress={() => authLogin()}  />
        <CustomButton label={"Register"} onPress={() => navigation.navigate('Register')}  />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
eyeIcon:{
  zIndex:1, 
  alignSelf:'flex-end', 
  marginTop:-50,
  marginRight:30,
  marginBottom:30
},
red: {
  backgroundColor: 'red',
},
checkbox: {
  marginRight:7,
  color:'blue',
},
headingtexts:{
  fontSize:16,
  fontFamily:"PlusJakartaSans-Bold",
  color: '#071B36',
},
headingtext:{
  fontSize: 20,
  color: '#071B36',
  fontFamily:"PlusJakartaSans-Bold",
},
headingpara:{
   fontFamily: 'Inter-Regular',
   fontSize: 14,
   fontWeight: '400',
   color: '#333',
  //  marginBottom: 24,
   fontStyle: 'normal',
   lineHeight: 20,
   letterSpacing: 0,
   color: '#51668A',
   marginTop:6
},
headingpara2:{
  fontFamily: 'Inter-Regular',
  fontSize: 14,
  fontWeight: '400',
  color: '#333',
  marginBottom: 10,
  //fontFamily: 'Plus Jakarta Sans',
  fontStyle: 'normal',
  letterSpacing: 1,
  color: '#8C97AB',
},
ragistertext:{
  flexDirection: 'row',
  justifyContent: 'center',       
  // position:'absolute',
  // bottom:-90,
  alignSelf:'center'
},
ragistertext2:{
  fontSize: 16,
  fontWeight: '400',
  color:'#51668A',
  fontFamily:"Inter-Regular"
},
section:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
forgetPassContainer:{
  justifyContent: 'space-between',
  flexDirection:'row',
  paddingHorizontal: 5,
  paddingBottom:12,
  alignItems:"center",
  marginTop:20
},
});

export default LoginScreen;