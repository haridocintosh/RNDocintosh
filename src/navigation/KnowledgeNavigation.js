import React from 'react'
import HandleBack from './HandleBack';
import { showHeaderItem ,showHeaderItemBackless} from './ReuseLogics';
import SavedPost from '../screens/Settings/SavedPost/SavedPost';
import BlockList from '../screens/Settings/BlockList/BlockList';
import PdfViewer from '../screens/Knowledge/PdfViewer';
import KnowledgeScreen from '../screens/Knowledge/KnowledgeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const KnowledgeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <HandleBack/>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="KnowledgeScreen">
        <Stack.Screen name="KnowledgeScreen" component={KnowledgeScreen} options={showHeaderItem} />
        <Stack.Screen name="BlockList" component={BlockList} options={showHeaderItem} />
        <Stack.Screen name="PdfViewer" component={PdfViewer} options={showHeaderItem} />
    </Stack.Navigator>
    </>
  )
}

export default KnowledgeNavigation