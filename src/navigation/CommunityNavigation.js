import React from 'react'
import HandleBack from './HandleBack';
import { showHeaderItem ,showHeaderItemBackless} from './ReuseLogics';
import Community from '../screens/Community/Community';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JionCommunity from '../screens/Community/JionCommunity';
// import Sharepost from '../screens/HomeScreen/postScreen/SharePost';
import SharepostCommunity from '../screens/Community/SharepostCommunity';
import Members from '../screens/Community/Members';
import MessageScreen from '../screens/Community/MessageScreen';
import ConfirmationAction from '../screens/Settings/DeactivateNDeleteAccount/ConfirmationAction';
import DeleteAccount from '../screens/Settings/DeactivateNDeleteAccount/DeleteAccount';
import OtherProfileView from '../screens/ProfileScreen/OthersProfileScreen/OtherProfileView';
import BusinessPage from '../screens/BusinessPage/BusinessPage';
import CreateFocusGroup from '../screens/Community/CreateFocusGroup/CreateFocusGroup';
import CreateCommunity from '../screens/Community/CreateCommunity/CreateCommunity';
import CommunityUploadImage from '../screens/Community/CreateCommunity/CommunityUploadImage';
import ContactPermission from '../screens/ContactPermission';
import CommunityDetailsPages from '../screens/Community/CreateCommunity/CommunityDetailsPages';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InvitePeers from '../screens/Community/InvitePeers';
import About from '../screens/Community/About';


const CommunityNavigation = () => {
  const Stack = createNativeStackNavigator();
  const navigation  = useNavigation();


  const handleMessage = () => {
      navigation.navigate('CommunityDetailsPages');
  }

  return (
    <>
    <HandleBack/>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Community">
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="JionCommunity" component={JionCommunity} />
        <Stack.Screen name="SharepostCommunity" component={SharepostCommunity} options={showHeaderItem} />
        <Stack.Screen name="Members" component={Members} options={showHeaderItem} />
        <Stack.Screen name="MessageScreen" component={MessageScreen}/>
        <Stack.Screen name="ConfirmationAction" component={ConfirmationAction} options={showHeaderItem}/>
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={showHeaderItem}/>
        <Stack.Screen name="OtherProfileView" component={OtherProfileView} options={showHeaderItem}/>
        <Stack.Screen name="BusinessPage" component={BusinessPage} options={showHeaderItem}/>
        <Stack.Screen name="CreateFocusGroup" component={CreateFocusGroup} options={showHeaderItem}/>
        <Stack.Screen name="CreateCommunity" component={CreateCommunity} options={showHeaderItem}/>
        <Stack.Screen name="CommunityUploadImage" component={CommunityUploadImage} options={showHeaderItem}/>
        <Stack.Screen name="CommunityDetailsPages" component={CommunityDetailsPages} />
        <Stack.Screen name="InvitePeers" component={InvitePeers} options={showHeaderItem}/>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name='InvitePeersSkip' component={InvitePeers}  options={{ 
          title: 'Invite Peers' , 
          headerShown: true, 
          headerStyle: { backgroundColor: '#071B36'},
          headerTintColor: '#fff',
              headerRight:() => (
                <Text onPress={() => handleMessage()} style={{color:"#2376E5"}}>Skip</Text>)
              }}/> 
    </Stack.Navigator>
    </>
  )
}

export default CommunityNavigation