import React from 'react';
import type {PropsWithChildren} from 'react';
import { useColorScheme, LogBox } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
