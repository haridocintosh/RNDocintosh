import {Text ,SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react';
import {Fontisto,MaterialCommunityIcons,Ionicons,Octicons} from 'react-native-vector-icons';
import { styles } from './SettingsStyles';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",paddingHorizontal:15 }}>
        {/* <TouchableOpacity style={styles.singleSettingBox}>
            <Fontisto name="locked" size={20} color={'#51668A'} style={{marginLeft:3}}/>
            <Text style={styles.SettingText}>Profile & Privacy Settings</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.singleSettingBox} onPress={() => navigation.navigate('AccountSettings')}>
            <MaterialCommunityIcons name="account" size={22} color={'#51668A'}/>
            <Text style={styles.SettingText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.singleSettingBox} onPress={() => navigation.navigate('SavedPost')}>
            <Ionicons name="bookmark" size={22} color={'#51668A'}/>
            <Text style={styles.SettingText}>Saved Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.singleSettingBox} onPress={() => navigation.navigate('BlockList')}>
            <MaterialCommunityIcons name="block-helper" size={22} color={'#51668A'}/>
            <Text style={styles.SettingText}>Block list</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.singleSettingBox}>
            <Octicons name="list-unordered" size={22} color={'#51668A'}/>
            <Text style={styles.SettingText}>Activity</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.singleSettingBox}>
            <Fontisto name="bell-alt" size={22} color={'#51668A'}/>
            <Text style={styles.SettingText}>Notification Settings</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.singleSettingBox}>
            <MaterialCommunityIcons name="account-cancel" size={22} color={'#51668A'}/>
            <Text style={styles.SettingText}>Deactivate & Delete Account</Text>
        </TouchableOpacity> */}
    </SafeAreaView>
  )
}

export default Settings