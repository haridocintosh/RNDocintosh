import React,{useRef} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import EngageNavigation from './EngageNavigation';
import CommunityNavigation from './CommunityNavigation';
import KnowledgeNavigation from './KnowledgeNavigation';


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#071B36',
          height:60
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily:'Inter-SemiBold',
          paddingBottom:5
        },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#95AACE',
      })}
     >

      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={() => ({
            tabBarIcon: () => (
            <Image source={require('../assets/images/logo.png')} style={{width: 25, height: 35}} />),
        })} 
      />

      <Tab.Screen
        name="Engage"
        component={EngageNavigation}
        options={{
          tabBarIcon: () => (
          <Image source={require('../assets/dr-icon/Engage.png')} style={{width:35,height:35,padding:10}} />),
        }}
      />
      
      <Tab.Screen
        name="Community"
        component={CommunityNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image source={require('../assets/dr-icon/Community.png')} style={{width:30,height:30}} />
          ),
        }}
      
      />
       <Tab.Screen
        name="Knowledge"
        component={KnowledgeNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image source={require('../assets/dr-icon/Knowledge.png')} style={{width:30,height:30}} />
          ),
        }}
      />
     
    </Tab.Navigator>

  );
};



export default TabNavigator;