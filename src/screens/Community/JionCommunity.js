import { View, Text,SafeAreaView ,TextInput,Image,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './CommunityStyles'

const JionCommunity = ({navigation}) => {
const [text , setText] = useState();

    // useEffect(() => {
    //     navigation.setOptions({ title: ''});
    // },[])
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <Text>JionCommunity</Text>


      <View style={styles.UserComments}>
        <View style={styles.UserInnerComments}>
            <View style={styles.inputCont} >
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{width:50,height:50, borderRadius:50}}/>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Message"
            />
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Feather name='paperclip' size={22}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name='camera' size={22} style={{marginHorizontal:15}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='send' size={22}/>
                </TouchableOpacity>
            </View>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default JionCommunity