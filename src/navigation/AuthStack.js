import React ,{useState}from 'react';
import { Text } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
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
import PracticeScreen from '../screens/PracticeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import InvitePeers from '../screens/InvitePeers';
import SelectInterest from '../screens/SelectInterest';
import ContactPermission from '../screens/ContactPermission';
import AppStack from './AppStack';
import { useNavigation } from '@react-navigation/native';
import QuizLevels from '../screens/QuizLevels/QuizLevels';
import TermsAndCondition from '../screens/commonpage/TermsAndCondition';
import ContactScreen from '../screens/commonpage/ContactScreen';




const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Login'}>
          {/* <Stack.Screen name="RegisterStudentScreen" component={RegisterStudentScreen}  options={{ title: 'Register', headerShown: true}} /> */}
          {/* <Stack.Screen name="PracticeScreen" component={PracticeScreen} /> */}
          {/**/}
          <Stack.Screen name="Intro" component={IntroStack} />
          <Stack.Screen name="InvitePeers" component={InvitePeers} options={{ title: 'Invite Peers', headerShown: true,  headerRight: () => (
              <Text onPress={() => navigation.navigate('Login')} style={{color:"#2376E5"}} >Skip</Text>)}}  />
          <Stack.Screen name="MobileScreen" component={MobileScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="LoginScreen"> 
            {(props) => <AppStack {...props}/>}
          </Stack.Screen>
          <Stack.Screen name="Register" component={RegisterScreen}  />
          <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ title: 'Verification OTP', headerShown: true}} />
          <Stack.Screen name="DoctorOtp" component={DoctorOtp} options={{ title: 'Verification OTP', headerShown: true}} />  
          <Stack.Screen name="RegisterTwoScreen" component={RegisterTwoScreen} options={{ title: 'Register', headerShown: true}} />
          <Stack.Screen name="RegisterStudentScreen" component={RegisterStudentScreen}  options={{ title: 'Register', headerShown: true}} />
          <Stack.Screen name="Congratulation" component={Congratulation} />
          <Stack.Screen name='ContactPermission' component={ContactPermission}  options={{ title: 'Invite Peers' , headerShown: true,
            headerRight: () => (
              <Text onPress={() => navigation.navigate('Login')} style={{color:"#2376E5"}} >Skip</Text>)
            }} /> 
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ title: 'Forgot Password' , headerShown: true}} />
          <Stack.Screen name="CreateNewPass" component={CreateNewPass} options={{ title: 'Create New Password' , headerShown: true}} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="ContactScreen"  component={ContactScreen} options={{ title: 'Contact Us', headerShown: true}}  />
          <Stack.Screen name="SelectInterest" component={SelectInterest} options={{ title: 'Select your Interest', headerShown: true,  headerRight: () => (
              <Text onPress={() => navigation.navigate('Login')} style={{color:"#2376E5", fontWeight:"700"}} >Skip</Text>)}} />
          <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} options={{ title: 'Terms & Condition', headerShown: true}} />
          <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} options={{ title: 'Verification OTP', headerShown: true}} />
          <Stack.Screen name="AppStack" component={AppStack} />
          <Stack.Screen name="QuizLevels" component={QuizLevels} />
          <Stack.Screen 
            name="HomeScreen"
            component={AppStack}
            options={{headerShown: false}}
          />
    </Stack.Navigator>
  );
};

export default AuthStack;