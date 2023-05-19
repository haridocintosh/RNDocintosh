import {Text ,SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react';
import { styles } from './SettingsStyles';
import { Icon } from '../../navigation/ReuseLogics';


const data =[
    {
        name:"Profile & Privacy Settings",
        provider:'Fontisto',
        redirect:'ProfileNPrivacySettings',
        icon:'locked'
    },
    {
        name:"Account Settings",
        provider:'MaterialCommunityIcons',
        redirect:'AccountSettings',
        icon:'account'
    },
    {
        name:"Saved Post",
        provider:'Ionicons',
        redirect:'SavedPost',
        icon:'bookmark'
    },
    {
        name:"Block list",
        provider:'MaterialCommunityIcons',
        redirect:'BlockList',
        icon:'block-helper'
    },
    {
        name:"Activity",
        provider:'Octicons',
        redirect:'',
        icon:'list-unordered'
    },
    {
        name:"Notification Settings",
        provider:'Fontisto',
        redirect:'NotificationSettings',
        icon:'bell-alt'
    },
    {
        name:"Deactivate & Delete Account",
        provider:'MaterialCommunityIcons',
        redirect:'DeactivateNDeleteAccount',
        icon:'account-cancel'
    },
]

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",paddingHorizontal:15 }}>
        {data?.map((data,i) => {
            return(
            <TouchableOpacity style={styles.singleSettingBox} key={i} onPress={() => navigation.navigate(data.redirect)}>
                {Icon(data.provider,data.icon,20,'#51668A')}
                <Text style={styles.SettingText}>{data.name}</Text>
            </TouchableOpacity>
            )
        })}
    </SafeAreaView>
  )
}

export default Settings