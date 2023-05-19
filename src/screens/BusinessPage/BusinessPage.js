import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { styles } from './BusinessPageStyles';
import MyPages from './MyPages';
import Following from './Following';
import { Icon } from '../../navigation/ReuseLogics';

const BusinessPage = ({navigation}) => {
    const [toggleTab, setToggleTab] = useState(true)
    useEffect(() =>{
        navigation.setOptions({ title: 'Business Page'});
    })
    
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6"}}>
        <View style={styles.toggleContainer}>
            <TouchableOpacity style={toggleTab ? styles.toggleButtonA : styles.toggleButtonD} 
            onPress={() => setToggleTab(true)}>
                <Text style={toggleTab ? styles.toggleTextA : styles.toggleTextD}>My Pages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={toggleTab ? styles.toggleButtonD : styles.toggleButtonA} 
            onPress={() => setToggleTab(false)}>
                <Text style={toggleTab ? styles.toggleTextD : styles.toggleTextA}>Following</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex:1,padding:10}}>
           {toggleTab ? <MyPages/> : <Following/>}
        </View>
        <TouchableOpacity style={styles.plusContainer} onPress={() => navigation.navigate("CreateBusinessPage")}>
            {Icon('AntDesign','plus',40,'#fff')}
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default BusinessPage