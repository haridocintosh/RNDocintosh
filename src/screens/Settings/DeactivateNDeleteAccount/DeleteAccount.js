import { View, Text, SafeAreaView, Image,TouchableOpacity ,TextInput} from 'react-native'
import React, { useState } from 'react'
import { styles } from './DeactivateNDeleteAccountStyles';
import { Button } from 'react-native-elements';

const DeleteAccount = () => {
  const [selectReason, setSelectReason] = useState(null);
  
  const onSelect =(val)=>{
    switch (val) {
        case '1':
            setSelectReason("Community Not helpful");
            break;
        case '2':
            setSelectReason("I feel insecure");
            break;
        case '3':
            setSelectReason("I don’t trust the users");
            break;
        case '4':
            setSelectReason("Others");
            break;
        default:
            break;
    }
  }

  console.log(selectReason);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",padding:20 }}>
      <Text style={styles.deleteContentTitle}>We regret to see you go. We really appreciate your contribution towards helping your Docintosh family grow.</Text>
      <View style={styles.imgContainer}>
        <Image source={require('../../../assets/images/deleteAccount.png')} style={{width:'40%',height:200}}/>
      </View>
      <Text style={styles.livingSeasionTitle}>Tell us why you are leaving so we can help you improve your experience in the future </Text>
      <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:15}}>
        <TouchableOpacity  style={styles.livingSeasions} onPress={() => onSelect('1')}>
            <Text style={styles.livingSeasionText}>Community Not helpful</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.livingSeasions} onPress={() => onSelect("2")}>
            <Text style={styles.livingSeasionText}>I feel insecure</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.livingSeasions} onPress={() => onSelect("3")}>
            <Text style={styles.livingSeasionText}>I don’t trust the users</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.livingSeasions} onPress={() => onSelect("4")}>
            <Text style={styles.livingSeasionText}>Others</Text>
        </TouchableOpacity>
      </View>
        <TextInput
            placeholder='Description'
            style={styles.input}
            onChangeText={setSelectReason}
        />
        <View>
            <Button title={`Delete`} buttonStyle={{backgroundColor:'#2C8892',width:'100%',marginTop:15}}
            titleStyle={{ color:'#fff', textAlign:"center"}} onPress={() => handleAction()}/>
            <Button title="cancel" buttonStyle={{backgroundColor:'#fff',width:'100%',marginTop:15,borderWidth:2,borderColor:"#2C8892"}}
            titleStyle={{ color:'#2C8892', textAlign:"center"}} onPress={() => navigation.goBack()} />
       </View>
    </SafeAreaView>
  )
}

export default DeleteAccount