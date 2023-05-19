import { View, Text, SafeAreaView ,TextInput} from 'react-native'
import React,{useEffect} from 'react';
import { Button } from 'react-native-elements';
import { styles } from './DeactivateNDeleteAccountStyles';


const ConfirmationAction = ({navigation,route}) => {
    const {value} = route?.params;

    const handleAction = () => {
        if(value == 2){
            navigation.navigate('DeleteAccount');
        }
    }

    useEffect(() =>{
        navigation.setOptions({title: value == 1 ? "Deactivate account" : "Delete account"});
    },[])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",padding:15 }}>
      <Text style={styles.aboutAcountTitle}> You are about to {value == 1 ? "Deactivate" : "Delete"} your account</Text>
        <TextInput
            // value={value}            
            // onBlur={onBlur}            
            // onChangeText={value => onChange(value)}
            placeholder='Password*'
            style={styles.input}
        />
      <View>
            <Button title={`Confirm & ${value == 1 ? "Deactivate" : 'Delete'}`} buttonStyle={{backgroundColor:'#2C8892',width:'100%',marginTop:15}}
            titleStyle={{ color:'#fff', textAlign:"center"}} onPress={() => handleAction()}/>
            <Button title="cancel" buttonStyle={{backgroundColor:'#fff',width:'100%',marginTop:15,borderWidth:2,borderColor:"#2C8892"}}
            titleStyle={{ color:'#2C8892', textAlign:"center"}} onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  )
}

export default ConfirmationAction