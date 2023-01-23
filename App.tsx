/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format 
 */

import React, { useState, useRef, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import store from './redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/RootNavigation';
import AppNav from './src/navigation/AppNav';

type SectionProps = PropsWithChildren<{
  title: string;
}>;




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //   });
  //  alert(`nativeversion ${Application.nativeApplicationVersion}`);
  //  alert(`nativeversion ${Application.applicationId}`);
  //  //console.log('AppVersionnn',Application.nativeApplicationVersion);
  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };

    
  }, []);

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
