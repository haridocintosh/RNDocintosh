import { View, Text, SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { styles } from './CommunityStyles';
import { Icon } from '../../navigation/ReuseLogics';
import CustomButton from '../../components/CustomButton';


const InvitePeers = ({navigation,route}) => {
    const {title} = route?.params;
    
    const handleRedirect = () => {
      navigation.navigate('CommunityDetailsPages')
    }

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
      {title.includes('Community')? 
        <CustomButton label={"Continue"} style={{position:'absolute',bottom:0}} onPress={() => handleRedirect()}/>
      : 
        console.log("false")
      }
    </SafeAreaView>
  )
}

export default InvitePeers;