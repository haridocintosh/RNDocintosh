import { View, Text,Image,TouchableOpacity,FlatList,Dimensions} from 'react-native'
import React, { useEffect, useState ,useRef} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from '../CommunityStyles'
import Card from '../../../utils/Card';


const CreateCommunityThreads = () => {
  return (
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:60,height:60}}/>
            <Text style={styles.FocusLive}>Live</Text>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                  <Image source={require('../../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                  <Image source={require('../../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
      </Card>
  )
}

export default CreateCommunityThreads