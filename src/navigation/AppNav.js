import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStack from './AppStack';
import LoginScreen from '../screens/LoginScreen';
import IntroStack from './IntroStack';
import OtpVerification from '../screens/OtpVerification';
import RegisterTwoScreen from '../screens/RegisterTwoScreen';
import Congratulation from '../screens/Congratulation';
import MobileScreen from '../screens/MobileScreen';
import ForgetPassword from '../screens/ForgetPassword';
import CreateNewPass from '../screens/CreateNewPass';
import RegisterStudentScreen from '../screens/RegisterStudentScreen';
import ForgotPasswordOTP from '../screens/ForgotPasswordOTP';
import DoctorOtp from '../screens/DoctorOtp';
import OnboardingScreen from '../screens/OnboardingScreen';
import SelectInterest from '../screens/SelectInterest';
import ContactPermission from '../screens/ContactPermission';
import QuizLevels from '../screens/QuizLevels/QuizLevels';
import TermsAndCondition from '../screens/commonpage/TermsAndCondition';
import ContactScreen from '../screens/commonpage/ContactScreen';
import HandleBack from './HandleBack';
import UpgradeApp from './UpgradeApp';
// import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import RegisterScreen from '../screens/RegisterScreen';


export default function AppNav() {
  
const [defaultRoute, setDefaultRoute] = useState();
const [statusKeyLoaded, setStatusKeyLoaded] = useState(false);
const Stack = createNativeStackNavigator();
const navigation  = useNavigation();

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const logData = jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null;
      if(logData?.login){
        setDefaultRoute("HomeScreen");
      }else{
      setDefaultRoute("Intro");
        // setDefaultRoute("RegisterTwoScreen");
      }
      setStatusKeyLoaded(true);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
      getData('USER_INFO');
  }, []);

const handleMessage = () => {
  alert("Successfully completed registration please login")
  setTimeout(() => {
    navigation.navigate('Login');
  }, 2000);
}

  return (<>
    {statusKeyLoaded && 
    <>
    <UpgradeApp/>
      <HandleBack/>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={defaultRoute}>
            <Stack.Screen name="Intro" component={IntroStack} />
            <Stack.Screen name="MobileScreen" component={MobileScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen}  options={{ title: 'Register', headerShown: true}}/>
            <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ title: 'Verification OTP', headerShown: true}} />
            <Stack.Screen name="DoctorOtp" component={DoctorOtp} options={{ title: 'Verification OTP', headerShown: true}} />  
            <Stack.Screen name="RegisterTwoScreen" component={RegisterTwoScreen} options={{ title: 'Register', headerShown: true}} />
            <Stack.Screen name="RegisterStudentScreen" component={RegisterStudentScreen}  options={{ title: 'Register', headerShown: true}} />
            <Stack.Screen name="Congratulation" component={Congratulation} />
            <Stack.Screen name='ContactPermission' component={ContactPermission}  options={{ title: 'Invite Peers' , headerShown: true,
              headerRight: () => (
                <Text onPress={() => handleMessage()} style={{color:"#2376E5"}}>Skip</Text>)
              }} /> 
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ title: 'Forgot Password' , headerShown: true}} />
            <Stack.Screen name="CreateNewPass" component={CreateNewPass} options={{ title: 'Create New Password' , headerShown: true}} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="ContactScreen"  component={ContactScreen} options={{ title: 'Contact Us', headerShown: true}}  />
            <Stack.Screen name="SelectInterest" component={SelectInterest} options={{ title: 'Select your Interest', headerShown: true,  
               headerRight: () => (
                <Text onPress={() => navigation.navigate('Login')} style={{color:"#2376E5", fontWeight:"700"}} >Skip</Text>)
              }} />
            <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} options={{ title: 'Terms & Condition', headerShown: true}} />
            <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} options={{ title: 'Verification OTP', headerShown: true}} />
            <Stack.Screen name="QuizLevels" component={QuizLevels} />
            <Stack.Screen name="HomeScreen" component={AppStack} options={{headerShown: false}} />
      </Stack.Navigator>
    </>
  }
  </>
  );
}
