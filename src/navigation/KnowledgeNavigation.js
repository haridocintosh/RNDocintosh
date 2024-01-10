import React from 'react'
import HandleBack from './HandleBack';
import { showHeaderItem ,showHeaderItemBackless} from './ReuseLogics';
import BlockList from '../screens/Settings/BlockList/BlockList';
import PdfViewer from '../screens/Knowledge/PdfViewer';
import KnowledgeScreen from '../screens/Knowledge/KnowledgeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartModules from '../screens/Knowledge/StartModules';
import AssesmentTest from '../screens/Knowledge/GetStarted/AssesmentTest';
import NotificationSettings from '../screens/Settings/NotificationSettings/NotificationSettings';
import DeactivateNDeleteAccount from '../screens/Settings/DeactivateNDeleteAccount/DeactivateNDeleteAccount';
import ConfirmationAction from '../screens/Settings/DeactivateNDeleteAccount/ConfirmationAction';
import DeleteAccount from '../screens/Settings/DeactivateNDeleteAccount/DeleteAccount';
import OtherProfileView from '../screens/ProfileScreen/OthersProfileScreen/OtherProfileView';
import BusinessPage from '../screens/BusinessPage/BusinessPage';
//import GetStartedModule from '../screens/Knowledge/GetStarted/GetStartedModule';


const KnowledgeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <HandleBack/>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="KnowledgeScreen">
        <Stack.Screen name="KnowledgeScreen" component={KnowledgeScreen} options={showHeaderItem} />
        <Stack.Screen name="BlockList" component={BlockList} options={showHeaderItem} />
        <Stack.Screen name="PdfViewer" component={PdfViewer} options={showHeaderItem} />
        <Stack.Screen name="StartModules" component={StartModules} options={showHeaderItem} />
        <Stack.Screen name="GetStartedModule" component={GetStartedModule} options={showHeaderItem} />
        <Stack.Screen name="AssesmentTest" component={AssesmentTest} options={showHeaderItem} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={showHeaderItem} />
        <Stack.Screen name="DeactivateNDeleteAccount" component={DeactivateNDeleteAccount} options={showHeaderItem} />
        <Stack.Screen name="ConfirmationAction" component={ConfirmationAction} options={showHeaderItem} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={showHeaderItem} />
        <Stack.Screen name="OtherProfileView" component={OtherProfileView} options={showHeaderItem} />
        <Stack.Screen name="BusinessPage" component={BusinessPage} options={showHeaderItem} />
    </Stack.Navigator>
    </>
  )
}

export default KnowledgeNavigation