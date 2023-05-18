import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuizLevels from '../screens/QuizLevels/QuizLevels';
import KnowYourHeart from '../screens/QuizLevels/KnowYourHeart';
import QuizGame from '../screens/QuizLevels/QuizGame';
import SurvayCheckBoxMcq from '../screens/Survay/SurvayCheckBoxMcq';
import SurveyMcq from '../screens/Survay/SurveyMcq';
import Surveys from '../screens/Survay/Surveys';
import ThankYouPage from '../screens/Survay/ThankYouPage';
import EngageScreen from '../screens/EngageScreen';
import HandleBack from './HandleBack';
import { showHeaderItem ,showHeaderItemBackless} from './ReuseLogics';
import SavedPost from '../screens/Settings/SavedPost/SavedPost';
import BlockList from '../screens/Settings/BlockList/BlockList';
import Polls from '../screens/Polls/Polls';
import PollsThankYouPage from '../screens/Polls/PollsThankYouPage';
import Sentimetrix from '../screens/Sentimetrix/Sentimetrix';
import SentimetrixList from '../screens/Sentimetrix/SentimetrixList';
import SentimetrixMcq from '../screens/Sentimetrix/SentimetrixMcq';
import CongratulationPage from '../screens/Sentimetrix/CongratulationPage';
import SentimetrixThankYouPage from '../screens/Sentimetrix/SentimetrixThankYouPage';
import NotificationSettings from '../screens/Settings/NotificationSettings/NotificationSettings';
import DeactivateNDeleteAccount from '../screens/Settings/DeactivateNDeleteAccount/DeactivateNDeleteAccount';
import ConfirmationAction from '../screens/Settings/DeactivateNDeleteAccount/ConfirmationAction';
import DeleteAccount from '../screens/Settings/DeactivateNDeleteAccount/DeleteAccount';
import OthersProfileScreen from '../screens/ProfileScreen/OthersProfileScreen/OthersProfileScreen';
import OtherProfileView from '../screens/ProfileScreen/OthersProfileScreen/OtherProfileView';
import OthersProfileFollowers from '../screens/ProfileScreen/OthersProfileScreen/OthersProfileFollowers';
import OthersProfileFollowing from '../screens/ProfileScreen/OthersProfileScreen/OthersProfileFollowing';
import BusinessPage from '../screens/BusinessPage/BusinessPage';


const EngageNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <>
    <HandleBack/>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="EngageScreen">
        <Stack.Screen name="EngageScreen" component={EngageScreen} options={showHeaderItem}/>
        <Stack.Screen name="QuizLevels" component={QuizLevels} options={showHeaderItem}/>
        <Stack.Screen name="KnowYourHeart" component={KnowYourHeart} options={showHeaderItemBackless}/>
        <Stack.Screen name="QuizGame" component={QuizGame} options={showHeaderItem} />
        <Stack.Screen name="SurvayCheckBoxMcq" component={SurvayCheckBoxMcq}/>
        <Stack.Screen name="SurveyMcq" component={SurveyMcq} options={showHeaderItem}/>
        <Stack.Screen name="Surveys" component={Surveys} options={showHeaderItem}/>
        <Stack.Screen name="Polls" component={Polls} options={showHeaderItem}/>
        <Stack.Screen name="ThankYouPage" component={ThankYouPage} options={showHeaderItemBackless}/>
        <Stack.Screen name="PollsThankYouPage" component={PollsThankYouPage} options={showHeaderItemBackless}/>
        <Stack.Screen name="Sentimetrix" component={Sentimetrix} options={showHeaderItem}/>
        <Stack.Screen name="SavedPost" component={SavedPost} options={showHeaderItem} />
        <Stack.Screen name="BlockList" component={BlockList} options={showHeaderItem} />
        <Stack.Screen name="SentimetrixList" component={SentimetrixList} options={showHeaderItem} />
        <Stack.Screen name="SentimetrixMcq" component={SentimetrixMcq} options={showHeaderItem} />
        <Stack.Screen name="CongratulationPage" component={CongratulationPage} options={showHeaderItem} />
        <Stack.Screen name="SentimetrixThankYouPage" component={SentimetrixThankYouPage} options={showHeaderItem} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={showHeaderItem} />
        <Stack.Screen name="DeactivateNDeleteAccount" component={DeactivateNDeleteAccount} options={showHeaderItem} />
        <Stack.Screen name="ConfirmationAction" component={ConfirmationAction} options={showHeaderItem} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={showHeaderItem} />
        <Stack.Screen name="OthersProfileScreen" component={OthersProfileScreen} options={showHeaderItem} />
        <Stack.Screen name="OtherProfileView" component={OtherProfileView} options={showHeaderItem} />
        <Stack.Screen name="OthersProfileFollowers" component={OthersProfileFollowers} options={showHeaderItem} />
        <Stack.Screen name="OthersProfileFollowing" component={OthersProfileFollowing} options={showHeaderItem} />
        <Stack.Screen name="BusinessPage" component={BusinessPage} options={showHeaderItem} />
        
    </Stack.Navigator>
    </>
  )
}

export default EngageNavigation