import { View, Text, SafeAreaView,TouchableOpacity,TextInput,Image } from 'react-native';
import React , {useState,useRef}from 'react';
import { styles } from './CommunityStyles';
import MemberOptionsModal from './MemberOptionsModal';
import { Icon } from '../../navigation/ReuseLogics';


const Members = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const  openOption = (val) => {
        setModalVisible(!modalVisible)
    }

  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1,padding:15}}>
        <View style={styles.recomandedUsers}>
            <View style={styles.recomandedUsersPic}>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={styles.UsersProfilePic}/>
                <View style={styles.userInfo}>
                    <Text style={styles.hospitalName}>Dr. Sudeep Bhatra</Text>
                    <Text style={styles.groupsText}>Pediatric Surgeon</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => openOption("JionCommunity")}>
                    {Icon('Entypo','dots-three-vertical',25, '#071B36')}
                </TouchableOpacity>
                <MemberOptionsModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Members