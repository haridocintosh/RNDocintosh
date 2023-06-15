import { View, Text, SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { styles } from './CommunityStyles';
import { Icon } from '../../navigation/ReuseLogics';


const InvitePeers = ({navigation,route}) => {
    const {title} = route?.params;

    const handleOtherProfile = () => {

    };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6", padding:15}}>
      <Text style={styles.IPTitle}>{title}</Text>
      <View style={styles.followerContainer}>
        <View style={styles.followerLhs}>
            <TouchableOpacity onPress={() => handleOtherProfile()}>
                <Image source={require('../../assets/dr-icon/p2.png')} style={styles.profileimgfollower}/>
            </TouchableOpacity>
            <View style={styles.followerName}>
                <TouchableOpacity onPress={() => handleOtherProfile()}>
                    <Text style={styles.followerNameText}>Dr.Kiran</Text>
                </TouchableOpacity>
                <Text style={styles.followerSpecialist}>Urology</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text style={styles.joinText}>{Icon('Entypo','plus',13,'#2376E5')} Invite</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default InvitePeers;