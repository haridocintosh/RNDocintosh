import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Entypo} from 'react-native-vector-icons';
// import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
// import EditProfileScreen from '../screens/EditProfileScreen';
// import MessagesScreen from '../screens/MessagesScreen';
// import MomentsScreen from '../screens/MomentsScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import LoginScreen from '../screens/LoginScreen';
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} /> }
      screenOptions={{
        headerTintColor:'#45B5C0' ,
        drawerActiveBackgroundColor: '#45B5C0',
        drawerActiveTintColor: '#fff',      
        drawerInactiveTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#071B36',
          width: 325,
        },
        drawerLabelStyle: {marginLeft: -20,fontFamily:'Inter-SemiBold',fontSize: 15,},
      }}
      >
      <Drawer.Screen name="Home" component={TabNavigator} options={{headerShown: false,
          drawerIcon: () => (
            <Entypo name="home" size={25} style={{color:'#ffff'}} />
          ),
        }}
      />
    </Drawer.Navigator>

    
  );
};

export default AppStack;
