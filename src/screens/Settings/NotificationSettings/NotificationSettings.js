import { View, Text,SafeAreaView,Switch } from 'react-native'
import React,{useState} from 'react';
import { styles } from './NotificationSettingsStyle';

const NotificationSettings = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const handleSelect =  async () => {
        setIsEnabled(!isEnabled)
    }


    const HandleSwitch = ({title}) => {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.IconContainer}>
                    <Text style={styles.ppNames}>{title}</Text>
                </View>
                <Switch
                    trackColor={{false: '#DDDDDD', true: '#2C8892'}}
                    thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    // onChange={() => handleSelect()}
                    onValueChange={() => handleSelect()}
                    value={isEnabled}
                />
            </View>
        )
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",padding:15 }}>
        <HandleSwitch title={"Post claps"}/>
        <HandleSwitch title={"Comment alert on your post"}/>
        <HandleSwitch title={"Alert on post upload in your circle"}/>
    </SafeAreaView>
  )
}

export default NotificationSettings