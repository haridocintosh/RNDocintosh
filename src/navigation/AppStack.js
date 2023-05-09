import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} /> }
      screenOptions={{
        headerTintColor:'#45B5C0',
        drawerActiveBackgroundColor: '#45B5C0',
        drawerActiveTintColor: '#fff',      
        drawerInactiveTintColor: '#fff',
        drawerStyle:{backgroundColor:'#071B36', width: 325},
        drawerLabelStyle: {marginLeft: -20, fontFamily:'Inter-Regular',fontSize: 15}
      }}>
      <Drawer.Screen name="Dashboard" component={TabNavigator} options={{headerShown: false,
          drawerIcon: () => (
            <Entypo name="home" size={25} style={{color:'#ffff'}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
