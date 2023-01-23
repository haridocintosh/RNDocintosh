import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Knowledge2Screen from '../screens/Knowledge2Screen';
import SharePost from '../screens/HomeScreen/postScreen/SharePost';
import Polls from '../screens/Polls';
import Polls1 from '../screens/Polls1';
import SentimentixScreen from '../screens/SentimentixScreen';
import Sentimentixscreen2 from '../screens/Sentimentixscreen2';
import SentimentrixCong from '../screens/SentimentrixCong';
import Sentimentrix3 from '../screens/Sentimentrix3';
import Sentimentrix6 from '../screens/Sentimentrix6';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ProfileScreenFollowers from '../screens/ProfileScreen/ProfileScreenFollowers';
import ProfileScreenFollowing from '../screens/ProfileScreen/ProfileScreenFollowing';
import MultipleImagesUpload from '../screens/MiltipleImageUpload/MultipleImagesUpload';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostsScreen from '../screens/HomeScreen/PostsScreen';
import CommentsScreen from '../screens/HomeScreen/CommentsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import WhatsNew from '../screens/HomeScreen/What\'s New/What\'sNew';
import ContactPermission from '../screens/ContactPermission';
import ReportPost from '../screens/HomeScreen/ReportPost/ReportPost';
import ReportTrack from '../screens/HomeScreen/ReportPost/ReportTrack';
import { TouchableOpacity} from 'react-native';
import {AntDesign} from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import HandleBack from './HandleBack';
import BellNotification from '../screens/HomeScreen/BellNotification/BellNotification';
import QuizLevels from '../screens/QuizLevels/QuizLevels';
import { showHeaderItem, showHeaderItemBackless } from './ReuseLogics';
import QuizGame from '../screens/QuizLevels/QuizGame';
import KnowYourHeart from '../screens/QuizLevels/KnowYourHeart';
import Surveys from '../screens/Survay/Surveys';
import SurveyMcq from '../screens/Survay/SurveyMcq';
import ThankYouPage from '../screens/Survay/ThankYouPage';
import CommonSearchScreen from '../screens/HomeScreen/SearchScreens/CommonSearchScreen';
import Settings from '../screens/Settings/Settings';
import SavedPost from '../screens/Settings/SavedPost/SavedPost';
import BlockList from '../screens/Settings/BlockList/BlockList';
import SelectInterestInnerScreen from '../screens/SelectInterestInnerScreen';
import AudioScreen from '../screens/HomeScreen/postScreen/AudioScreen';
import AccountSettings from '../screens/Settings/Account Setting/AccountSettins';
import ResetPassword from '../screens/Settings/Account Setting/ResetPassword/ResetPassword';
import Leaderboard from '../screens/Leaderboard/Leaderboard';
import EarnDocCoins from '../screens/Leaderboard/EarnDocCoins';
import Rewards from '../components/Rewards/Rewards';
import SinglePost from '../screens/SinglePost';






const HomeNavigation = () => {
    const navigation  = useNavigation();

    const Stack = createNativeStackNavigator();
    
    return (<>
    <HandleBack/>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
          <Stack.Screen name="Knowledge2Screen" component={Knowledge2Screen} options={showHeaderItem} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={showHeaderItem}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="Polls" component={Polls} options={showHeaderItem}/>
          <Stack.Screen name="Polls1" component={Polls1} options={showHeaderItem}/>
          <Stack.Screen name="SentimentixScreen" component={SentimentixScreen} options={showHeaderItem}/>
          <Stack.Screen name="ProfileScreenFollowers" component={ProfileScreenFollowers} options={showHeaderItem}/>
          <Stack.Screen name="ProfileScreenFollowing" component={ProfileScreenFollowing} options={showHeaderItem}/>
          <Stack.Screen  name="SharePost" component={SharePost} options={showHeaderItem} />
          <Stack.Screen name="CommonSearchScreen" component={CommonSearchScreen}/>
          <Stack.Screen name="PostsScreen" component={PostsScreen} options={showHeaderItem}/>
          <Stack.Screen name="CommentsScreen" component={CommentsScreen} options={showHeaderItem} />
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={showHeaderItem} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={showHeaderItem}/>
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={showHeaderItem}/>
          <Stack.Screen name="WhatsNew" component={WhatsNew} options={showHeaderItem}/>
          <Stack.Screen name='insideContactPermission' component={ContactPermission}  options={showHeaderItem} />
          <Stack.Screen name='SelectInterestInnerScreen' component={SelectInterestInnerScreen}  options={showHeaderItem} />
          <Stack.Screen name='BellNotification' component={BellNotification}  options={showHeaderItem} />
          <Stack.Screen name='ReportPost' component={ReportPost}  options={showHeaderItem} />
          <Stack.Screen name='Settings' component={Settings}  options={showHeaderItem} />
          <Stack.Screen name='ReportTrack' component={ReportTrack} options={{ headerShown: true,
             title: "Report Post",
             headerStyle: {backgroundColor: '#071B36'},
             headerTintColor: '#fff',
             headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ReportPost')}>
                   <AntDesign name="close" size={25} style={{color:"#fff",marginRight:5}} />
                 </TouchableOpacity>
                )
            }}/>
        <Stack.Screen name="QuizLevels" component={QuizLevels} options={showHeaderItem}/>
        <Stack.Screen name="QuizGame" component={QuizGame} options={showHeaderItem} />
        <Stack.Screen name="KnowYourHeart" component={KnowYourHeart} options={showHeaderItemBackless}/>
        <Stack.Screen name="Surveys" component={Surveys} options={showHeaderItem}/>
        <Stack.Screen name="SurveyMcq" component={SurveyMcq} options={showHeaderItem}/>
        <Stack.Screen name="ThankYouPage" component={ThankYouPage} options={showHeaderItemBackless}/>
        <Stack.Screen name="SavedPost" component={SavedPost} options={showHeaderItem} />
        <Stack.Screen name="BlockList" component={BlockList} options={showHeaderItem} />
        <Stack.Screen name="AudioScreen" component={AudioScreen} options={showHeaderItem} />
        <Stack.Screen name="AccountSettings" component={AccountSettings} options={showHeaderItem} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={showHeaderItem} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} options={showHeaderItem} />
        <Stack.Screen name="EarnDocCoins" component={EarnDocCoins} options={showHeaderItem} />
        <Stack.Screen name="Rewards" component={Rewards} options={showHeaderItem} />
        <Stack.Screen name="SinglePost" component={SinglePost} options={showHeaderItem}/>
        {/* <Stack.Screen name="MultipleImagesUpload" component={MultipleImagesUpload}/>
          <Stack.Screen name="SentimentrixCong" component={SentimentrixCong} options={showHeaderItem}/>
          <Stack.Screen name="Sentimentrix6" component={Sentimentrix6} options={showHeaderItem}/>
          <Stack.Screen name="Sentimentixscreen2" component={Sentimentixscreen2} options={showHeaderItem}/> 
          <Stack.Screen name="Sentimentrix3" component={Sentimentrix3} options={showHeaderItem}/>*/}
        </Stack.Navigator>
        </>
      );
}

export default HomeNavigation