import React from 'react'
import HandleBack from './HandleBack';
import { showHeaderItem ,showHeaderItemBackless} from './ReuseLogics';
import Community from '../screens/Community/Community';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JionCommunity from '../screens/Community/JionCommunity';
import Sharepost from '../screens/HomeScreen/postScreen/SharePost';
import Members from '../screens/Community/Members';
import MessageScreen from '../screens/Community/MessageScreen';


const CommunityNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <HandleBack/>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Community">
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="JionCommunity" component={JionCommunity} />
        <Stack.Screen name="Sharepost" component={Sharepost} options={showHeaderItem} />
        <Stack.Screen name="Members" component={Members} options={showHeaderItem} />
        <Stack.Screen name="MessageScreen" component={MessageScreen}/>
    </Stack.Navigator>
    </>
  )
}

export default CommunityNavigation