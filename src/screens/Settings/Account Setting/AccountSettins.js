import { View, Text ,SafeAreaView,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react';
import { styles } from './AccountSettingStyles';
import { Entypo  } from '@expo/vector-icons';

const AccountSettings = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({ title:'Account Settings'});
    },[])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",paddingHorizontal:15 }}>
        <TouchableOpacity style={styles.singleSettingBox} onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.SettingText}>Reset Password</Text>
            <Entypo name="chevron-thin-right" size={17} color="black" />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.singleSettingBox} onPress={() => navigation.navigate('AccountSettings')}>
            <Text style={styles.SettingText}>How can people contact you</Text>
            <Entypo name="chevron-thin-right" size={24} color="black" />
        </TouchableOpacity> */}
        
    </SafeAreaView>
  )
}

export default AccountSettings