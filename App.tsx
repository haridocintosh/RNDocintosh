import React, {useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { useColorScheme, LogBox, Platform } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import store from './redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/RootNavigation';
import AppNav from './src/navigation/AppNav';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  useEffect(()=>{
    SplashScreen.hide();
    OneSignal.setAppId("33db6c28-a3c3-4c1b-bbb0-e7442543f32d");
    OneSignal.setNotificationOpenedHandler(notification => {
    });
  },[])


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppNav/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
