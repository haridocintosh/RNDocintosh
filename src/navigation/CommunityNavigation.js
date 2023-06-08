import React from 'react'
import HandleBack from './HandleBack';
import { showHeaderItem ,showHeaderItemBackless} from './ReuseLogics';
import Community from '../screens/Community/Community';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JionCommunity from '../screens/Community/JionCommunity';
// import Sharepost from '../screens/HomeScreen/postScreen/SharePost';
import SharepostCommunity from '../screens/Community/SharepostCommunity';
import Members from '../screens/Community/Members';
import MessageScreen from '../screens/Community/MessageScreen';
import ConfirmationAction from '../screens/Settings/DeactivateNDeleteAccount/ConfirmationAction';
import DeleteAccount from '../screens/Settings/DeactivateNDeleteAccount/DeleteAccount';
import OtherProfileView from '../screens/ProfileScreen/OthersProfileScreen/OtherProfileView';
import BusinessPage from '../screens/BusinessPage/BusinessPage';

const CommunityNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <HandleBack/>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Community">
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="JionCommunity" component={JionCommunity} />
        <Stack.Screen name="SharepostCommunity" component={SharepostCommunity} options={showHeaderItem} />
        <Stack.Screen name="Members" component={Members} options={showHeaderItem} />
        <Stack.Screen name="MessageScreen" component={MessageScreen}/>
        <Stack.Screen name="ConfirmationAction" component={ConfirmationAction} options={showHeaderItem}/>
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={showHeaderItem}/>
        <Stack.Screen name="OtherProfileView" component={OtherProfileView} options={showHeaderItem}/>
        <Stack.Screen name="BusinessPage" component={BusinessPage} options={showHeaderItem}/>
    </Stack.Navigator>
    </>
  )
}

export default CommunityNavigation