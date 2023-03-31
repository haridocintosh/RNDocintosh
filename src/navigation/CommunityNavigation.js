import React from 'react'
import HandleBack from './HandleBack';
import { showHeaderItem ,showHeaderItemBackless} from './ReuseLogics';
import Community from '../screens/Community/Community';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JionCommunity from '../screens/Community/JionCommunity';


const CommunityNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <HandleBack/>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Community">
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="JionCommunity" component={JionCommunity}/>
    </Stack.Navigator>
    </>
  )
}

export default CommunityNavigation