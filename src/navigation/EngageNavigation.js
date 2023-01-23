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
        <Stack.Screen name="SurveyMcq" component={SurveyMcq} options={showHeaderItem} />
        <Stack.Screen name="Surveys" component={Surveys} options={showHeaderItem} />
        <Stack.Screen name="ThankYouPage" component={ThankYouPage} options={showHeaderItemBackless}/>
        <Stack.Screen name="SavedPost" component={SavedPost} options={showHeaderItem} />
        <Stack.Screen name="BlockList" component={BlockList} options={showHeaderItem} />
    </Stack.Navigator>
    </>
  )
}

export default EngageNavigation