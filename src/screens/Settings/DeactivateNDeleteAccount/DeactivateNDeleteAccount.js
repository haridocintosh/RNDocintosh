import { View, Text,SafeAreaView, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { styles } from './DeactivateNDeleteAccountStyles'
import { Icon } from '../../../navigation/ReuseLogics';
import { Button } from 'react-native-elements';
import { getDeactiveDeleteApi } from '../../../../redux/reducers/SettingsSlice';
import { getLocalData } from '../../../apis/GetLocalData';
import { useDispatch } from 'react-redux';


const DeactivateNDeleteAccount = ({navigation}) => {
    const [selectDeactivate,setSelectDeactivate] = useState(false);
    const [selectDelete,setSelectDelete] = useState(false);
    const [value,setValue] = useState(null);
    const dispatch  = useDispatch();

    const handleAction = () => {
        if(selectDelete || selectDeactivate){
            navigation.navigate("ConfirmationAction",{value})
        }
    }

    const handleSelect = (val) => {
        if(val==1){
            setSelectDelete(false)
            setSelectDeactivate(!selectDeactivate);
            setValue(val);
        }else if(val==2){
            setSelectDeactivate(false)
            setSelectDelete(!selectDelete);
            setValue(val);
        }
    }

    useEffect(() =>{
        navigation.setOptions({title:'Deactivate or  Delete account'});
    },[]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",padding:15 }}>
        <View style={styles.deactivateContainer}>
            <View style={styles.selectContainer}>
                <Text style={styles.title}>Deactivate My Docintosh account</Text>
                <TouchableOpacity onPress={() => handleSelect('1')}>
                    <View style={[styles.selectRadio,{backgroundColor:selectDeactivate ? '#2C8892':'transparent'}]}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>
                Deactivating is <Text style={styles.subTitleHeighlight}>temprory</Text> and you can login anytime to continue using your account.
                Your account will be disabled and other users wont be able to find you on the application.
            </Text>
        </View>
        <View style={styles.deleteContainer}>
            <View style={styles.selectContainer}>
                <Text style={styles.title}>Delete My Docintosh account</Text>
                <TouchableOpacity onPress={() => handleSelect('2')}>
                    <View style={[styles.selectRadio,{backgroundColor:selectDelete ? '#2C8892':'transparent'}]}>
                        {Icon("",)}
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>
                Deleting is <Text style={styles.subTitleHeighlight}>permanent</Text> and you will lose all the date from your account. You will not be able to retrieve the content back.
            </Text>
        </View>
        <View>
            <Button title="Continue" buttonStyle={{backgroundColor:'#2C8892',width:'100%',marginTop:15}}
            titleStyle={{ color:'#fff', textAlign:"center"}} onPress={() => value != null && handleAction()}/>
            <Button title="cancel" buttonStyle={{backgroundColor:'#fff',width:'100%',marginTop:15,borderWidth:2,borderColor:"#2C8892"}}
            titleStyle={{ color:'#2C8892', textAlign:"center"}} onPress={() => navigation.goBack()} />
        </View>
    </SafeAreaView>
  )
}

export default DeactivateNDeleteAccount