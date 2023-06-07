import { View, Text,SafeAreaView,Switch } from 'react-native'
import React,{useEffect, useState} from 'react';
import { styles } from './NotificationSettingsStyle';
import { getUpdateNotificationApi } from '../../../../redux/reducers/SettingsSlice';
import { useDispatch } from 'react-redux';


export  const HandleSwitch = ({title,userId,column,bool}) => {

    const [isEnabled, setIsEnabled] = useState(bool);
    const dispatch = useDispatch();

    const handleSelect =  async () => {
        setIsEnabled(!isEnabled);
        const postData = {user_id:userId,column:column,value:isEnabled?1:0}
        console.log("postData",postData);
        const result = await dispatch(getUpdateNotificationApi(postData));
        console.log("result",result?.payload);
    }
console.log("isEnabled",isEnabled);
    return(
        <View style={styles.mainContainer}>
            <View style={styles.IconContainer}>
                <Text style={styles.ppNames}>{title}</Text>
            </View>
            <Switch
                trackColor={{false: '#DDDDDD', true: '#2C8892'}}
                thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => handleSelect()}
                value={isEnabled}
            />
        </View>
    )
}
